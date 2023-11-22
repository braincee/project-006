import FunctionContainer from '@/components/FunctionContainer'
import SoliditySha3Raw from '@/components/web3js/utils/SoliditySha3Raw'
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
            <Typography level="h1">SoliditySha3Raw</Typography>
            <Typography level="h2">The SoliditySha3Raw function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.hexTonumber" description="">
                    <SoliditySha3Raw />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
