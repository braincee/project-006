import FunctionContainer from '@/components/FunctionContainer'
import GetStorageSlotNumForLongString from '@/components/web3js/utils/GetStorageSlotNumForLongString'
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
            <Typography level="h1">BytesToHex</Typography>
            <Typography level="h2">The BytesToHex function.</Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.getStorageSlotNumLongString" description="">
                    <GetStorageSlotNumForLongString />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
