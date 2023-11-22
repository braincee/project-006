import FunctionContainer from '@/components/FunctionContainer'
import ParseEther from '@/components/viem/utils/Units/ParseEther'

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
            <Typography level="h1">ParseEther</Typography>
            <Typography level="h2">The ParseEther function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.parseEther" description="">
                    <ParseEther />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
