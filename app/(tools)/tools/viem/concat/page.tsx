import FunctionContainer from '@/components/FunctionContainer'
import Concat from '@/components/viem/utils/Data/Concat'

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
            <Typography level="h1">Concat</Typography>
            <Typography level="h2">The Concat function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.concat" description="">
                    <Concat />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
