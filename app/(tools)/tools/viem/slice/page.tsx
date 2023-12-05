import FunctionContainer from '@/components/FunctionContainer'
import Slice from '@/components/viem/utils/Data/Slice'

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
            <Typography level="h1">Slice</Typography>
            <Typography level="h2">The Slice function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.slice" description="">
                    <Slice />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
