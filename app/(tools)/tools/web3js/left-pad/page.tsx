import FunctionContainer from '@/components/FunctionContainer'
import LeftPad from '@/components/web3js/utils/LeftPad'
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
            <Typography level="h1">LeftPad</Typography>
            <Typography level="h2">The LeftPad function.</Typography>
            <Typography level="body-md">
                 The <strong>leftPad</strong> function is a utility method provided by the <strong>web3.utils</strong> module that adds a 
                 padding to the left of a string. The function takes three parameters: <strong>value, characterAmount,
                  and sign.</strong>
            </Typography>
            <Typography level="body-md">
                  The <strong>value</strong> parameter is the string or number that you want to pad. If <strong>value</strong> is an integer 
                  or bigint, it will be converted to a hex string.
            </Typography>
            <Typography level="body-md">
                 The <strong>characterAmount</strong> parameter is the number of characters that you want to add to the left of the <strong>value.</strong>
            </Typography>
            <Typography level="body-md">
                  The <strong>sign</strong> parameter is an optional string that specifies the character to use for the 
                  padding. If <strong>sign</strong> is not provided, the padding character will be '0' by default.
            </Typography>
            <Typography level="body-md">
               The function returns a string that is the result of adding the padding to the left of the <strong>value.</strong>
            </Typography>
            <Typography level="body-md">
                Here's an example usage of the leftPad function:

                    <pre>const web3 = require('web3');</pre>

                    <pre>console.log(web3.utils.leftPad(123, 4)); // Output: '0000123'</pre>
                    <pre>console.log(web3.utils.leftPad('hello', 4, ' ')); // Output: '  hello'</pre>
            </Typography>
            <Typography level="body-md">
                 In this example, the <strong>leftPad</strong> function is called with the value <strong>123,</strong> the character amount <strong>4,</strong>
                 and the sign <strong>0.</strong> The function returns the string <strong>0000123,</strong> which has a padding of four zeros 
                 on the left.
            </Typography>
            <Typography level="body-md">
                   In the second call, the <strong>leftPad</strong> function is called with the value <strong>'hello',</strong> 
                   the character amount <strong>4,</strong> and the sign <strong>' '.</strong> The function returns the string <strong>' hello',</strong> 
                   which has a padding of four spaces on the left.
            </Typography>
            <Typography level="body-md">
                  The <strong>leftPad</strong> function is useful for formatting data in a way that is consistent with the 
                  expected format of a particular application or system. It can be used to add leading zeros 
                  to a number, leading spaces to a string, or any other type of padding that is needed.
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
                <FunctionContainer title="web3.leftPad" description="">
                    <LeftPad />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
