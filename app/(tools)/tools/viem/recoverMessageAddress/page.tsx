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
            <Typography level="h1">RecoveryMessageAddress</Typography>
            <Typography level="h2">The RecoveryMessageAddress function.</Typography>
            <Typography level="body-md">
                The <strong>recoverMessageAddress</strong> function is used to recover the original signing address from a message and signature. 
                This function is particularly useful for obtaining the address of a message that was signed with <strong>signMessage.</strong>
            </Typography>
            <Typography level="body-md">
              The function takes two main parameters:

              <ul>
                <li><strong>message:</strong> The message that was signed, which can be a string or a hexadecimal/binary representation of the message.</li>
                <li><strong>signature:</strong> The signature of the message, which can be a hexadecimal or binary representation of the signature.</li>
              </ul>
            </Typography>
            <Typography level="body-md">
               The function returns the signing address associated with the given message and signature.
               Here's a better description of the function:
               <strong>recoverMessageAddress</strong> is a function that retrieves the original signing 
               address from a message and its corresponding signature. This function is designed to work 
               with signed messages, allowing you to verify the authenticity of the message and its origin.
            </Typography>
            <Typography level="body-md">
                The function takes two main inputs:
                <ul>
                    <li><strong>message:</strong> The message that was signed, which can be a string or a hexadecimal/binary
                         representation of the message.
                    </li>
                    <li><strong>signature:</strong> The signature of the message, which can be a hexadecimal or binary 
                        representation of the signature.</li>
                </ul>
            </Typography>
            <Typography level="body-md">
               Upon successful execution, the function returns the signing address associated with the 
               given message and signature. This can be useful for various applications, such as verifying 
               the authenticity of signed messages or recovering the origin of a message in a secure 
               communication system.
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
