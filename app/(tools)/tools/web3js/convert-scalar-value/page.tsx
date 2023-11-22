import FunctionContainer from '@/components/FunctionContainer'
import ConvertScalarValue from '@/components/web3js/utils/ConvertScalarValue'
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
            <Typography level="h1">ConvertScalarValue</Typography>
            <Typography level="h2">The ConvertScalarValue function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.convertScalarValue" description="">
                    <ConvertScalarValue />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
