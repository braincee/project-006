import FunctionContainer from '@/components/FunctionContainer'
import CompareBlockNumbers from '@/components/web3js/utils/CompareBlockNumbers'
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
            <Typography level="h1">CompareBlockNumber</Typography>
            <Typography level="h2">The CompareBlockNumber function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.compareBlockNumbers" description="">
                    <CompareBlockNumbers />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
