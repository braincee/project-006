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
            <Typography level="h1">RecoverAddress</Typography>
            <Typography level="h2">The RecoverAddress function.</Typography>
            <Typography level="body-md">
              The <strong>recoverAddress</strong> function is a utility function in the <strong>viem</strong> library that takes a hash and a 
              signature as input and returns the original signing address
            </Typography>
            <Typography level="body-md">
              Here's an example usage of the recoverAddress function:

              <pre>{`import { recoverAddress } from 'viem';

                const hash = '0xd9eba16ed0ecae432b71fe008c98cc872bb4cc214d3220a36f365326cf807d68';
                const signature = '0x66edc32e2ab001213321ab7d959a2207fcef5190cc9abb6da5b0d2a8a9af2d4d2b0700e2c317c4106f337fd934fbbb0bf62efc8811a78603b33a8265d3b8f8cb1c';

                const address = await recoverAddress({ hash, signature });

                console.log(address); // 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266`}</pre>
            </Typography>
            <Typography level="body-md">
               In this example, we first import the <strong>recoverAddress</strong> function from the <strong>viem</strong> library. We then 
               define the hash and signature that we want to use to recover the address.
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
