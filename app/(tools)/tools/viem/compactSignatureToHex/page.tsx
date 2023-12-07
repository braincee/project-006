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
            <Typography level="h1">CompactSignatureToHex</Typography>
            <Typography level="h2">The CompactSignatureToHex function.</Typography>
            <Typography level="body-md">
                The <strong>compactSignatureToHex</strong> function is a utility function from the <strong>viem</strong> library that 
                takes a compact signature, as defined by the EIP-2098 standard, and converts it into a
                hexadecimal string.
            </Typography>
            <Typography level="body-md">
                The compact signature is a compressed representation of a signature that consists of two parts: the "r" 
                value, which is a 32-byte hash of the message being signed, and the "yParityAndS" 
                value, which is a 32-byte value that contains the parity information and the "s" value from the signature.
            </Typography>
            <Typography level="body-md">
                The function takes an object with two properties: <strong>r and yParityAndS,</strong> which correspond to the two 
                parts of the compact signature. The <strong>r</strong> property is a hexadecimal string representing the 32-byte 
                hash of the message, and the <strong>yParityAndS</strong> property is also a hexadecimal string representing the 
                32-byte value containing the parity information and the "s" value.
            </Typography>
            <Typography level="body-md">
              Here's an example of how you can use the compactSignatureToHex function:

              <pre>{`const compactSignature = {
                r: '0x68a020a209d3d56c46f38cc50a33f704f4a9a10a59377f8dd762ac66910e9b90',
                yParityAndS: '0x7e865ad05c4035ab5792787d4a0297a43617ae897930a6fe4d822b8faea52064'
                };

                const hexSignature = compactSignatureToHex(compactSignature);

                console.log(hexSignature); // Output: "0x68a020a209d3d56c46f38cc50a33f704f4a9a10a59377f8dd762ac66910e9b907e865ad05c4035ab5792787d4a0297a43617ae897930a6fe4d822b8faea52064"`}</pre>
            </Typography>
            <Typography level="body-md">
                In this example, we first define a compact signature object <strong>compactSignature</strong> with the <strong>r and yParityAndS</strong>
                properties. We then pass this object to the <strong>compactSignatureToHex</strong> function, which returns a hexadecimal 
                string representing the compact signature. 
                We log this string to the console, which outputs the hexadecimal representation of the compact signature.
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
