import FunctionContainer from '@/components/FunctionContainer'
import ToAscii from '@/components/web3js/utils/ToAscii'
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
            <Typography level="h1">ToAscii</Typography>
            <Typography level="h2">The ToAscii function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.toAscii" description="">
                    <ToAscii />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
