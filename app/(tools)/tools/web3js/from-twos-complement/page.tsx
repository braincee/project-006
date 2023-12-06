import FunctionContainer from '@/components/FunctionContainer'
import FromTwosComplement from '@/components/web3js/utils/FromTwosComplement'
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
            <Typography level="h1">FromTwosComplement</Typography>
            <Typography level="h2">The FromTwosComplement function.</Typography>
            <Typography level="body-md">
                The <strong>fromTwosComplement</strong> function takes a hexadecimal string <strong>value</strong> and converts it into a decimal number or big integer. 
                The function is a part of the web3-utils library and is designed to be used with the Ethereum blockchain.
            </Typography>
            <Typography level="body-md">
                The function takes an optional parameter <strong>nibbleWidth</strong> which specifies the nibble width of the hex 
                string. The default value for <strong>nibbleWidth</strong> is 64.
            </Typography>
            <Typography level="body-md">
                The <strong>fromTwosComplement</strong> function is useful for converting twos complement values, which are commonly 
                used in cryptography and computer science, into decimal numbers or big integers. The function can handle 
                both positive and negative values, and will return a big integer if the value exceeds the range of a 32-bit integer.
            </Typography>
            <Typography level="body-md">
               Here are some examples of how the fromTwosComplement function can be used:

                    <pre>const web3 = require('web3');</pre>

                    <pre>console.log(web3.utils.fromTwosComplement('0x00000000000000000000000000000000d', 32)); // Output: 13</pre>
                    <pre>console.log(web3.utils.fromTwosComplement('0x00000000000000000200000000000000', 32)); // Output: 9007199254740992n</pre>
            </Typography>
            <Typography level="body-md">
                In the first example, the function takes a 32-bit twos complement value and returns a decimal number. 
                In the second example, the function takes a 32-bit twos complement value and returns a big integer.
            </Typography>
            <Typography level="body-md">
                In summary, the <strong>fromTwosComplement</strong> function is a useful tool for converting twos complement values into 
                decimal numbers or big integers, and can be used in a variety of contexts, including cryptography 
                and computer science.
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
                <FunctionContainer title="web3.fromTwosComplement" description="">
                    <FromTwosComplement />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
