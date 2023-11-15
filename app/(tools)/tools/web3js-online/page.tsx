import FunctionContainer from '@/components/FunctionContainer'
import AsciiToHex from '@/components/web3js/AsciiToHex'
import BytesToHex from '@/components/web3js/BytesToHex'
import ConvertScalarValue from '@/components/web3js/ConvertScalarValue'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Divider,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Sheet,
    Stack,
    Textarea,
    ToggleButtonGroup,
    Typography,
} from '@mui/joy'

export default async function Web3JsOnline() {
    return (
        <Stack
            direction={{ xs: 'column', md: 'column' }}
            sx={{
                height: '100%',
                width: '100%',
            }}
            spacing={2}
        >
            <Typography level="h1">Web3.js Online</Typography>
            <Typography level="h2">
                All available web3-utils functions will be placed below, each inside a
                FunctionContainer.
            </Typography>

            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer
                    title="web3.asciiToHex"
                    description="Get hex representation (prefixed by 0x) of ascii string."
                >
                    <AsciiToHex />
                </FunctionContainer>

                <FunctionContainer
                    title="web3.convertScalarValue"
                    description="Convert a value depending on the format."
                >
                    <ConvertScalarValue />
                </FunctionContainer>

                <FunctionContainer
                    title="web3.bytesToHex"
                    description="Convert a byte array to a hex string."
                >
                    <BytesToHex />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
