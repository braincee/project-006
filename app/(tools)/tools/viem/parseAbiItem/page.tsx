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
            <Typography level="h1">ParseAbiItem</Typography>
            <Typography level="h2">The ParseAbiItem function.</Typography>
            <Typography level="body-md">
                    The <strong>parseAbiItem</strong> function is a utility function in the <strong>viem</strong> library 
                that takes a human-readable ABI item (e.g. error, event, function) and parses it into an ABI item. 
                The function is re-exported from the <strong>ABIType</strong> module.
            </Typography>
            <Typography level="body-md">
              Here's an example usage of the function:

              {`import { parseAbiItem } from 'viem';

                const abiItem = parseAbiItem(
                'function balanceOf(address owner) view returns (uint256)',
                );
               `}
            </Typography>
            <Typography level="body-md">
              In this example, the <strong>parseAbiItem</strong> function takes a string that represents a human-readable ABI 
              item, and parses it into an ABI item object. The resulting <strong>abiItem</strong> object has the following 
              properties:
                <ul>
                    <li>name: "balanceOf"</li>
                    <li>type: "function"</li>
                    <li>stateMutability: "view"</li>
                    <li>inputs: An array with a single object:</li>
                    <li>name: "owner"</li>
                    <li>type: "address"</li>
                    <li>outputs: An array with a single object:</li>
                    <li>name: ""</li>
                    <li>type: "uint256"</li>
                </ul> 
            </Typography>
            <Typography level="body-md">

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
                <FunctionContainer title="web3.parseAbiItem" description="">
                    {/* <FormatEhter /> */}
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
