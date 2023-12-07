import FunctionContainer from '@/components/FunctionContainer'
import EncodePacked from '@/components/web3js/utils/EncodePacked'
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
            <Typography level="h1">EncodePacked</Typography>
            <Typography level="h2">The EncodePacked function.</Typography>
            <Typography level="body-md">
            The <strong>encodePacked</strong> function takes in an arbitrary number of <strong>Sha3Input</strong> arguments and encodes 
            them into a single hexstring. The function is designed to be used with the <strong>Sha3</strong> hash function, 
            which is a part of the Web3.js library.
            </Typography>
            <Typography level="body-md">
              The function takes in a variable number of <strong>Sha3Input</strong> arguments, which can be any combination of 
              strings, integers, and buffers. Each argument is converted to a hexstring and then packed 
              together into a single hexstring, using the <strong>Sha3</strong> hash function's packed encoding format.
            </Typography>
            <Typography level="body-md">
             The resulting hexstring can be used as input to the <strong>Sha3</strong> hash function, or it can be used in 
             other contexts where a packed encoding of the data is required.
            </Typography>
            <Typography>
              Here's an example of how the <strong>encodePacked</strong> function can be used:
              <pre>const input1 = 'Hello, world!';</pre>
              <pre>const input2 = 42;</pre>
              <pre>const input3 = Buffer.from('0x1234567890abcdef');</pre>
              <pre>const encoded = web3.utils.encodePacked(input1, input2, input3);</pre>
              <pre>console.log(encoded);</pre>
              <pre>// Output: 0x746865203132333435363738396162636465666768697034657374757677787970617263646567686970</pre>
            </Typography>
            <Typography>
            In this example, the <strong>encodePacked</strong> function takes in three arguments: a string, an integer, and a 
            buffer. The function converts each argument to a hexstring and packs them together into a single
             hexstring, which is then logged to the console.
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
                <FunctionContainer title="web3.encodePacked">
                    <EncodePacked />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
