import FunctionContainer from '@/components/FunctionContainer'
import IsDataFormat from '@/components/web3js/utils/IsDataFormat'
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
            <Typography level="h1">IsDataFormat</Typography>
            <Typography level="h2">The IsDataFormat function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.isDataFormat" description="">
                    <IsDataFormat />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
