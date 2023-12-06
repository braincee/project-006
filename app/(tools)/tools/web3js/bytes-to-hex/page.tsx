import FunctionContainer from '@/components/FunctionContainer'
import BytesToHex from '@/components/web3js/utils/BytesToHex'
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
            <Typography level="h1">BytesToHex</Typography>
            <Typography level="h2">The BytesToHex function.</Typography>
            <Typography level="body-md">
            The <strong>bytesToHex</strong> function is a callable function in the <strong>web3-utils </strong>library that converts a byte array
             to a hex string. The function takes a byte array as input and returns a 
            string representation of the bytes in hexadecimal format, prefixed with <strong>0x.</strong>
            </Typography>
            <Typography level="body-md">
              Here's an example of how to use the <strong>bytesToHex</strong> function:
              <pre>console.log(web3.utils.bytesToHex(new Uint8Array([72, 12])));</pre>
              <pre>// Output: 0x480c</pre>
            </Typography>
            <Typography>
              In this example, the <strong>bytesToHex</strong> function takes a byte array represented 
              by the <strong>Uint8Array</strong> constructor and returns its hex string representation, which is <strong>'0x480c'.</strong>
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
                <FunctionContainer title="web3.bytesToHex" description="">
                    <BytesToHex />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
