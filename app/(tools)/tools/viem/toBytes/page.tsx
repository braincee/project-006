import FunctionContainer from '@/components/FunctionContainer'
import ToBytes from '@/components/viem/utils/Encoding/ToBytes'

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
            <Typography level="h1">ToBytes</Typography>
            <Typography level="h2">The ToBytes function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.toBytes" description="">
                    <ToBytes />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
