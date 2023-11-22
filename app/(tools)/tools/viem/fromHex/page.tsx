import FunctionContainer from '@/components/FunctionContainer'
import FromHex from '@/components/viem/utils/Encoding/FromHex'

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
            <Typography level="h1">FromHex</Typography>
            <Typography level="h2">The FromHex function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.fromHex" description="">
                    <FromHex />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
