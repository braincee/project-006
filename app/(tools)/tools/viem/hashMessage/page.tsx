import FunctionContainer from '@/components/FunctionContainer'

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
            <Typography level="h1">HashMessage</Typography>
            <Typography level="h2">The HashMessage function.</Typography>
            <Typography level="body-md">
                The <strong>hashMessage</strong> function from the <strong>viem</strong> library is a utility function that calculates an 
                Ethereum-specific hash in EIP-191 format. 
                The function takes a message as input and returns the hashed message in hex format.
            </Typography>
            <Typography level="body-md">
            The function supports three types of input messages:
            <ul>
                <li>String messages: The function takes a string message as input and hashes it directly.</li>
                <li>Hex messages: The function takes a hex string message as input and hashes it directly.</li>
                <li> ByteArray messages: The function takes a ByteArray message as input and hashes it directly.</li>
            </ul>
            </Typography>
            <Typography level="body-md">
              Here is an examples of how to use the hashMessage function:

              <pre>{`import { hashMessage } from 'viem';

                const message = 'hello world';
                const hash = hashMessage(message);
                console.log(hash); // Output: 0xd9eba16ed0ecae432b71fe008c98cc872bb4cc214d3220a36f365326cf807d68`}</pre>
            </Typography>
            <Typography level="body-md">
               The function returns the hashed message in hex format. The hash value is a 32-byte value that 
               is computed using the Keccak-256 hash function, with the message prefixed by the bytes 
               "\x19Ethereum Signed Message:\n" followed by the length of the message in bytes, and then 
               the message itself.
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
            </Stack>
        </Stack>
    )
}
