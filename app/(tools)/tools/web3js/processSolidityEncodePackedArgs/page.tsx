import FunctionContainer from '@/components/FunctionContainer'
import ProcessSolidityEncodePackedArgs from '@/components/web3js/utils/ProcessSolidityEncodePackedArgs'
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
            <Typography level="h1">ProcessSolidityEncodePackedArgs</Typography>
            <Typography level="h2">The ProcessSolidityEncodePackedArgs function.</Typography>
            <Typography level="body-md">
             The <strong>processSolidityEncodePackedArgs</strong> function is a utility method provided by the <strong>web3.utils</strong> 
             module that takes a <strong>Sha3Input</strong> argument and returns a string representing the tightly packed 
             value based on the type of the input.
            </Typography>
            <Typography level="body-md">
              The function is used to encode the input data in a compact and efficient way, which is 
              particularly useful for sending data on the Ethereum blockchain.
            </Typography>
            <Typography level="body-md">
             The <strong>processSolidityEncodePackedArgs</strong> function takes a single parameter, <strong>arg,</strong> which is of 
             type <strong>Sha3Input.</strong> This type represents a variety of input data that can be processed by
              the function, including strings, numbers, and binary data.
            </Typography>
            <Typography level="body-md">
              The function returns a string representing the tightly packed value of the input data. The 
              returned string is formatted in a specific way that allows for efficient storage and 
              transmission on the Ethereum blockchain.
            </Typography>
            <Typography level="body-md">
              Here's an example of how the processSolidityEncodePackedArgs function can be used:

                    <pre>const input = 'Hello, world!';</pre>
                    <pre>const packedInput = web3.utils.processSolidityEncodePackedArgs(input);</pre>
                    <pre>console.log(packedInput); // Output: '0x746865206c6f616e6720776f726c6421'</pre>
            </Typography>
            <Typography level="body-md">
              In this example, the <strong>processSolidityEncodePackedArgs</strong> function takes a string input and returns 
              a packed string representation of the input data. The packed string is formatted in a way 
              that can be efficiently stored and transmitted on the Ethereum blockchain.
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
                <FunctionContainer title="web3.PollTillDefinedAndReturnIntervalId" description="">
                    <ProcessSolidityEncodePackedArgs />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
