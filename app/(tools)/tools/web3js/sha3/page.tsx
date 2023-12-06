import FunctionContainer from '@/components/FunctionContainer'
import Sha3 from '@/components/web3js/utils/Sha3'
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
            <Typography level="h1">Sha3</Typography>
            <Typography level="h2">The Sha3 function.</Typography>
            <Typography level="body-md">
               The <strong>sha3</strong> function is a utility method provided by the <strong>web3.utils</strong> module that computes 
               the Keccak-256 hash of the input data and returns a hexadecimal string representation of
                the hash.
            </Typography>
            <Typography level="body-md">
              The function takes a single parameter, <strong>data,</strong> which is the input <strong>data</strong> to be hashed. The data 
              parameter can be a string or a buffer of bytes.
            </Typography>
            <Typography level="body-md">
              The <strong>sha3</strong> function returns a hexadecimal string representation of the Keccak-256 hash of the 
              input data. If the input data is an empty string or a buffer of zero length, the function 
              returns <strong>undefined.</strong>
            </Typography>
            <Typography level="body-md">
              Here's an example of how the sha3 function can be used:

                    <pre>const data = 'web3.js';</pre>
                    <pre>console.log(web3.utils.sha3(data)); // Output: 0x63667efb1961039c9bb0d6ea7a5abdd223a3aca7daa5044ad894226e1f83919a</pre>

                    <pre>const emptyData = '';</pre>
                    <pre>console.log(web3.utils.sha3(emptyData)); // Output: undefined</pre>
            </Typography>
            <Typography level="body-md">
              In this example, the <strong>sha3</strong> function is called with a string <strong>data</strong> and an empty string <strong>emptyData.</strong> 
              The function returns a hexadecimal string representation of the Keccak-256 hash of the input data 
              for the first call, and <strong>undefined</strong> for the second call since the input data is empty.
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
                <FunctionContainer title="web3.sha3" description="">
                    <Sha3 />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
