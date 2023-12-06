import FunctionContainer from '@/components/FunctionContainer'
import PadLeft from '@/components/web3js/utils/PadLeft'
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
            <Typography level="h1">PadLeft</Typography>
            <Typography level="h2">The PadLeft function.</Typography>
            <Typography level="body-md">
                The <strong>padLeft</strong> function is a utility method provided by the <strong>web3.utils</strong> module that adds a 
                padding to the left of a string. The function takes three parameters: <strong>value, characterAmount, 
                and sign.</strong>
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
                left of the string. The default value of <strong>sign is '0'.</strong>
            </Typography>
            <Typography level="body-md">
                The function returns a string that has been padded to the left with the specified number of
                characters. If <strong>value</strong> is a string, the padding will be added to the left of the string. If <strong>value</strong> is a integer or bigInt, the hex string representation of the number will be padded to the left with the specified number of characters.
            </Typography>
            <Typography level="body-md">
                  Here's an example usage of the padLeft function:

                    <pre>console.log(web3.utils.padLeft('0x123', 10));</pre>
                    <pre>// Output: 0x0000000123</pre>
            </Typography>
            <Typography level="body-md">
                In this example, the <strong>padLeft</strong> function takes the string <strong>'0x123'</strong> as the value parameter, 
                <strong>10</strong> as the <strong>characterAmount</strong> parameter, and the default value of <strong>sign is '0'.</strong> The function 
                returns a string that has been padded to the left with 10 characters, resulting in the string 
                <strong>'0x0000000123'.</strong>
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
                <FunctionContainer title="web3.padLeft" description="">
                    <PadLeft />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
