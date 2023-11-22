import FunctionContainer from '@/components/FunctionContainer'
import GetAddress from '@/components/viem/utils/Addresses/GetAddress'
import IsAddress from '@/components/viem/utils/Addresses/IsAddress'

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
            <Typography level="h1">IsAddress</Typography>
            <Typography level="h2">The IsAddress function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.isAddress" description="">
                    <IsAddress />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
