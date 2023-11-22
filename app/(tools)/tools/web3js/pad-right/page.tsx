import FunctionContainer from '@/components/FunctionContainer'
import PadRight from '@/components/web3js/utils/PadRight'
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
            <Typography level="h1">PadRight</Typography>
            <Typography level="h2">The PadRight function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.padRight" description="">
                    <PadRight />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
