import FunctionContainer from '@/components/FunctionContainer'
import HexToNumberString from '@/components/web3js/utils/HexToNumberString'
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
            <Typography level="h1">HexToNumberString</Typography>
            <Typography level="h2">The HexToNumberString function.</Typography>
            <Typography level="body-md">
                The <strong>hexToNumberString</strong> function is a utility method provided by the <strong>web3.utils</strong> module that allows you to 
                convert a hexadecimal string representation of a number to its corresponding decimal representation in 
                string format. This function is useful when working with smart contracts that operate on numerical values, 
                as it enables you to convert hex-encoded numbers to a format that can be easily processed by the contract.
            </Typography>
            <Typography level="body-md">
                The function takes a single parameter, <strong>data,</strong> which is the hexadecimal string that you want to convert 
                to a decimal string. The function then performs 
                the necessary conversions and returns the decimal representation of the input value in string format.
            </Typography>
            <Typography level="body-md">
                Here's an example usage of the hexToNumberString function:

                    <pre>const web3 = require('web3');</pre>

                    <pre>console.log(web3.utils.hexToNumberString('0xa')); // Output: "10"</pre>
            </Typography>
            <Typography level="body-md">
               In this example, the <strong>hexToNumberString</strong> function takes the hexadecimal string <strong>'0xa'</strong> as 
               input and returns the decimal string <strong>"10".</strong>
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
                <FunctionContainer title="web3.hexTonumberString" description="">
                    <HexToNumberString />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
