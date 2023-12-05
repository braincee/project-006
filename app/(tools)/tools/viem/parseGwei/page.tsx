import FunctionContainer from '@/components/FunctionContainer'
import ParseGwei from '@/components/viem/utils/Units/ParseGwei'

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
            <Typography level="h1">ParseGwei</Typography>
            <Typography level="h2">The ParseGwei function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.parseGwei" description="">
                    <ParseGwei />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
