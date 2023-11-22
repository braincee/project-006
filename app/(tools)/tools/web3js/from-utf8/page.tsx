import FunctionContainer from '@/components/FunctionContainer'
import FromUtf8 from '@/components/web3js/utils/FromUtf8'
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
            <Typography level="h1">FromUtf8</Typography>
            <Typography level="h2">The FromUtf8 function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.fromUtf8" description="">
                    <FromUtf8 />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
