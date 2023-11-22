import FunctionContainer from '@/components/FunctionContainer'
import ToTwosComplement from '@/components/web3js/utils/ToTwosComplement'
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
            <Typography level="h1">ToTwosComplement</Typography>
            <Typography level="h2">The ToTwosComplement function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.toTwosComplement" description="">
                    <ToTwosComplement />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
