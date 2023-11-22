import FunctionContainer from '@/components/FunctionContainer'
import FromRlp from '@/components/viem/utils/Encoding/FromRlp'

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
            <Typography level="h1">FromRlp</Typography>
            <Typography level="h2">The FromRlp function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.fromRlp" description="">
                    <FromRlp />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
