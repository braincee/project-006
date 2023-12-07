import FunctionContainer from '@/components/FunctionContainer'
import Uint8ArrayEquals from '@/components/web3js/utils/Uint8ArrayEquals'
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
            <Typography level="h1">Uint8ArrayEquals</Typography>
            <Typography level="h2">The Uint8ArrayEquals function.</Typography>
            <Typography level="body-md">
               The <strong>uint8ArrayEquals</strong> function is a utility method provided by the <strong>web3.utils</strong> module
                that compares two Uint8Arrays for equality.
            </Typography>
            <Typography level="body-md">
              The function takes two Uint8Array arguments, denoted by the <strong>a and b</strong> parameters. The function 
              returns a boolean value indicating whether the two Uint8Arrays have the same content.
            </Typography>
            <Typography level="body-md">
               The comparison is performed by iterating over each element of the two Uint8Arrays and 
               checking if they are equal. If any element is found to be different, the function returns false. If all elements are equal, the function returns true.
            </Typography>
            <Typography level="body-md">
                  Here's an example of how the uint8ArrayEquals function can be used:

                    <pre>const web3 = require('web3');</pre>
                    <pre>const array1 = new Uint8Array([0x01, 0x02, 0x03]);</pre>
                    <pre>const array2 = new Uint8Array([0x01, 0x02, 0x03]);</pre>
                    <pre>console.log(web3.utils.uint8ArrayEquals(array1, array2)); // Output: true</pre>
            </Typography>
            <Typography level="body-md">
               In this example, two Uint8Arrays are created with the same content. The <strong>uint8ArrayEquals</strong> 
               function is called with these two arrays as arguments, and it returns true because the 
               arrays have the same content.
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
                <FunctionContainer title="web3.uint8ArrayEquals" description="">
                  <Uint8ArrayEquals />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
