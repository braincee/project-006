import FunctionContainer from '@/components/FunctionContainer'
import FromWei from '@/components/web3js/utils/FromWei'
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
            <Typography level="h1">FromWei</Typography>
            <Typography level="h2">The FromWei function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.fromWei" description="">
                    <FromWei />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
