import FunctionContainer from '@/components/FunctionContainer'
import Keccak256Wrapper from '@/components/web3js/utils/Keccak256Wrapper'
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
            <Typography level="h1">KeccaK265Wrapper</Typography>
            <Typography level="h2">The KeccaK256Wrapper function.</Typography>
            <Typography level="body-md">
              The <strong>keccak256Wrapper</strong> function is a utility method provided by the <strong>web3.utils</strong> module that allows 
              you to easily calculate the Keccak-256 hash of various types of input data. Keccak-256 is a 
              cryptographic hash function that produces a fixed-size hash value, which is commonly used in
               blockchain applications such as Ethereum.
            </Typography>
            <Typography level="body-md">
                  The function takes a single parameter, <strong>data,</strong> which can be a string, number, bigint, 
                  Uint8Array, or an array of readonly numbers. The <strong>data</strong> parameter is the input that you 
                  want to hash.
            </Typography>
            <Typography level="body-md">
                The <strong>keccak256Wrapper</strong> function returns a string representing the Keccak-256 hash of the <strong>data</strong>
                parameter. The hash value is a 32-byte hexadecimal string, which is typically prefixed with 
                "0x" or "0x0" to indicate that it is a hexadecimal number.
            </Typography>
            <Typography level="body-md">
                 The function is a wrapper around the <strong>ethereum-cryptography/keccak256</strong> library, 
                 which provides a JavaScript implementation of the Keccak-256 hash function. 
                 By using this wrapper function, you can easily integrate Keccak-256 hashing into
                  your web3.js applications without needing to install and use the underlying library directly.
            </Typography>
            <Typography level="body-md">
                Here are some examples of how you can use the keccak256Wrapper function:
                    <ul>
                    <li><pre>Hash a string: console.log(web3.utils.keccak256Wrapper('web3.js'));</pre></li>
                    <li><pre>Hash a number: console.log(web3.utils.keccak256Wrapper(1));</pre></li>
                    <li><pre>Hash a bigint: console.log(web3.utils.keccak256Wrapper(0xaf12fd));</pre></li>
                    <li><pre>Hash a Uint8Array: const data = new Uint8Array([0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef]); console.log(web3.utils.keccak256Wrapper(data));</pre></li>
                    </ul>
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
                <FunctionContainer title="web3.keccaK256Wrapper" description="">
                    <Keccak256Wrapper />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
