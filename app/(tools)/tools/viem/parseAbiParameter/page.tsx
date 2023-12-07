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
            <Typography level="h1">ParseAbiParameter</Typography>
            <Typography level="h2">The ParseAbiParameter function.</Typography>
            <Typography level="body-md">
                The <strong>parseAbiParameter</strong> function is a utility function in the <strong>viem</strong> library that takes a human-readable ABI 
                parameter and parses it into an AbiParameter object. The function is re-exported from the <strong>ABIType</strong> module.
            </Typography>
            <Typography level="body-md">
             Here's an example usage of the function:

                <pre>{`import { parseAbiParameter } from 'viem';

                const abiParameter = parseAbiParameter('address from');
                //    ^? const abiParameter: { type: "address"; name: "from"; }

        `}</pre>
            </Typography>
            <Typography level="body-md">
            In this example, the <strong>parseAbiParameter</strong> function takes a string that represents a human-readable 
            ABI parameter, and parses it into an AbiParameter object. The resulting <strong>abiParameter</strong> object has 
            the following properties:

            <ul>
                <li>type: "address"</li>
                <li>name: "from"</li>
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
                <FunctionContainer title="web3.parseAbiParameter" description="">
                    {/* <FormatEhter /> */}
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
