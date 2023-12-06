import FunctionContainer from '@/components/FunctionContainer'
import HexToBytes from '@/components/web3js/utils/HexToBytes'
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
            <Typography level="h1">HexToBytes</Typography>
            <Typography level="h2">The HexToBytes function.</Typography>
            <Typography level="body-md">
                The <strong>hexToBytes</strong> function is a utility method provided by the <strong>web3.utils</strong> module that allows you to convert a 
                hexadecimal string representation of data to a byte array. This function is useful when working with smart 
                contracts that operate on binary data, 
                as it enables you to convert hex-encoded data to a format that can be easily processed by the contract.
            </Typography>
            <Typography level="body-md">
            The function takes a single parameter, <strong>bytes,</strong> which is the hexadecimal string that you want to convert 
            to a byte array. The function then performs the necessary 
            conversions and returns a <strong>Uint8Array</strong> containing the byte array representation of the input hex string.
            </Typography>
            <Typography level="body-md">
             Here's an example usage of the hexToBytes function:

                <pre>const web3 = require('web3');</pre>

                <pre>console.log(web3.utils.hexToBytes('0x74657374')); // Output: Uint8Array(4) [ 116, 101, 115, 116 ]</pre>
            </Typography>
            <Typography level="body-md">
            In this example, the <strong>hexToBytes</strong> function takes the hexadecimal string <strong>'0x74657374'</strong> as input and returns a 
            <strong>Uint8Array</strong> containing the byte array representation of the input hex string. The resulting byte array 
            contains the bytes <strong>116, 101, 115, and 116,</strong> which correspond to the ASCII characters <strong>t, e, s, and 
            t,</strong> respectively.
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
                <FunctionContainer title="web3.hexToBytes" description="">
                    <HexToBytes />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
