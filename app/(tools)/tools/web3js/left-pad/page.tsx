import FunctionContainer from '@/components/FunctionContainer'
import HexToNumber from '@/components/web3js/utils/HexToNumber'
import LeftPad from '@/components/web3js/utils/LeftPad'
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
            <Typography level="h1">LeftPad</Typography>
            <Typography level="h2">The LeftPad function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.leftPad" description="">
                    <LeftPad />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
