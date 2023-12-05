import FunctionContainer from '@/components/FunctionContainer'
import HexToUtf8 from '@/components/web3js/utils/HexToUtf8'
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
            <Typography level="h1">HexToUtf8</Typography>
            <Typography level="h2">The HexToUtf8 function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.hexToUtf8" description="">
                    <HexToUtf8 />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
