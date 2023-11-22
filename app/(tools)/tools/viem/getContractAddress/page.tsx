import FunctionContainer from '@/components/FunctionContainer'
import GetContractAddress from '@/components/viem/utils/Addresses/GetContractAddress'

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
            <Typography level="h1">GetContractAddress</Typography>
            <Typography level="h2">The GetContractAddress function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.getContractAddress" description="">
                    <GetContractAddress />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
