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
            <Typography level="h1">ParseAbi</Typography>
            <Typography level="h2">The ParseAbi function.</Typography>
            <Typography level="body-md">
            The <strong>parseAbi</strong> function is a utility function in the <strong>viem</strong> library that takes a 
            human-readable ABI (Application Binary Interface) and parses it into a JSON object. 
            The function is re-exported from the <strong>ABIType</strong> module.
            </Typography>
            <Typography level="body-md">
              Here's an example usage of the function:

                <pre>{`import { parseAbi } from 'viem';

                const abi = parseAbi([
                'function balanceOf(address owner) view returns (uint256)',
                'event Transfer(address indexed from, address indexed to, uint256 amount)',
                ]);
            `}</pre>
            </Typography>
            <Typography level="body-md">
                In this example, the <strong>parseAbi</strong> function takes an array of strings, where each string represents a single ABI signature. The function parses each signature and returns a JSON object that represents the ABI.
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
                <FunctionContainer title="web3.parseAbi" description="">
                    {/* <FormatEhter /> */}
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
