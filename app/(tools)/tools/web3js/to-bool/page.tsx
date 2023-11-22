import FunctionContainer from '@/components/FunctionContainer'
import ToBool from '@/components/web3js/utils/ToBool'
import { Stack, Typography } from '@mui/joy'

export default async function Web3JsFunctionPage() {
    return (
        <Stack
            direction={{ xs: 'column', md: 'column' }}
            sx={{
                height: '100%',
                width: '100%',
            }}
            spacing={2}
        >
            <Typography level="h1">ToBool</Typography>
            <Typography level="h2">The ToBool function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.toBool" description="">
                    <ToBool />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
