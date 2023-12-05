import FunctionContainer from '@/components/FunctionContainer'
import Normalize from '@/components/viem/ens/Normalize'

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
            <Typography level="h1">Normalize</Typography>
            <Typography level="h2">The Normalize function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.normalize" description="">
                    <Normalize />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
