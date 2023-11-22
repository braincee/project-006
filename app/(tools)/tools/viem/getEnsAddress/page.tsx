import FunctionContainer from '@/components/FunctionContainer'
import GetEnsAddress from '@/components/viem/ens/GetEnsAddress'

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
            <Typography level="h1">getEnsAddress</Typography>
            <Typography level="h2">The getEnsAddress function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.getEnsAddress" description="">
                    <GetEnsAddress />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
