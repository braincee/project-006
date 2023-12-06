import FunctionContainer from '@/components/FunctionContainer'
import ToTwosComplement from '@/components/web3js/utils/ToTwosComplement'
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
            <Typography level="h1">ToTwosComplement</Typography>
            <Typography level="h2">The ToTwosComplement function.</Typography>
            <Typography level="body-md">
              The <strong>toTwosComplement</strong> function is a utility method provided by the <strong>web3.utils</strong> module that
              converts a negative number into its two's complement and returns a hex string representation 
              of the result.
            </Typography>
            <Typography level="body-md">
               The function takes two arguments:
               <ul>
                <li><strong>value:</strong> The negative number to be converted. This can be a number or a bigint.</li>
                <li><strong>nibbleWidth:</strong> An optional parameter that specifies the nibble width of the hex string. The default value is 64.</li>
               </ul>
            </Typography>
            <Typography level="body-md">
               The function returns a string representing the two's complement of the input value, 
               padded with zeros to the specified nibble width.
            </Typography>
            <Typography level="body-md">
                  Here are some examples of how the toTwosComplement function can be used:

                    <pre>console.log(web3.utils.toTwosComplement(13, 32)); // Output: 0x00000000000000000000000000000000d</pre>
                    <pre>console.log(web3.utils.toTwosComplement('-0x1', 32)); // Output: 0xffffffffffffffffffffffffffffffff</pre>
                    <pre>console.log(web3.utils.toTwosComplement(BigInt('9007199254740992'), 32)); // Output: 0x00000000000000000020000000000000</pre>
            </Typography>
            <Typography level="body-md">
            In the first example, the <strong>toTwosComplement</strong> function is called with the number 13 and a nibble 
            width of 32. The function returns a hex string representing the two's complement of 13, which 
            is 0x00000000000000000000000000000000d.
            </Typography>
            <Typography level="body-md">
               In the second example, the <strong>toTwosComplement</strong> function is called with the string '-0x1' 
               and a nibble width of 32. The function returns a hex string representing the two's 
               complement of -1, which is 0xffffffffffffffffffffffffffffffff.
            </Typography>
            <Typography level="body-md">
              In the third example, the <strong>toTwosComplement</strong> function is called with a bigint value and a 
              nibble width of 32. The function returns a hex string representing the two's complement of 
              the bigint value, which is 0x00000000000000000020000000000000.
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
                <FunctionContainer title="web3.toTwosComplement" description="">
                    <ToTwosComplement />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
