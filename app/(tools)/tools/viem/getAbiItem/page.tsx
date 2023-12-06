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
            <Typography level="h1">GetAbiItem</Typography>
            <Typography level="h2">The GetAbiItem function.</Typography>
            <Typography level="body-md">
               The <strong>getAbiItem</strong> function retrieves an ABI item from a given ABI. The function takes in an 
               object with the following properties:

               <ul>
                <li><strong>abi:</strong> An array of ABI items.</li>
                <li><strong>name:</strong> The name of the ABI item to extract.</li>
                <li><strong>args (optional):</strong> Optional arguments to identify function overrides.</li>
               </ul>
            </Typography>
            <Typography level="body-md">
                The function returns the ABI item that matches the given name and, if provided, arguments.
                Here's an example usage of the function:

                                <pre>{`const abi = [
                {
                    name: 'x',
                    type: 'function',
                    inputs: [{ type: 'uint256' }],
                    outputs: [],
                    stateMutability: 'payable'
                },
                {
                    name: 'y',
                    type: 'event',
                    inputs: [{ type: 'address' }],
                    outputs: [{ type: 'uint256' }],
                    stateMutability: 'view'
                },
                {
                    name: 'z',
                    type: 'function',
                    inputs: [{ type: 'string' }],
                    outputs: [{ type: 'uint256' }],
                    stateMutability: 'view'
                }
                ];

                const encodedData = getAbiItem({
                abi,
                name: 'y',
                });

                // encodedData is {
                //   name: 'y',
                //   type: 'event',
                //   inputs: [{ type: 'address' }],
                //   outputs: [{ type: 'uint256' }],
                //   stateMutability: 'view'
                // }
            `}</pre>
            </Typography>
            <Typography level="body-md">
                In this example, the <strong>getAbiItem</strong> function is called with an object that contains the ABI 
                array and the name of the ABI item to extract. The function returns the ABI item that 
                matches the given name, which in this case is the y event.
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
                <FunctionContainer title="web3.getAbiItem" description="">
                    {/* <FormatEhter /> */}
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
