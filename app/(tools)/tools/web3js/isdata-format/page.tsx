import FunctionContainer from '@/components/FunctionContainer'
import IsDataFormat from '@/components/web3js/utils/IsDataFormat'
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
            <Typography level="h1">IsDataFormat</Typography>
            <Typography level="h2">The IsDataFormat function.</Typography>
            <Typography level="body-md">
                The <strong>isDataFormat</strong> function is a utility method provided by the <strong>web3.utils</strong> module 
                that allows you to check whether a given value is a data format supported by Web3.js.
            </Typography>
            <Typography level="body-md">
                The function takes a single parameter, <strong>dataFormat,</strong> which is the value that you want to check for 
                data format. The function then returns a boolean value indicating whether <strong>dataFormat</strong> is a 
                supported data format or not.
            </Typography>
            <Typography level="body-md">
               The <strong>isDataFormat</strong> function checks whether <strong>dataFormat</strong> is a valid data format by checking its type 
               and format. Web3.js supports several data formats, including JSON, JSON-RPC, and IPFS. If 
               <strong>dataFormat</strong> is a string, it must be a valid JSON-RPC request or response. If dataFormat is 
               an object, it must have the following properties:

               <ul>
                <li><pre><strong>jsonrpc:</strong> a string indicating the JSON-RPC version (e.g., "2.0")</pre></li>
                <li><pre><strong>method:</strong> a string indicating the method name</pre></li>
                <li><pre><strong>params:</strong> an array of objects representing the method parameters</pre></li>
               </ul>
            </Typography>
            <Typography level="body-md">
               If <strong>dataFormat</strong> does not match any of the supported data formats, the function returns <strong>false.</strong>
            </Typography>
            <Typography level="body-md">
                  Here's an example usage of the isDataFormat function:

                    <pre>const web3 = require('web3');</pre>

                    <pre>{`const dataFormat = {
                    "jsonrpc": '2.0',
                    method: 'eth_getAccounts',
                    params: []
                    };
                    console.log(web3.utils.isDataFormat(dataFormat)); // Output: true

                    const invalidDataFormat = {
                    "foo": 'bar'
                    };`}</pre>

                    <pre>console.log(web3.utils.isDataFormat(invalidDataFormat)); // Output: false</pre>
            </Typography>
            <Typography level="body-md">
                  In this example, the <strong>isDataFormat</strong> function is called with two different objects: a valid 
                  data format object and an invalid data format object. The function returns <strong>true</strong> for the 
                  valid data format object, indicating that it is a supported data format, and <strong>false</strong> for 
                  the invalid data format object, indicating that it is not a supported data format.
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
                <FunctionContainer title="web3.isDataFormat" description="">
                    <IsDataFormat />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
