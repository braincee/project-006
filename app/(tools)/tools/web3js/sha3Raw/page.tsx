import FunctionContainer from '@/components/FunctionContainer'
import Sha3Raw from '@/components/web3js/utils/Sha3Raw'
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
            <Typography level="h1">Sha3Raw</Typography>
            <Typography level="h2">The Sha3Raw function.</Typography>
            <Typography level="body-md">
               The <strong>sha3Raw</strong> function is a utility method provided by the <strong>web3.utils</strong> module that calculates 
               the Keccak-256 hash of the input data and returns the hash value as a string. Unlike the 
               <strong>sha3</strong> function, <strong>sha3Raw</strong> will always return a string value, even if the input data is an empty 
               string or a buffer of zero length.
            </Typography>
            <Typography level="body-md">
              The function takes a single parameter, <strong>data,</strong> which is the input <strong>data</strong> to be hashed. The data 
              parameter can be a string or a buffer of bytes.
            </Typography>
            <Typography>
              The <strong>sha3Raw</strong> function returns a string representation of the Keccak-256 hash of the input data. 
              If the input data is an empty string or a buffer of zero length, the function returns a string 
              value that is not <strong>undefined.</strong>
            </Typography>
            <Typography level="body-md">
             Here's an example of how the sha3Raw function can be used:

                    <pre>const data = 'web3.js';</pre>
                    <pre>console.log(web3.utils.sha3Raw(data)); // Output: 0x63667efb1961039c9bb0d6ea7a5abdd223a3aca7daa5044ad894226e1f83919a</pre>

                    <pre>const emptyData = '';</pre>
                    <pre>console.log(web3.utils.sha3Raw(emptyData)); // Output: 0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470</pre>
            </Typography>
            <Typography level="body-md">
              In this example, the <strong>sha3Raw</strong> function is called with a string <strong>data</strong> and an empty string <strong>emptyData.</strong>
               The function returns a string representation of the Keccak-256 hash of the input data for both 
               calls, with the hash value being different for each input.
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
                <FunctionContainer title="web3.sha3Raw" description="">
                    <Sha3Raw />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
