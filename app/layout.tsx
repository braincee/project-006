import ThemeRegistry from '@/components/ThemeRegistry'
import { GeistMono, GeistSans } from 'geist/font'
import { Metadata } from 'next'

export default function Layout(props: { children: React.ReactNode }) {
    return (
            <ThemeRegistry
                normalFont={GeistSans.style.fontFamily}
                monoFont={GeistMono.style.fontFamily}
            >
                <html lang="en">
                    <body
                        style={{
                            minHeight: '100dvh',
                        }}
                    >
                        {props.children}
                    </body>
                </html>
            </ThemeRegistry>
    )
}
