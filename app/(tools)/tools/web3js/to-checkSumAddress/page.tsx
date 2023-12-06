import FunctionContainer from '@/components/FunctionContainer'
import ToChecksumAddress from '@/components/web3js/utils/ToChecksumAddress'
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
            <Typography level="h1">ToCheckSumAddress</Typography>
            <Typography level="h2">The ToCheckSumAddress function.</Typography>
            <Typography level="body-md">
               The <strong>toChecksumAddress</strong> function is a utility method provided by the <strong>web3.utils</strong> module that 
               takes an Ethereum address as a string and returns a checksum address. The function converts 
               the input address to a checksum address, which is a modified version of the address that 
               includes a checksum code at the end. The checksum code is calculated using the first 20 bytes
                of the address, and it helps to detect errors in the address, such as typos or incorrect 
                formatting.
            </Typography>
            <Typography level="body-md">
               The <strong>toChecksumAddress</strong> function takes a single <strong>address</strong> argument, which can be an upper or 
               lowercase Ethereum address.
            </Typography>
            <Typography level="body-md">
              The function returns a <strong>string</strong> representing the checksum address.
            </Typography>
            <Typography level="body-md">
                Here's an example of how the toChecksumAddress function can be used:

                    <pre>const address = '0xc1912fee45d61c87cc5ea59dae31190fffff232d';</pre>
                    <pre>const checksumAddress = web3.utils.toChecksumAddress(address);</pre>
                    <pre>console.log(checksumAddress); // Output: "0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d"</pre>
            </Typography>
            <Typography level="body-md">
                In this example, the <strong>toChecksumAddress</strong> function is called with an Ethereum address, and it returns
                a checksum address with the correct formatting and checksum code.
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
                <FunctionContainer title="web3.toCheckSumAddress" description="">
                    <ToChecksumAddress />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
