import FunctionContainer from '@/components/FunctionContainer'
import ToBigInt from '@/components/web3js/utils/ToBigInt'
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
            <Typography level="h1">ToBigInt</Typography>
            <Typography level="h2">The ToBigInt function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.bigInt" description="">
                    <ToBigInt />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
