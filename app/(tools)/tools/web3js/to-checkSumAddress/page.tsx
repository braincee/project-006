import FunctionContainer from '@/components/FunctionContainer'
import ToChecksumAddress from '@/components/web3js/utils/ToChecksumAddress'
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
            <Typography level="h1">ToCheckSumAddress</Typography>
            <Typography level="h2">The ToCheckSumAddress function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.toCheckSumAddress" description="">
                    <ToChecksumAddress />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
