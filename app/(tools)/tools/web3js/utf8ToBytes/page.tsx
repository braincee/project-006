import FunctionContainer from '@/components/FunctionContainer'
import Utf8ToBytes from '@/components/web3js/utils/Utf8ToBytes'
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
            <Typography level="h1">Utf8ToBytes</Typography>
            <Typography level="h2">The Utf8ToBytes function.</Typography>
            <Typography level="body-md">
               The <strong>utf8ToBytes</strong> function is a utility method provided by the <strong>web3.utils</strong> module that converts a string to a Uint8Array.
            </Typography>
            <Typography level="body-md">
               The function takes a string argument, denoted by the <strong>str</strong> parameter. 
               The function returns a Uint8Array that represents the binary representation of the string.
            </Typography>
            <Typography level="body-md">
               The conversion is performed by iterating over each character in the string and converting 
               it to its corresponding UTF-8 byte sequence. The resulting Uint8Array will have a length 
               equal to the number of characters in the string.
            </Typography>
            <Typography level="body-md">
               Here's an example of how the utf8ToBytes function can be used:

                    <pre>const web3 = require('web3');</pre>
                    <pre>const str = 'Hello, world!';</pre>
                    <pre>const bytes = web3.utils.utf8ToBytes(str);</pre>
                    <pre>console.log(bytes); // Output: Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x0x0])</pre>
            </Typography>
            <Typography level="body-md">
               In this example, the <strong>utf8ToBytes</strong> function is called with a string argument, and it 
               returns a Uint8Array that represents the binary representation of the string.
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
                <FunctionContainer title="web3.utf8ToBytes" description="">
                    <Utf8ToBytes />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
