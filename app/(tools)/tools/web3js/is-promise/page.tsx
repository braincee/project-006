import FunctionContainer from '@/components/FunctionContainer'
import IsPromise from '@/components/web3js/utils/IsPromise'
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
            <Typography level="h1">IsPromise</Typography>
            <Typography level="h2">The IsPromise function.</Typography>
            <Typography level="body-md">
                The <strong>isPromise</strong> function is a utility method that allows you to check whether a given object is a Promise. 
                This function is useful when working with asynchronous code, as it enables you to easily determine whether a value 
                is a Promise, and therefore whether it can be used with asynchronous methods like <strong>then and await.</strong>
            </Typography>
            <Typography level="body-md">
                The <strong>isPromise</strong> function takes a single parameter, <strong>object,</strong> which is the value that you want to check for Promise-ness. 
                The function then returns a boolean value indicating whether <strong>object</strong> is a Promise or not.
            </Typography>
            <Typography level="body-md">
                The function checks whether <strong>object</strong> is a Promise by looking for the presence of a <strong>then</strong> method. If 
                <strong>object</strong> has a <strong>then</strong> method, it is considered to be a Promise, 
                and the function returns <strong>true.</strong> If <strong>object</strong> does not have a <strong>then</strong> method, the function returns <strong>false.</strong>
            </Typography>
            <Typography level="body-md">
                 Here's an example usage of the isPromise function:

                    <pre>const web3 = require('web3');</pre>

                    <pre>const promise = web3.eth.getAccounts();</pre>
                    <pre>console.log(web3.utils.isPromise(promise)); // Output: true</pre>

                    <pre>const nonPromise = 'foo';</pre>
                    <pre>console.log(web3.utils.isPromise(nonPromise)); // Output: false</pre>
            </Typography>
            <Typography level="body-md">
                In this example, the <strong>isPromise</strong> function is called with two different values: a Promise object returned 
                by the <strong>web3.eth.getAccounts()</strong> method, and a string value <strong>'foo'.</strong> The function returns <strong>true</strong> for the Promise object, 
                indicating that it is a Promise, and <strong>false</strong> for the string value, indicating that it is not a Promise.
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
                <FunctionContainer title="web3.isPromise" description="">
                    <IsPromise />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
