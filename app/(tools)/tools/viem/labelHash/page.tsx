import FunctionContainer from '@/components/FunctionContainer'
import LabelHash from '@/components/viem/ens/LabelHash'

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
            <Typography level="h1">LabelHash</Typography>
            <Typography level="h2">The LabelHash function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.labelHash" description="">
                    <LabelHash />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
