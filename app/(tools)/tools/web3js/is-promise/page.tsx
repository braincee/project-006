import FunctionContainer from '@/components/FunctionContainer'
import IsPromise from '@/components/web3js/utils/IsPromise'
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
            <Typography level="h1">IsPromise</Typography>
            <Typography level="h2">The IsPromise function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.isPromise" description="">
                    <IsPromise />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
