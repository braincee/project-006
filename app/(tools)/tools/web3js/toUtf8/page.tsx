import FunctionContainer from '@/components/FunctionContainer'
import ToUtf8 from '@/components/web3js/utils/ToUtf8'
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
            <Typography level="h1">ToUtf8</Typography>
            <Typography level="h2">The ToUtf8 function.</Typography>

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
                    <ToUtf8 />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
