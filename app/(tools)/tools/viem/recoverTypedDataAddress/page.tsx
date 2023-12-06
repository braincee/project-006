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
            <Typography level="h1">RecoveryTypedDataAddress</Typography>
            <Typography level="h2">The RecoveryTypedDataAddress function.</Typography>
            <Typography level="body-md">
               The <strong>recoverTypedDataAddress</strong> function is used to recover the original signing address from 
               EIP-712 typed data and signature. It is useful for obtaining the address of a message that 
               was signed with <strong>signTypedData.</strong> The function takes the following parameters:
               
               <ul>
                <li><strong>domain:</strong> The typed data domain.</li>
                <li><strong>types:</strong> The type definitions for the typed data.</li>
                <li><strong>primaryType:</strong> The primary type to extract from types and use in the value.</li>
                <li> <strong>message:</strong> The message object containing the from and to addresses, as well as the contents.</li>
                <li><strong>signature:</strong> The signature of the typed data.</li>
               </ul>
            </Typography>
            <Typography level="body-md">
               The function returns the signing address, which can be used to verify the authenticity of the signed message.
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
