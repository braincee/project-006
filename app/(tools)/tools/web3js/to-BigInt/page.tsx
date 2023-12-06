import FunctionContainer from '@/components/FunctionContainer'
import ToBigInt from '@/components/web3js/utils/ToBigInt'
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
            <Typography level="h1">ToBigInt</Typography>
            <Typography level="h2">The ToBigInt function.</Typography>
            <Typography level="body-md">
              The <strong>toBigInt</strong> function is a utility method provided by the <strong>web3.utils</strong> module that takes a value of any type and returns its big integer representation.
            </Typography>
            <Typography level="body-md">
              The <strong>toBigInt</strong> function takes a single <strong>value</strong> argument, which can be of any type, including numbers, strings, and objects
            </Typography>
            <Typography level="body-md">
              The function returns a <strong>bigint</strong> representing the value in its big integer representation.
            </Typography>
            <Typography level="body-md">
                 Here's an example of how the toBigInt function can be used:

                    <pre>console.log(web3.utils.toBigInt(1)); // Output: 1n</pre>
                    <pre>console.log(web3.utils.toBigInt("123")); // Output: 123n</pre>
            </Typography>
            <Typography level="body-md">
               In this example, the <strong>toBigInt</strong> function is called with different types of values, 
               nd it correctly converts them all to their big integer representation.
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
                <FunctionContainer title="web3.bigInt" description="">
                    <ToBigInt />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
