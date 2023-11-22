import FunctionContainer from '@/components/FunctionContainer'
import Keccak256Wrapper from '@/components/web3js/utils/Keccak256Wrapper'
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
            <Typography level="h1">KeccaK265Wrapper</Typography>
            <Typography level="h2">The KeccaK256Wrapper function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.keccaK256Wrapper" description="">
                    <Keccak256Wrapper />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
