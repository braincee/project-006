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
            <Typography level="h1">EncodeAbiParameters</Typography>
            <Typography level="h2">The EncodeAbiParameters function.</Typography>
            <Typography level="body-md">
               The <strong>encodeAbiParameters</strong> function is used to encode ABI parameters into a hex string, 
               which can be used in a smart contract. It takes two parameters:

               <ul>
                <li><strong>params:</strong> An array of ABI parameters, which can be in the shape of the inputs or outputs 
                    attribute of an ABI item. These parameters must include valid ABI types.
                </li>
                <li><strong>values:</strong> An array of primitive values that correspond to the ABI types defined in <strong>params.</strong></li>
               </ul>
            </Typography>
            <Typography level="body-md">
            The function returns the ABI encoded data as a hex string.
            </Typography>
            <Typography>
                Here's an example of how to use the encodeAbiParameters function:

                <pre>{`import { encodeAbiParameters } from 'viem'

                    const params = [
                    { name: 'x', type: 'uint32' },
                    { name: 'y', type: 'bool' },
                    { name: 'z', type: 'string' },
                    ]

                    const values = [
                    420n,
                    true,
                    '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
                    ]

                    const encodedData = encodeAbiParameters(params, values)

                    console.log(encodedData)
                    // Output: 0x0000000000000000000000000000000000000000000000000000000000001a400000000`}</pre>
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
                <FunctionContainer title="web3.encodeAbiParameters" description="">
                    {/* <FormatEhter /> */}
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
