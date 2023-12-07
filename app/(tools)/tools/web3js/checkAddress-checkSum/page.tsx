import FunctionContainer from '@/components/FunctionContainer'
import CheckAddressCheckSum from '@/components/web3js/utils/CheckAddressCheckSum'
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
            <Typography level="h1">CheckAddressCheckSum</Typography>
            <Typography level="h2">The CheckAddressCheckSum function.</Typography>
            <Typography level="body-md">
            The <strong>checkAddressCheckSum</strong> function is a callable function in the <strong>web3-utils</strong> library that checks 
            the checksum of a given address. The function takes a string parameter <strong>data</strong>representing the address, 
            and returns a boolean value indicating whether the checksum is valid or not.
            </Typography>
            <Typography level="body-md">
                The function first converts the address to a byte array, and then calculates the checksum using 
                the Keccak-256 hash function. The checksum is then compared to the last 4 bytes of the address to 
                verify its validity. If the checksum matches, 
                the function returns <strong>true,</strong> otherwise it returns <strong>false.</strong>
            </Typography>
            <Typography level="body-md">
                Note that this function is deprecated and will be removed in a future release. It is recommended 
                to use the <strong>web3-validator</strong> package instead for address validation.
            </Typography>
            <Typography level="body-md">
                <strong>Parameters</strong>
                <pre><strong>data: string</strong> - The address to be checked.</pre>
                <br>
                <strong>Returns</strong>
                <pre><strong>boolean - true</strong> if the checksum is valid, <strong>false</strong> otherwise.</pre>
            </Typography>
            <Typography level="body-md">
                <strong>Examples</strong> 
                
               <pre>const web3 = require('web3-utils');</pre>

                <pre>const address = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';</pre>
                <pre>console.log(web3.checkAddressCheckSum(address)); // Output: true</pre>

                <pre>const invalidAddress = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e1';</pre>
                <pre>console.log(web3.checkAddressCheckSum(invalidAddress)); // Output: false</pre>
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
                <FunctionContainer title="web3.checkAddressCheckSum" description="">
                    <CheckAddressCheckSum />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
