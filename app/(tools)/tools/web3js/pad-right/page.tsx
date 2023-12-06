import FunctionContainer from '@/components/FunctionContainer'
import PadRight from '@/components/web3js/utils/PadRight'
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
            <Typography level="h1">PadRight</Typography>
            <Typography level="h2">The PadRight function.</Typography>
            <Typography level="body-md">
                 The <strong>padRight</strong> function is a utility method provided by the <strong>web3.utils</strong> module that adds a
                  padding to the right of a string. The function takes three parameters: <strong>value, 
                  characterAmount, and sign.</strong>
            </Typography>
            <Typography level="body-md">
                The <strong>value</strong> parameter is the string or number that will be padded. If <strong>value</strong> is a integer or 
                bigInt, it will be converted to a hex string before padding.
            </Typography>
            <Typography level="body-md">
             The <strong>characterAmount</strong> parameter is the number of characters that the resulting string should have.
            </Typography>
            <Typography level="body-md">
            The <strong>sign</strong> parameter is an optional string that specifies the character to be added to the 
            right of the string. The default value of <strong>sign is '0'.</strong>
            </Typography>
            <Typography level="body-md">
                The function returns a string that has been padded to the right with the specified number of
                 characters. If <strong>value</strong> is a string, the padding will be added to the right of the string. If 
                 <strong>value</strong> is a integer or bigInt, the hex string representation of the number will be padded to 
                 the right with the specified number of characters.
            </Typography>
            <Typography level="body-md">
              Here are some examples of how the padRight function can be used:

                    <pre>console.log(web3.utils.padRight('0x123', 10));</pre>
                    <pre>// Output: 0x1230000000</pre>

                    <pre>console.log(web3.utils.padRight('0x123', 10, '1'));</pre>
                    <pre>// Output: 0x1231111111</pre>
            </Typography>
            <Typography level="body-md">
                 In the first example, the <strong>padRight</strong> function takes the string <strong>'0x123'</strong> as the <strong>value</strong> parameter, 
                 10 as the <strong>characterAmount</strong> parameter, and the default value of <strong>sign is '0'.</strong> The function 
                 returns a string that has been padded to the right with 10 characters, resulting in the 
                 string <strong>'0x1230000000'.</strong>
            </Typography>
            <Typography level="body-md">
                In the second example, the <strong>padRight</strong> function takes the string <strong>'0x123'</strong> as the <strong>value</strong> parameter, 
                <strong>10</strong> as the <strong>characterAmount</strong> parameter, and the value <strong>'1'</strong> as the <strong>sign</strong> parameter. The function 
                returns a string that has been padded to the right with 10 characters, resulting in the 
                string <strong>'0x1231111111'.</strong>
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
                <FunctionContainer title="web3.padRight" description="">
                    <PadRight />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
