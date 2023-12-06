import FunctionContainer from '@/components/FunctionContainer'
import HexToString from '@/components/web3js/utils/HexToString'
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
            <Typography level="h1">HexToString</Typography>
            <Typography level="h2">The HexToString function.</Typography>
            <Typography level="body-md">
                The <strong>hexToString</strong> function is a utility method provided by the <strong>web3.utils</strong> module that allows you
                to convert a hexadecimal string representation of text to its corresponding UTF-8 string 
                representation. This function is useful when working with smart contracts that operate on 
                text data, as it enables you to convert hex-encoded text to a format that can be easily 
                processed by the contract.
            </Typography>
            <Typography level="body-md">
            The function takes a single parameter, <strong>str,</strong> which is the hexadecimal string that you want to convert to a 
            UTF-8 string. The function then performs the necessary conversions and returns the UTF-8 
            string representation of the input hex string.
            </Typography>
            <Typography level="body-md">
              Here's an example usage of the hexToString function:

                <pre>const web3 = require('web3');</pre>

                <pre>console.log(web3.utils.hexToString('0x74657374')); // Output: "test"</pre>
            </Typography>
            <Typography level="body-md">
                In this example, the <strong>hexToString</strong> function takes the hexadecimal string <strong>'0x74657374'</strong>
                as input and returns the UTF-8 string <strong>"test"</strong>
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
                <FunctionContainer title="web3.hexToString" description="">
                    <HexToString />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
