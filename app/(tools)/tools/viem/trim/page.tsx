import FunctionContainer from '@/components/FunctionContainer'
import Trim from '@/components/viem/utils/Data/Trim'

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
            <Typography level="h1">Trim</Typography>
            <Typography level="h2">The Trim function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.trim" description="">
                    <Trim />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
