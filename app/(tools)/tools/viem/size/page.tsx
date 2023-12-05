import FunctionContainer from '@/components/FunctionContainer'
import Size from '@/components/viem/utils/Data/Size'


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
            <Typography level="h1">Size</Typography>
            <Typography level="h2">The Size function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.size" description="">
                    <Size />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
