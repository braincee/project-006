import FunctionContainer from '@/components/FunctionContainer'
import Uint8ArrayEquals from '@/components/web3js/utils/Uint8ArrayEquals'
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
            <Typography level="h1">Uint8ArrayEquals</Typography>
            <Typography level="h2">The Uint8ArrayEquals function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.uint8ArrayEquals" description="">
                  <Uint8ArrayEquals />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
