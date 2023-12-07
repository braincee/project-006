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
            <Typography level="h1">HexToCompactSignature</Typography>
            <Typography level="h2">The HexToCompactSignature function.</Typography>
            <Typography level="body-md">
                The <strong>hexToCompactSignature</strong> function is a utility function in the <strong>viem</strong> library 
                that takes a hex-formatted compact signature and parses it into a structured 
                ("split") compact signature.
            </Typography>
            <Typography level="body-md">
                A compact signature is a compressed representation of a signature that contains the essential information 
                needed to verify the authenticity of a message. In the context 
                of the Ethereum blockchain, compact signatures are used to represent the signature of a transaction sender.
            </Typography>
            <Typography level="body-md">
               The <strong>hexToCompactSignature</strong> function takes a hex-formatted compact signature as input and returns 
               a structured compact signature, which consists of two parts: <strong>r and yParityAndS.</strong>
            </Typography>
            <Typography level="body-md">
                The <strong>r</strong> part is the recovery parameter, which is a 32-byte value that represents the message that
                was signed. 
                The <strong>yParityAndS</strong> part is a 32-byte value that represents the parity and S values of the signature.
            </Typography>
            <Typography level="body-md">
               Here's an example usage of the hexToCompactSignature function:

               <pre>{`import { hexToCompactSignature } from 'viem';

                const signatureHex = '0x9328da16089fcba9bececa81663203989f2df5fe1faa6291a45381c81bd17f76939c6d6b623b42da56557e5e734a43dc83345ddfadec52cbe24d0cc64f550793';

                const compactSignature = hexToCompactSignature(signatureHex);

                console.log(compactSignature);
                // Output: { r: '0x9328da16089fcba9bececa81663203989f2df5fe1faa6291a45381c81bd17f76', yParityAndS: '0x939c6d6b623b42da56557e5e734a43dc83345ddfadec52cbe24d0cc64f550793' }`}</pre>
            </Typography>
            <Typography level="body-md">
              In this example, we first import the <strong>hexToCompactSignature</strong> function from the <strong>viem</strong> library.
               We then define a variable signatureHex that contains the hex-formatted compact signature that 
               we want to parse
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
