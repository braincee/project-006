import FunctionContainer from '@/components/FunctionContainer'
import ToBool from '@/components/web3js/utils/ToBool'
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
            <Typography level="h1">ToBool</Typography>
            <Typography level="h2">The ToBool function.</Typography>
            <Typography level="body-md">
               The <strong>toBool</strong> function is a utility method provided by the <strong>web3.utils</strong> module that takes a 
               value of any type and returns a boolean value indicating whether the input value is truthy 
               or falsy.
            </Typography>
            <Typography level="body-md">
              The <strong>toBool</strong> function takes a single <strong>value</strong> argument, which can be of any type, including numbers, strings, objects, and arrays.
            </Typography>
            <Typography level="body-md">
               The function returns a <strong>boolean</strong> value indicating whether the input value is truthy
                (returning true) or falsy (returning false).
            </Typography>
            <Typography level="body-md">
               Here's an example of how the toBool function can be used:

                    <pre>console.log(web3.utils.toBool(1)); // Output: true</pre>
                    <pre>console.log(web3.utils.toBool("1")); // Output: true</pre>
                    <pre>console.log(web3.utils.toBool(false)); // Output: false</pre>
                    <pre>console.log(web3.utils.toBool(null)); // Output: false</pre>
                    <pre>console.log(web3.utils.toBool(undefined)); // Output: false</pre>
            </Typography>
            <Typography level="body-md">
               In this example, the <strong>toBool</strong> function is called with different types of values, and it 
               correctly returns a boolean value indicating whether the input value is truthy or falsy.
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
                <FunctionContainer title="web3.toBool" description="">
                    <ToBool />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
