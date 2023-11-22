import FunctionContainer from '@/components/FunctionContainer'
import Utf8ToBytes from '@/components/web3js/utils/Utf8ToBytes'
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
            <Typography level="h1">Utf8ToBytes</Typography>
            <Typography level="h2">The Utf8ToBytes function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.utf8ToBytes" description="">
                    <Utf8ToBytes />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
