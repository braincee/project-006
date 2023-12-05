import FunctionContainer from '@/components/FunctionContainer'
import IsAddressEqual from '@/components/viem/utils/Addresses/IsAddressEqual'

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
            <Typography level="h1">IsAddressEqual</Typography>
            <Typography level="h2">The IsAddressEqual function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.isAddressEqual" description="">
                    <IsAddressEqual />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
