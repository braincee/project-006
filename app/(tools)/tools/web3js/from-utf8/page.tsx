import FunctionContainer from '@/components/FunctionContainer'
import FromUtf8 from '@/components/web3js/utils/FromUtf8'
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
            <Typography level="h1">FromUtf8</Typography>
            <Typography level="h2">The FromUtf8 function.</Typography>
            <Typography level="body-md">
            The <strong>fromUtf8</strong> function, also known as <strong>utf8ToHex</strong>, takes a string input <strong>str</strong> and converts it into a hexadecimal string. 
            The function is a part of the web3-utils library and is designed to be used with the Ethereum blockchain.
            </Typography>
            <Typography level="body-md">
                The <strong>fromUtf8</strong> function converts each character of the input string into its corresponding hexadecimal 
                value, using the UTF-8 character set. This allows for the representation of a wide range of characters, 
                including non-ASCII characters, in a hexadecimal format that can be easily used with the Ethereum blockchain.
            </Typography>
            <Typography level="body-md">
                The function returns a string representing the hexadecimal value of the input string. This string can 
                be used in a variety of contexts, such as in smart contracts, hash functions, and other cryptographic applications.
            </Typography>
            <Typography level="body-md">
                Here's an example of how the <strong>fromUtf8</strong> function can be used:

                    <pre>const web3 = require('web3');</pre>

                    <pre>const str = 'Hello, world!';</pre>
                    <pre></pre>const hexStr = web3.utils.fromUtf8(str);<pre>
                    <pre></pre>console.log(hexStr);</pre>
                    <pre>// Output: 0x48656c6c6f2c20776f726c6421</pre>
            </Typography>
            <Typography level="body-md">
                In this example, the <strong>fromUtf8</strong> function takes a string <strong>str</strong> and returns a hexadecimal string representation
                of the input. The resulting hex string can be used in a 
                variety of contexts, such as in smart contracts, hash functions, and other cryptographic applications.
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
                <FunctionContainer title="web3.fromUtf8" description="">
                    <FromUtf8 />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
