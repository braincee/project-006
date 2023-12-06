import FunctionContainer from '@/components/FunctionContainer'
import ToHex from '@/components/web3js/utils/ToHex'
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
            <Typography level="h1">ToHex</Typography>
            <Typography level="h2">The ToHex function.</Typography>
            <Typography level="body-md">
               The <strong>toHex</strong> function is a utility method provided by the <strong>web3.utils</strong> module that converts any given
               value into its hexadecimal representation.
            </Typography>
            <Typography level="body-md">
               The <strong>toHex</strong> function takes a single <strong>value</strong> argument, which can be a string, number, bigint, boolean, object, or Uint8Array.
            </Typography>
            <Typography level="body-md">
               The function returns a string representing the hexadecimal representation of the input value.
               If the <strong>returnType</strong> parameter is set to <strong>true,</strong> the function will return the type of the value in addition to the hexadecimal representation.
            </Typography>
            <Typography level="body-md">
               Here are some examples of how the toHex function can be used:

                <pre>console.log(web3.utils.toHex(10)); // Output: 0xa</pre>
                <pre>console.log(web3.utils.toHex('0x123', true)); // Output: bytes</pre>
            </Typography>
            <Typography level="body-md">
               In the first example, the <strong>toHex</strong> function is called with the number 10, and it returns the 
               hexadecimal representation of 10, which is 0xa.
               In the second example, the <strong>toHex</strong> function is called with the string '0x123', and it returns 
               the hexadecimal representation of the string, which is 0x123. Additionally, the <strong>returnType</strong> 
               parameter is set to <strong>true,</strong> so the function also returns the type of the value, which is 'bytes'.
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
                <FunctionContainer title="web3.toHex" description="">
                    <ToHex />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
