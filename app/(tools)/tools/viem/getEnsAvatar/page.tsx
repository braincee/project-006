import FunctionContainer from '@/components/FunctionContainer'
import GetEnsAvatar from '@/components/viem/ens/GetEnsAvatar'

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
            <Typography level="h1">GetEnsAvatar</Typography>
            <Typography level="h2">The GetEnsAvatar function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.getEnsAvatar" description="">
                    <GetEnsAvatar />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
