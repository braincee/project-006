import FunctionContainer from '@/components/FunctionContainer'
import IsHex from '@/components/viem/utils/Data/IsHex'

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
            <Typography level="h1">IsHex</Typography>
            <Typography level="h2">The IsHex function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.pad" description="">
                    <IsHex />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
