import FunctionContainer from '@/components/FunctionContainer'
import HexToAscii from '@/components/web3js/utils/HexToAscii'
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
            <Typography level="h1">HexToAscii</Typography>
            <Typography level="h2">The HexToAscii function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.hexToAscii" description="">
                    <HexToAscii />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
