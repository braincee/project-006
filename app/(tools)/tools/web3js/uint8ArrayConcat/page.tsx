import FunctionContainer from '@/components/FunctionContainer'
import Uint8ArrayConcat from '@/components/web3js/utils/Uint8ArrayConcat'
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
            <Typography level="h1">Uint8ArrayConcat</Typography>
            <Typography level="h2">The Uint8ArrayConcat function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.hexTonumber" description="">
                    <Uint8ArrayConcat />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
