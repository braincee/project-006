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
            <Typography level="h1">VerifyTypedData</Typography>
            <Typography level="h2">The VerifyTypedData function.</Typography>
            <Typography level="body-md">
                The <strong>verifyTypedData</strong> function is a utility function in the <strong>viem</strong> library that verifies whether a 
                given address generated a signature for a typed data message. The function takes in several 
                parameters:

                <ul>
                    <li><strong>address:</strong> The Ethereum address that signed the original message.</li>
                    <li><strong>domain:</strong> The typed data domain that contains the types and primary type of the message.</li>
                    <li><strong>types:</strong> An object that defines the types of the message.</li>
                    <li><strong>primaryType:</strong> The primary type of the message.</li>
                    <li><strong>message:</strong> The message object that contains the values of the message fields.</li>
                    <li><strong>signature:</strong> The signature of the typed data message.</li>
                </ul>
            </Typography>
            <Typography level="body-md">
                The function returns a boolean value indicating whether the provided address generated the signature.
                Here are some examples of how to use the verifyTypedData function:

                <pre>{`const address = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266';
                    const domain = {
                    name: 'Ether Mail',
                    version: '1',
                    chainId: 1,
                    verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
                    };
                    const types = {
                    Person: [
                        { name: 'name', type: 'string' },
                        { name: 'wallet', type: 'address' },
                    ],
                    Mail: [
                        { name: 'from', type: 'Person' },
                        { name: 'to', type: 'Person' },
                        { name: 'contents', type: 'string' },
                    ],
                    };
                    const primaryType = 'Mail';
                    const message = {
                    from: {
                        name: 'Cow',
                        wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
                    },
                    to: {
                        name: 'Bob',
                        wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
                    },
                    contents: 'Hello, Bob!',
                    };
                    const signature = '0x...';

                    const valid = await verifyTypedData({ address, domain, types, primaryType, message, signature });
                    console.log(valid); // Output: true`}</pre>
            </Typography>
            <Typography level="body-md">
                In this example, we create a <strong>domain</strong> object that defines the typed data domain, and a <strong>types</strong> object that 
                defines the types of the message. We also create a <strong>message</strong> object that contains the values of the message
                fields, and a <strong>signature</strong> string that represents the signature of the typed data message. 
                Finally, we call the <strong>verifyTypedData</strong> function with these parameters and log the result to the console.
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
