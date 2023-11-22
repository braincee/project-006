import FunctionContainer from '@/components/FunctionContainer'
import FormatEhter from '@/components/viem/utils/Units/FormatEther'

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
            <Typography level="h1">FormatEther</Typography>
            <Typography level="h2">The FormatEther function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.formatEther" description="">
                    <FormatEhter />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
