import FunctionContainer from '@/components/FunctionContainer'
import HexToNumber from '@/components/web3js/utils/HexToNumber'
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
            <Typography level="h1">HexToNumber</Typography>
            <Typography level="h2">The HexToNumber function.</Typography>
            <Typography level="body-md">
                The <strong>hexToNumber</strong> function is a utility method provided by the <strong>web3.utils</strong> module that allows you to convert 
                a hexadecimal string representation of a number to its corresponding number or bigint representation. 
                This function is useful when working with smart contracts that operate on numerical values, 
                as it enables you to convert hex-encoded numbers to a format that can be easily processed by the contract.
            </Typography>
            <Typography level="body-md">
            The function takes a single parameter, <strong>value,</strong> which is the hexadecimal string that you want to convert to 
            a number. The function then performs the necessary conversions and returns the number or bigint 
            representation of the input value.
            </Typography>
            <Typography level="body-md">
                 Here's an example usage of the <strong>hexToNumber</strong> function:

                    <pre>const web3 = require('web3');</pre>

                    <pre>console.log(web3.utils.hexToNumber('0xa')); // Output: 10</pre>
            </Typography>
            <Typography level="body-md">
            In this example, the <strong>hexToNumber</strong> function takes the hexadecimal string <strong>'0xa'</strong> as input and returns the number <strong>10.</strong>
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
                <FunctionContainer title="web3.hexTonumber" description="">
                    <HexToNumber />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
