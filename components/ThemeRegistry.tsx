'use client'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/joy/CssBaseline'
import { CssVarsProvider, extendTheme } from '@mui/joy/styles'
import { useServerInsertedHTML } from 'next/navigation'
import { ReactNode, useState } from 'react'

// const theme = extendTheme({
//     fontFamily: {
//         display: 'inherit', // applies to `h1`–`h4`
//         body: 'inherit', // applies to `title-*` and `body-*`
//         fallback: 'Inter, sans-serif',
//     },
// })

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export default function ThemeRegistry({
    normalFont,
    monoFont,
    children,
}: {
    normalFont: string
    monoFont: string
    children: ReactNode
}) {
    const [{ cache, flush }] = useState(() => {
        const cache = createCache({ key: 'joy' })
        cache.compat = true
        const prevInsert = cache.insert
        let inserted: string[] = []
        cache.insert = (...args) => {
            const serialized = args[1]
            if (cache.inserted[serialized.name] === undefined) {
                inserted.push(serialized.name)
            }
            return prevInsert(...args)
        }
        const flush = () => {
            const prevInserted = inserted
            inserted = []
            return prevInserted
        }
        return { cache, flush }
    })

    useServerInsertedHTML(() => {
        const names = flush()
        if (names.length === 0) {
            return null
        }
        let styles = ''
        for (const name of names) {
            styles += cache.inserted[name]
        }
        return (
            <style
                key={cache.key}
                data-emotion={`${cache.key} ${names.join(' ')}`}
                // biome-ignore lint/security/noDangerouslySetInnerHtml: <>
                dangerouslySetInnerHTML={{
                    __html: styles,
                }}
            />
        )
    })

    return (
        <CacheProvider value={cache}>
            <CssVarsProvider
                theme={extendTheme({
                    fontFamily: {
                        display: normalFont,
                        body: normalFont,
                        code: monoFont,
                        fallback: 'Inter, sans-serif',
                    },
                    cssVarPrefix: 'l3', // optional
                })}
                //  the custom theme is optional
            >
                <CssBaseline />
                {children}
            </CssVarsProvider>
        </CacheProvider>
    )
}
