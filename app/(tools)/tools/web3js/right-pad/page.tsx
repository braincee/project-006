import FunctionContainer from '@/components/FunctionContainer'
import RightPad from '@/components/web3js/utils/RightPad'
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
            <Typography level="h1">RightPad</Typography>
            <Typography level="h2">The RightPad function.</Typography>
            <Typography level="body-md">
             The <strong>rightPad</strong> function is a utility method provided by the <strong>web3.utils</strong> module that adds a padding on
             the right of a string. The function takes three parameters: <strong>value, characterAmount, and sign.</strong>
            </Typography>
            <Typography level="body-md">
                <ul>
                    <li><strong>value:</strong> The value to be padded. This can be an integer, a big integer, or a string. 
                        If <strong>value</strong> is an integer or big integer, it will be converted to a hex string.</li>
                    <li><strong>characterAmount:</strong> The number of characters to add to the right of the string. This must be a positive number.</li>
                    <li><strong>sign:</strong> An optional string that represents the sign to be used for the padding. The default value is <strong>'0'.</strong></li>
                </ul>
            </Typography>
            <Typography level="body-md">
              The <strong>rightPad</strong> function returns a string that has been padded on the right with the specified 
              number of characters. If <strong>value</strong> is a string, the padding will be added to the end of the string. 
              If <strong>value</strong> is an integer or big integer, the padding will be added to the end of the hex string 
              representation of the number.
            </Typography>
            <Typography level="body-md">
                 Here's an example of how the rightPad function can be used:

                    <pre>const paddedString = web3.utils.rightPad(123, 8, '0');</pre>
                    <pre>console.log(paddedString); // Output: "00000000123"</pre>
            </Typography>
            <Typography level="body-md">
              In this example, the <strong>rightPad</strong> function is called with the value <strong>123,</strong> the character amount <strong>8,</strong>
              and the sign <strong>'0'.</strong> The function returns a string that has been padded on the right with eight
               zeros, resulting in the string <strong>"00000000123".</strong>
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
                <FunctionContainer title="web3.rightPad" description="">
                    <RightPad />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
