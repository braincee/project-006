import FunctionContainer from '@/components/FunctionContainer'
import UuidV4 from '@/components/web3js/utils/UuidV4'
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
            <Typography level="h1">Uuidv4</Typography>
            <Typography level="h2">The UuidV4 function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.uuidV4" description="">
                    <UuidV4 />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
