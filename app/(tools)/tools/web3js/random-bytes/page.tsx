import FunctionContainer from '@/components/FunctionContainer'
import RandomBytes from '@/components/web3js/utils/RandomBytes'
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
            <Typography level="h1">RandomBytes</Typography>
            <Typography level="h2">The RandomBytes function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.randomBytes" description="">
                    <RandomBytes />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
