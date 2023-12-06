import FunctionContainer from '@/components/FunctionContainer'
import IsNullish from '@/components/web3js/utils/IsNullish'
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
            <Typography level="h1">IsNullish</Typography>
            <Typography level="h2">The IsNullish function.</Typography>
            <Typography level="body-md">
                The <strong>isNullish</strong> function is a utility method provided by the <strong>web3.utils</strong> module that allows you to check 
                whether a given value is undefined or null. This function is useful when working with smart contracts 
                that need to handle null or undefined values, 
                as it enables you to easily check whether a value is nullish without having to perform a manual check.
            </Typography>
            <Typography level="body-md">
                The function takes a single parameter, <strong>item,</strong> which is the value that you want to check for nullishness. 
                The function then returns a boolean value indicating whether <strong>item</strong> is undefined or null.
            </Typography>
            <Typography level="body-md">
                Here's an example usage of the <strong>isNullish</strong> function:

                    <pre>const web3 = require('web3');</pre>

                    <pre>console.log(web3.utils.isNullish(undefined)); // Output: true</pre>
                    <pre>console.log(web3.utils.isNullish(null)); // Output: true</pre>
                    <pre>console.log(web3.utils.isNullish('foo')); // Output: false</pre>
            </Typography>
            <Typography level="body-md">
                In this example, the <strong>isNullish</strong> function is called with three different values: <strong>undefined, null, and 'foo'.</strong> 
                The function returns <strong>true</strong> for <strong>undefined</strong> and <strong>null,</strong> indicating that they are nullish values, 
                and <strong>false for 'foo',</strong> indicating that it is not a nullish value.
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
                <FunctionContainer title="web3.IsNullish" description="">
                    <IsNullish />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
