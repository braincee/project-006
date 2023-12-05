import FunctionContainer from '@/components/FunctionContainer'
import ToWei from '@/components/web3js/utils/ToWei'
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
            <Typography level="h1">ToWei</Typography>
            <Typography level="h2">The ToWei function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.toWei" description="">
                    <ToWei />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
