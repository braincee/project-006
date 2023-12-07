import FunctionContainer from '@/components/FunctionContainer'
import HexToUtf8 from '@/components/web3js/utils/HexToUtf8'
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
            <Typography level="h1">HexToUtf8</Typography>
            <Typography level="h2">The HexToUtf8 function.</Typography>
            <Typography level="body-md">
                The <strong>hexToUtf8</strong> function is a utility method provided by the <strong>web3.utils</strong> module that allows you to convert 
                a hexadecimal string representation of text to its corresponding UTF-8 string representation. This 
                function is useful when working with smart contracts that operate on text data, 
                as it enables you to convert hex-encoded text to a format that can be easily processed by the contract.
            </Typography>
            <Typography level="body-md">
                The function takes a single parameter, <strong>str,</strong> which is the hexadecimal string that you want to convert to a
                UTF-8 string. The function then performs the necessary conversions and returns the UTF-8 string 
                representation of the input hex string.
            </Typography>
            <Typography level="body-md">
                The <strong>hexToUtf8</strong> function is a convenient way to convert hexadecimal strings to UTF-8 strings, 
                and it can help simplify your smart contract code by eliminating the need for manual conversion logic.
            </Typography>
            <Typography level="body-md">
                Here's an example usage of the hexToUtf8 function:

                    <pre>const web3 = require('web3');</pre>

                    <pre>console.log(web3.utils.hexToUtf8('0x48656c6c6f20576f726c64')); // Output: Hello World</pre>
            </Typography>
            <Typography level="body-md">
                In this example, the <strong>hexToUtf8</strong> function takes the hexadecimal string <strong>'0x48656c6c6f20576f726c64'</strong> as 
                input and returns the UTF-8 string <strong>"Hello World".</strong>
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
                <FunctionContainer title="web3.hexToUtf8" description="">
                    <HexToUtf8 />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
