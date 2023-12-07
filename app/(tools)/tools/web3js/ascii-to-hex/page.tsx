import FunctionContainer from '@/components/FunctionContainer'
import AsciiToHex from '@/components/web3js/utils/AsciiToHex'
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
            <Typography level="h1">asciiToHex</Typography>
            <Typography level="h2">The asciiToHex function.</Typography>
            <Typography level="body-md">
            The <strong>asciiToHex</strong> function is a callable function in the <strong>web3-utils</strong> library that converts an ASCII 
            string to its hexadecimal representation, prefixed by <strong>0x.</strong> The resulting string will contain only 
            hexadecimal digits (0-9, a-f)
             and will be prefixed with <strong>0x</strong> to indicate that it's a hexadecimal representation.
            </Typography>
            <Typography level="body-md">
              Here's an example of how to use the <strong>asciiToHex</strong> function:  
              <pre>
              console.log(web3.utils.asciiToHex('Hello World'));
              // Output: 0x48656c6c6f20576f726c64
              </pre>
            </Typography>
             <Typography level="body-md">
             In this example, the <strong>asciiToHex</strong> function takes the ASCII string <strong>'Hello World' </strong>
             as input and returns its hexadecimal representation, which is <strong>'0x48656c6c6f20576f726c64'.</strong>
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
                <FunctionContainer title="web3.asciiToHex" description="">
                    <AsciiToHex />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
