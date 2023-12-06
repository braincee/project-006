import FunctionContainer from '@/components/FunctionContainer'
import ToNumber from '@/components/web3js/utils/ToNumber'
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
            <Typography level="h1">ToNumber</Typography>
            <Typography level="h2">The ToNumber function.</Typography>
            <Typography level="body-md">
               The <strong>toNumber</strong> function is a utility method provided by the <strong>web3.utils</strong> module that 
               converts any given value into its number or bigint representation, depending on the 
               type of the input value.
            </Typography>
            <Typography level="body-md">
                The <strong>toNumber</strong> function takes a single <strong>value</strong> argument, which can be a number, a bigint, or a string that can be parsed to a number or bigint.
            </Typography>
            <Typography level="body-md">
               If the input value is a number, the function returns the number itself. If the input value is a 
               bigint, the function returns the bigint representation of the value. If the input value is a 
               string that can be parsed to a number or bigint, the function returns the parsed value as a 
               number or bigint.
            </Typography>
            <Typography level="body-md">
                 Here are some examples of how the toNumber function can be used:

                    <pre>console.log(web3.utils.toNumber(1)); // Output: 1</pre>
                    <pre>console.log(web3.utils.toNumber(Number.MAX_SAFE_INTEGER)); // Output: 9007199254740991</pre>
                    <pre>console.log(web3.utils.toNumber(BigInt(Number.MAX_SAFE_INTEGER))); // Output: 9007199254740991</pre>
                    <pre>console.log(web3.utils.toNumber(BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1))); // Output: 9007199254740992n</pre>
            </Typography>
            <Typography level="body-md">
                In the first example, the <strong>toNumber</strong> function is called with the number 1, and it returns 1.
                In the second example, the <strong>toNumber</strong> function is called with the maximum safe integer value, which is a bigint, and it returns the bigint representation of the value.
                In the third example, the <strong>toNumber</strong> function is called with a bigint value, and it returns the bigint representation of the value.
                In the fourth example, the <strong>toNumber</strong> function is called with a bigint value that is the sum of two bigint values, and it returns the bigint representation of the sum.
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
                <FunctionContainer title="web3.toNumber" description="">
                    <ToNumber />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
