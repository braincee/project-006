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
            <Typography level="h1">ParseAbiParameters</Typography>
            <Typography level="h2">The ParseAbiParameters function.</Typography>
             <Typography level="body-md">
             The <strong>parseAbiParameters</strong> function is a utility function in the <strong>viem</strong> library that takes a human-readable ABI 
             parameter list and parses it into an array of <strong>AbiParameter</strong> objects. The function is re-exported 
             from the <strong>ABIType</strong> module.
             </Typography>
             <Typography level="body-md">
                Here's an example usage of the function:

                {`import { parseAbiParameters } from 'viem';

                    const abiParameters = parseAbiParameters(
                    'address from, address to, uint256 amount',
                    );
                    //    ^? const abiParameters: [{ type: "address"; name: "from"; }, { type: "address";...`}

             </Typography>
             <Typography level="body-md">
                In this example, <strong>the parseAbiParameters</strong> function takes a string that represents a human-readable 
                ABI parameter list, and parses it into an array of <strong>AbiParameter</strong> objects. The resulting 
                <strong>abiParameters</strong> array has the following elements:

                <pre>{`<ul>
                    <li>{ type: "address", name: "from" }</li>
                    <li>{ type: "address", name: "to" }</li>
                    <li>{ type: "uint256", name: "amount" }</li>
                </ul>`}</pre>
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
                <FunctionContainer title="web3.parseAbiParameters" description="">
                    {/* <FormatEhter /> */}
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
