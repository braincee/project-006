import FunctionContainer from '@/components/FunctionContainer'
import FormatGwei from '@/components/viem/utils/Units/FormatGwei'

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
            <Typography level="h1">FormatGwei</Typography>
            <Typography level="h2">The FormatGwei function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.formatGwei" description="">
                    <FormatGwei />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
