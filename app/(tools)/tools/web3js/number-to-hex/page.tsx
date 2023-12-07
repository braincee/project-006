import FunctionContainer from '@/components/FunctionContainer'
import NumberToHex from '@/components/web3js/utils/NumberToHex'
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
            <Typography level="h1">NumberToHex</Typography>
            <Typography level="h2">The NumberToHex function.</Typography>
            <Typography level="body-md">
                The <strong>numberToHex</strong> function is a utility method provided by the <strong>web3.utils</strong> module that converts a 
                given value to its hexadecimal representation. The function takes a single required parameter, 
                <strong>value,</strong> which is the number that will be converted to hex.
            </Typography>
            <Typography level="body-md">
                 The function returns a string representing the hexadecimal value of <strong>value.</strong> If the <strong>value</strong> is a 
                 positive integer, the function will return a string prefixed with <strong>0x</strong> (or <strong>0x0</strong> if the value is zero), 
                 followed by the hexadecimal representation of the number. For example, <strong>numberToHex(10)</strong> will return the 
                 string <strong>'0xa'.</strong>
            </Typography>
            <Typography level="body-md">
                If the value is a negative integer, the function will return a string prefixed with <strong>-0x</strong> (or <strong>-0x0</strong> if the value is zero), 
                followed by the hexadecimal representation of the number. For example, <strong>numberToHex(-10)</strong> will return the 
                string <strong>'-0x10'.</strong>
            </Typography>
            <Typography level="body-md">
                 The function also takes an optional parameter, <strong>hexstrict,</strong> which is a boolean that determines 
                 whether the resulting hex string should be padded with leading zeros to make it "hexstrict". 
                 If <strong>hexstrict</strong> is <strong>true,</strong> the function will add leading zeros to the hex string to ensure that it
                  has the correct length. For example, <strong>numberToHex(10, true)</strong> will return the string <strong>'0000000a'.</strong>
            </Typography>
            <Typography level="body-md">
              The <strong>numberToHex</strong> function is useful for converting numbers to their hexadecimal representation, 
              which is commonly used in web3 and blockchain applications. It can be used to represent numbers 
              in a more compact and human-readable format, or to perform operations that require hexadecimal 
              values.
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
                <FunctionContainer title="web3.NumberToHex" description="">
                    <NumberToHex />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
