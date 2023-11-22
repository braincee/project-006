import FunctionContainer from '@/components/FunctionContainer'
import GetEnsResolver from '@/components/viem/ens/GetEnsResolver'


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
            <Typography level="h1">GetEnsResolver</Typography>
            <Typography level="h2">The GetEnsResolver function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.getEnsResolver" description="">
                    <GetEnsResolver
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
