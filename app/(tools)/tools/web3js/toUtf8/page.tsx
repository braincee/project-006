import FunctionContainer from '@/components/FunctionContainer'
import ToUtf8 from '@/components/web3js/utils/ToUtf8'
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
            <Typography level="h1">ToUtf8</Typography>
            <Typography level="h2">The ToUtf8 function.</Typography>
            <Typography level="body-md">
                The <strong>toUtf8</strong> function is a utility method provided by the <strong>web3.utils</strong> module that converts a 
                hex string or a Uint8Array to a UTF-8 string.
            </Typography>
            <Typography level="body-md">
               The function takes a single <strong>input</strong> argument, which can be either a string or a Uint8Array. 
               If the input is a string, it is assumed to be a hex string and is converted to a UTF-8 string.
                If the input is a Uint8Array, it is treated as a byte array and is converted to a UTF-8 string.
                The function returns a string representing the UTF-8 encoding of the input.
            </Typography>
            <Typography level="body-md">
                  Here's an example of how the toUtf8 function can be used:

                    <pre>const web3 = require('web3');</pre>

                    <pre>const hexString = '0x68656c6c6f20776f726c6421';</pre>
                    <pre>const utf8String = web3.utils.toUtf8(hexString);</pre>

                    <pre>console.log(utf8String); // Output: "hello world!"</pre>
            </Typography>
            <Typography level="body-md">
               In this example, the <strong>toUtf8</strong> function is called with a hex string <strong>0x68656c6c6f20776f726c6421.</strong> 
               The function returns a UTF-8 string representing the hex string, which is then logged to 
               the console.
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
                <FunctionContainer title="web3.hexTonumber" description="">
                    <ToUtf8 />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
