import FunctionContainer from '@/components/FunctionContainer'
import ToDecimal from '@/components/web3js/utils/ToDecimal'
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
            <Typography level="h1">ToDecimal</Typography>
            <Typography level="h2">The ToDecimal function.</Typography>
             <Typography level="body-md">
               The <strong>toDecimal</strong> function, also known as <strong>hexToNumber,</strong> is a utility method provided by the <strong>web3.utils</strong> module that takes a string representation of a number in hexadecimal format and returns its decimal representation.
             </Typography>
             <Typography level="body-md">
                The <strong>toDecimal</strong> function takes a single <strong>value</strong> argument, which is a string representing a number in hexadecimal format.
             </Typography>
             <Typography level="body-md">
                The function returns a <strong>number or bigint</strong> representing the decimal representation of the input hexadecimal string.
             </Typography>
             <Typography level="body-md">
                    Here's an example of how the toDecimal function can be used:

                        <pre>const hexString = '0x1234567890abcdef';</pre>
                        <pre>const decimalNumber = web3.utils.toDecimal(hexString);</pre>
                        <pre>console.log(decimalNumber); // Output: 1234567890</pre>
             </Typography>
             <Typography level="body-md">
                 In this example, the <strong>toDecimal</strong> function is called with a hexadecimal string, and it returns the decimal representation of that string, which is a number that represents the hexadecimal value.
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
                <FunctionContainer title="web3.toDecimal" description="">
                    <ToDecimal />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
