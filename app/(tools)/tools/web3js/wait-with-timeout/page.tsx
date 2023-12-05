import FunctionContainer from '@/components/FunctionContainer'
import HexToNumber from '@/components/web3js/utils/HexToNumber'
import WaitWithTimeout from '@/components/web3js/utils/WaitWithTimeout'
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
            <Typography level="h1">WaitWithTimeout</Typography>
            <Typography level="h2">The WaitWithTimeout function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.waitWithTimeout" description="">
                    <WaitWithTimeout />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
