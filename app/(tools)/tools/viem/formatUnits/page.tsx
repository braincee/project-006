import FunctionContainer from '@/components/FunctionContainer'
import FormatUnits from '@/components/viem/utils/Units/FormatUnits'

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
            <Typography level="h1">FormatUnits</Typography>
            <Typography level="h2">The FormatUnits function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.hexTonumber" description="">
                    <FormatUnits />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
