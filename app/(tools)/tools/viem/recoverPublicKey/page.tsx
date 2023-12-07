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
            <Typography level="h1">RecoveryPublicKey</Typography>
            <Typography level="h2">The RecoveryPublicKey function.</Typography>
            <Typography level="body-md">
               The <strong>recoverPublicKey</strong> function is used to recover the original signing 64-byte public key 
               from a <strong>hash</strong> and signature. It is based on the Ethereum cryptography library, which uses 
               elliptic curve secp256k1 for ECDSA signatures. The function takes two parameters: hash, 
               a string representing the hash that was signed, and <strong>signature,</strong> a hexadecimal string or 
               byte array representing the signature of the hash.
            </Typography>
            <Typography level="body-md">
               Here's an example of how to use the recoverPublicKey function:

               <pre>{`javascript
                import { recoverPublicKey } from 'viem';

                const address = await recoverPublicKey({
                hash: '0xd9eba16ed0ecae432b71fe008c98cc872bb4cc214d3220a36f365326cf807d68',
                signature: '0x66edc32e2ab001213321ab7d959a2207fcef5190cc9abb6da5b0d2a8a9af2d4d2b0700e2c317c4106f337fd934fbbb0bf62efc8811a78603b33a8265d3b8f8cb1c'
                });
                `}</pre>
            </Typography>
            <Typography level="body-md">
               In this example, the <strong>hash</strong> is a hexadecimal string representing the hash of the message that 
               was signed, and the <strong>signature</strong> is a hexadecimal string representing the ECDSA signature of 
               the hash. The function returns the signing public key, which can be used to determine the 
               origin of the signed message.
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
