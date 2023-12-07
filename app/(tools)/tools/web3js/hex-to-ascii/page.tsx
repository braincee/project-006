import FunctionContainer from '@/components/FunctionContainer'
import HexToAscii from '@/components/web3js/utils/HexToAscii'
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
            <Typography level="h1">HexToAscii</Typography>
            <Typography level="h2">The HexToAscii function.</Typography>
            <Typography level="body-md">
                The <strong>hexToAscii</strong> function is a convenient utility method provided by the <strong>web3.utils</strong> module that allows you 
                to convert a hexadecimal string representation of text to its corresponding ASCII string. This function 
                is particularly useful when working with smart contracts 
                that operate on text data, as it enables you to convert hex-encoded text to a human-readable format.
            </Typography>
            <Typography level="body-md">
                The function takes a single parameter, <strong>str,</strong> which is the hexadecimal string that you want to convert 
                to ASCII. The function then performs the necessary conversions and returns the resulting ASCII string.
            </Typography>
            <Typography level="body-md">
                 Here's an example usage of the <strong>hexToAscii</strong> function:

                    <pre>const web3 = require('web3');</pre>

                    <pre>console.log(web3.utils.hexToAscii('0x48656c6c6f20576f726c64')); // Output: Hello World</pre>
            </Typography>
            <Typography level="body-md">
                In this example, the <strong>hexToAscii</strong> function takes the hexadecimal string <strong>'0x48656c6c6f20576f726c64'</strong>
                as input and returns the ASCII string <strong>'Hello World'.</strong>
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
                <FunctionContainer title="web3.hexToAscii" description="">
                    <HexToAscii />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
