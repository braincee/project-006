import FunctionContainer from '@/components/FunctionContainer'
import Utf8ToHex from '@/components/web3js/utils/Utf8ToHex'
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
            <Typography level="h1">Utf8ToHex</Typography>
            <Typography level="h2">The Utf8ToHex function.</Typography>
            <Typography level="body-md">
               The <strong>utf8ToHex</strong> function is a utility method provided by the <strong>web3.utils</strong> module that converts a UTF-8 string to a hexadecimal string.
            </Typography>
            <Typography level="body-md">
               The <strong>utf8ToHex</strong> function is a utility method provided by the <strong>web3.utils</strong> module that converts 
               a UTF-8 string to a hexadecimal string.
            </Typography>
            <Typography level="body-md">
               The conversion is performed by iterating over each character in the string and converting it 
               to its corresponding hexadecimal value. The resulting string will have a length equal to the
                number of characters in the input string, and will contain only hexadecimal characters 
                (0-9, a-f).
            </Typography>
            <Typography level="body-md">
              Here's an example of how the utf8ToHex function can be used:

                    <pre>const web3 = require('web3');</pre>
                    <pre>console.log(web3.utils.utf8ToHex('web3.js')); // Output: "0x776562332e6a73"</pre>
            </Typography>
            <Typography level="body-md">
               In this example, the <strong>utf8ToHex</strong> function is called with a string argument, and it returns a 
               string that represents the hexadecimal representation of the input string, prefixed by the 
               characters "0x".
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
                <FunctionContainer title="web3.utf8ToHex" description="">
                    <Utf8ToHex />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
