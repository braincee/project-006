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
            <Typography level="h1">HexToSignature</Typography>
            <Typography level="h2">The HexToSignature function.</Typography>
            <Typography level="body-md">
              The <strong>hexToSignature</strong> function is a utility function in the <strong>viem</strong> library that takes a hex-formatted 
              signature and parses it into a structured ("split") signature.
            </Typography>
            <Typography level="body-md">
            The function takes a single parameter, <strong>signatureHex,</strong> which is the hex-formatted signature that we want to parse.
            The function returns a structured signature object, which consists of three parts: <strong>r, s, and v.</strong>

            <ul>
                <li>The <strong>r</strong> part is the recovery parameter, which is a 32-byte value that represents the message that was signed.</li>
                <li>The <strong>s</strong> part is the signature parameter, which is a 32-byte value that represents the signature of the message.</li>
                <li>The <strong>v</strong> part is the v parameter, which is a 4-byte value that represents the recovery parameter of the signature.</li>
            </ul>
            </Typography>
            <Typography level="body-md">
                Here's an example usage of the <strong>hexToSignature</strong> function:

                <pre>{`import { hexToSignature } from 'viem';

                const signatureHex = '0x6e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf4a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db81c';

                const signature = hexToSignature(signatureHex);

                console.log(signature);
                // Output: { r: '0x6e100a352ec6ad1b70802290e18aeed190704973570f3b8ed42cb9808e2ea6bf', s: '0x4a90a229a244495b41890987806fcbd2d5d23fc0dbe5f5256c2613c039d76db8', v: 28n }`}</pre>
            </Typography>
            <Typography level="body-md">
              In this example, we first import the <strong>hexToSignature</strong> function from the <strong>viem</strong> library. We then 
              define a variable signatureHex that contains the hex-formatted signature that we want to parse.
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
