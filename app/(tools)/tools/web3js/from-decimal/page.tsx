import FunctionContainer from '@/components/FunctionContainer'
import FromDecimal from '@/components/web3js/utils/FromDecimal'
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
            <Typography level="h1">FromDecimal</Typography>
            <Typography level="h2">The FromDecimal function.</Typography>
            <Typography level="body-md">
                The <strong>fromDecimal</strong> function, also known as <strong>numberToHex</strong>, takes a numerical input <strong>value</strong> and converts it to its
                hexadecimal representation. 
                The function is a part of the web3-utils library and is designed to be used with the Ethereum blockchain.
            </Typography>
            <Typography level="body-md">
                The <strong>fromDecimal</strong> function takes an optional parameter <strong>hexstrict</strong> which, if set to <strong>true</strong>, will strictify the 
                hex output to only contain
                characters A-F, a-f, 0-9. This can be useful in certain contexts where a stricter hex format is required.
            </Typography>
            <Typography level="body-md">
                The function returns a string representing the hexadecimal value of the input number. The resulting hex 
                string can be used to represent the value in a format that is suitable for use with the Ethereum blockchain.
            </Typography>
            <Typography level="body-md">
                 Here's an example of how the fromDecimal function can be used:

                    <pre>const web3 = require('web3');</pre>

                    <pre>const value = 1234567890;</pre>
                    <pre>const hexStr = web3.utils.fromDecimal(value);</pre>
                    <pre>console.log(hexStr);</pre>
                    <pre>// Output: 0x751234567890</pre>
            </Typography>
            <Typography level="body-md">
                In this example, the <strong>fromDecimal</strong> function takes in a numerical value <strong>value</strong> and returns a hexadecimal string representation of the input. The resulting hex 
                string can be used to represent the value in a format that is suitable for use with the Ethereum blockchain.
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
                <FunctionContainer title="web3.fromDecimal" description="">
                    <FromDecimal />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
