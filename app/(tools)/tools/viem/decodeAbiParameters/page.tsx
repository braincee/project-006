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
            <Typography level="h1">DecodeAbiParameters</Typography>
            <Typography level="h2">The DecodeAbiParameters function.</Typography>
            <Typography level="body-md">
                The <strong>decodeAbiParameters</strong> function is a utility function in the <strong>viem</strong> library that decodes ABI encoded data 
                using the ABI specification. It takes in two parameters: a set of ABI parameters (inputs/outputs) 
                and the encoded ABI data. The function returns the decoded data, with the type inferred from the ABI.
            </Typography>
            <Typography level="body-md">
                The <strong>decodeAbiParameters</strong> function is used by other contract decoding utilities in the <strong>viem</strong>
                library, such as <strong>decodeFunctionData and decodeEventLog.</strong> It is also useful for decoding ABI 
                encoded data in a smart contract.
            </Typography>
            <Typography level="body-md">
                The function takes in a set of ABI parameters, which can be in the shape of the inputs or outputs 
                attribute of an ABI item. These parameters must include valid ABI types. 
                The encoded ABI data is also required, which is a hex string that represents the encoded data.
            </Typography>
            <Typography level="body-md">
                The <strong>decodeAbiParameters</strong> function is flexible and can decode a wide range of ABI encoded data, 
                including simple structs and human-readable parameters. It is a useful tool for anyone working 
                with ABI encoded data in the context of smart contracts.
            </Typography>
            <Typography level="body-md">
               Here are some examples of how the decodeAbiParameters function can be used:
               <ul>
                <li>Decoding a simple struct:</li>
                <pre>{`const values = decodeAbiParameters(
                    [
                        { name: 'x', type: 'uint32' },
                        { name: 'y', type: 'bool' },
                        { name: 'z', type: 'string' }
                    ],
                    '0x0000000000000000000000000000000000000000000000000000000000010f2c')`}</pre>
                 <li>Decoding a human-readable parameter:</li>
                   <pre>{`const values = decodeAbiParameters(
                        parseAbiParameters('string x, uint y, bool z'),
                        '0x000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000`}</pre>
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
                <FunctionContainer title="web3.decodeAbiParameters" description="">
                    {/* <FormatEhter /> */}
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
