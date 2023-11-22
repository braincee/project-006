import FunctionContainer from '@/components/FunctionContainer'
import Utf8ToHex from '@/components/web3js/utils/Utf8ToHex'
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
            <Typography level="h1">Utf8ToHex</Typography>
            <Typography level="h2">The Utf8ToHex function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.utf8ToHex" description="">
                    <Utf8ToHex />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
