import FunctionContainer from '@/components/FunctionContainer'
import SoliditySha3 from '@/components/web3js/utils/SoliditySha3'
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
            <Typography level="h1">HexToNumber</Typography>
            <Typography level="h2">The HexToNumber function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.soliditySha3" description="">
                    <SoliditySha3 />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
