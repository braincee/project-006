import FunctionContainer from '@/components/FunctionContainer'
import Uint8ArrayConcat from '@/components/web3js/utils/Uint8ArrayConcat'
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
            <Typography level="h1">Uint8ArrayConcat</Typography>
            <Typography level="h2">The Uint8ArrayConcat function.</Typography>
            <Typography level="body-md">
               The <strong>uint8ArrayConcat</strong> function is a utility method provided by the <strong>web3.utils</strong> module that 
               concatenates multiple Uint8Arrays into a single Uint8Array.
            </Typography>
            <Typography level="body-md">
               The function takes an arbitrary number of Uint8Array arguments, denoted by the <strong>...parts</strong> syntax.
                Each Uint8Array argument represents a portion of the data to be concatenated.
            </Typography>
            <Typography level="body-md">
               The function returns a new Uint8Array that contains the concatenation of all the input 
               Uint8Arrays. The resulting Uint8Array will have a length equal to the sum of the lengths
                of the input Uint8Arrays.
            </Typography>
            <Typography level="body-md">
              Here's an example of how the uint8ArrayConcat function can be used:

                    <pre>const web3 = require('web3');</pre>
                    <pre>const part1 = new Uint8Array([0x01, 0x02, 0x03]);</pre>
                    <pre>const part2 = new Uint8Array([0x04, 0x05, 0x06]);</pre>
                    <pre>const part3 = new Uint8Array([0x07, 0x08, 0x09]);</pre>
                    <pre>const concatenated = web3.utils.uint8ArrayConcat(part1, part2, part3);</pre>
                    <pre>console.log(concatenated); // Output: Uint8Array([0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09])</pre>
            </Typography>
            <Typography level="body-md">
               In this example, three Uint8Arrays are passed to the <strong>uint8ArrayConcat</strong> function, which returns 
               a new Uint8Array that contains the concatenation of all three input arrays
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
                <FunctionContainer title="web3.hexTonumber" description="">
                    <Uint8ArrayConcat />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
