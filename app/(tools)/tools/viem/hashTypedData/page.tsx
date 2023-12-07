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
            <Typography level="h1">HashTypedData</Typography>
            <Typography level="h2">The HashTypedData function.</Typography>
            <Typography level="body-md">
                The <strong>hashTypedData</strong> function takes in four parameters: <strong>domain, types, primaryType, and message.</strong> 
                It returns a hashed message in Ethereum-specific EIP-712 format.
            </Typography>
            <Typography level="body-md">
              The domain parameter is an object that contains information about the domain in which the typed 
              data is defined. It has four properties: <strong>name, version, chainId, and verifyingContract.</strong>
            </Typography>
            <Typography level="body-md">
                The <strong>types</strong> parameter is an object that defines the types of the data in the message. It contains two 
                properties: <strong>Person and Mail.</strong> The <strong>Person</strong> property is an array of objects, each with two properties: <strong>name and wallet.</strong> 
                The <strong>Mail</strong> property is also an array of objects, each with three properties: <strong>from, to, and contents.</strong>
            </Typography>
            <Typography level="body-md">
                The <strong>primaryType</strong> parameter is a string that specifies the primary type of the message. In this case, it is set to <strong>'Mail'.</strong>
                The <strong>message</strong> parameter is an object that contains the actual data of the message. It has three properties: <strong>from, to, and contents.</strong> The <strong>from and to</strong> properties are objects 
                with the same structure as the <strong>Person</strong> type defined in the <strong>types</strong> object. The <strong>contents</strong> property is a string.
            </Typography>
            <Typography level="body-md">
                The function first concatenates the domain separator <strong>(\x19\x01)</strong> with the hash of the <strong>domain</strong> object, 
                and then hashes the resulting string using Keccak-256. It then takes the resulting hash and appends 
                it to the <strong>message</strong> object, 
                along with the <strong>primaryType and types</strong> objects. Finally, it returns the hashed message in EIP-712 format.
            </Typography>
            <Typography level="body-md">
               In summary, the <strong>hashTypedData</strong> function takes in a domain, types, primary type, and message, 
               and returns a hashed message in EIP-712 format that can be used to verify the authenticity 
               of the message.
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
