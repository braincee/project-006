import FunctionContainer from '@/components/FunctionContainer'
import ToAscii from '@/components/web3js/utils/ToAscii'
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
            <Typography level="h1">ToAscii</Typography>
            <Typography level="h2">The ToAscii function.</Typography>
            <Typography level="body-md">
              The <strong>toAscii</strong> function, also known as <strong>hexToAscii,</strong> is a utility method provided by the <strong>web3.utils</strong>
              module that takes a hexadecimal string as input and returns the ASCII representation of that 
              string.
            </Typography>
            <Typography level="body-md">
              The <strong>toAscii</strong> function takes a single <strong>str</strong> argument, which is a hexadecimal string.
            </Typography>
            <Typography level="body-md">
              The function returns a <strong>string</strong> representing the ASCII representation of the input hexadecimal string.
            </Typography>
            <Typography level="body-md">
                Here's an example of how the toAscii function can be used:

                    <pre>const hexString = '0x68656c6c6f2c20776f726c6421';</pre>
                    <pre>const asciiString = web3.utils.toAscii(hexString);</pre>
                    <pre>console.log(asciiString); // Output: "hello, world!"</pre>
            </Typography>
            <Typography level="body-md">
               In this example, the <strong>toAscii</strong> function is called with a hexadecimal string, and it returns 
               the ASCII representation of that string, which is a string that contains the characters 
               "hello, world!".
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
                <FunctionContainer title="web3.toAscii" description="">
                    <ToAscii />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
