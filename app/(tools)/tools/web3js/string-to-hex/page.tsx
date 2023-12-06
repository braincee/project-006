import FunctionContainer from '@/components/FunctionContainer'
import StringToHex from '@/components/web3js/utils/StringToHex'
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
            <Typography level="h1">StringToHex</Typography>
            <Typography level="h2">The StringToHex function.</Typography>
            <Typography level="body-md">
              The <strong>stringToHex</strong> function is a utility method provided by the <strong>web3.utils</strong> module that takes 
              a string input and returns a hexadecimal string representation of the input. The function 
              is also aliased as <strong>utf8ToHex.</strong>
            </Typography>
            <Typography level="body-md">
              The <strong>stringToHex</strong> function takes a single <strong>string</strong> argument, <strong>str,</strong> which is the input to be converted to hexadecimal.
            </Typography>
            <Typography level="body-md">
              The function returns a <strong>string</strong> representing the hexadecimal encoding of the input string.
            </Typography>
            <Typography level="body-md">
               Here's an example of how the stringToHex function can be used:

                    <pre>const input = "Hello, world!";</pre>
                    <pre>console.log(web3.utils.stringToHex(input)); // Output: 0x48656c6c6f2c20776f726c6421</pre>
            </Typography>
            <Typography level="body-md">
               In this example, the <strong>stringToHex</strong> function is called with a string input value. The function 
               returns a string representing the hexadecimal encoding of the input value.
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
                <FunctionContainer title="web3.stringToHex" description="">
                    <StringToHex />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
