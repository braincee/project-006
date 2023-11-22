import FunctionContainer from '@/components/FunctionContainer'
import Sha3 from '@/components/web3js/utils/Sha3'
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
            <Typography level="h1">Sha3</Typography>
            <Typography level="h2">The Sha3 function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.sha3" description="">
                    <Sha3 />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
