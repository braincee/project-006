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
            <Typography level="h1">SignatureToCompactSignature</Typography>
            <Typography level="h2">The SignatureToCompactSignature function.</Typography>
            <Typography level="body-md">
              The <strong>signatureToCompactSignature</strong> function is used to parse a signature into an 
              EIP-2098 compact signature. It takes a signature object as its input, which consists of the 
              following properties:

              <ul>
                <li><strong>r:</strong> The recovery point signature, represented as a hexadecimal string.</li>
                <li><strong>s:</strong> The signature, also represented as a hexadecimal string.</li>
                <li><strong>v:</strong> The version number, as an integer.</li>
              </ul>
            </Typography>
            <Typography level="body-md">
                The function returns a compact signature object, which includes the following properties:
                <ul>
                    <li><strong>r:</strong> The recovery point signature, in the same format as the input.</li>
                    <li><strong>yParityAndS:</strong> The parity and signature, also in the same format as the input.</li>
                </ul>
            </Typography>
            <Typography level="body-md">
               Here's a description of the function:

               <pre>{`javascript
                function signatureToCompactSignature(signature) {
                // Parse the input signature object
                const { r, s, v } = signature;

                // Calculate the recovery point signature (r)
                const yParityAndS = calculateRecoveryPointSignature(r, s, v);

                // Return the compact signature object
                return {
                    r,
                    yParityAndS,
                };
                }
            `}</pre>
            </Typography>
            <Typography level="body-md">
               This function is useful for working with EIP-2098 signatures in a compact form, 
               as it allows you to parse and manipulate the signature components more efficiently
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
