import FunctionContainer from '@/components/FunctionContainer'
import FromAscii from '@/components/web3js/utils/FromAscii'
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
            <Typography level="h1">FromAscii</Typography>
            <Typography level="h2">The FromAscii function.</Typography>
            <Typography level="body-md">
                The <strong>fromAscii</strong> function, also known as asciiToHex, takes a string input str and returns a hexadecimal 
                string representation of the input. 
                The function is a part of the web3-utils library and is designed to be used with the Ethereum blockchain.
            </Typography>
            <Typography level="body-md">
                The <strong>fromAscii</strong> function converts each character of the input string to its corresponding hexadecimal value, 
                using the ASCII character set. The resulting hexadecimal string 
                can be used to represent the input data in a format that is suitable for use with the Ethereum blockchain.
            </Typography>
            <Typography level="body-md">
                The <strong>fromAscii</strong> function is useful for converting human-readable data, such as a string of characters, 
                into a format that can be easily processed and stored on the blockchain. It can be used in a variety of 
                applications, such as creating smart contracts, sending transactions, and storing data on the blockchain.
            </Typography>
            <Typography level="body-md">
                Here's an example of how the <strong>fromAscii</strong> function can be used:

                    <pre>const web3 = require('web3');</pre>

                    <pre>const str = 'Hello, world!';</pre>
                    <pre>const hexStr = web3.utils.fromAscii(str);</pre>
                    <pre>console.log(hexStr);</pre>
                    <pre>// Output: 0x48656c6c6f2c20776f726c6421</pre>
            </Typography>
            <Typography level="body-md">
                In this example, the <strong>fromAscii</strong> function takes in a string <strong>str</strong> and returns a hexadecimal string 
                representation of the input. The resulting hexadecimal string 
                can be used to represent the input data in a format that is suitable for use with the Ethereum blockchain.
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
                <FunctionContainer title="web3.fromAscii" description="">
                    <FromAscii />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
