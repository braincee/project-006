import FunctionContainer from '@/components/FunctionContainer'
import Sha3Raw from '@/components/web3js/utils/Sha3Raw'
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
            <Typography level="h1">Sha3Raw</Typography>
            <Typography level="h2">The Sha3Raw function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.sha3Raw" description="">
                    <Sha3Raw />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
