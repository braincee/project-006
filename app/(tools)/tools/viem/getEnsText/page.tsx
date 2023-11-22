import FunctionContainer from '@/components/FunctionContainer'
import GetEnsText from '@/components/viem/ens/GetEnsText'

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
            <Typography level="h1">GetEnsText</Typography>
            <Typography level="h2">The GetEnsText function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.getEnsText" description="">
                    <GetEnsText />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
