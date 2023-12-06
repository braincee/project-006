import FunctionContainer from '@/components/FunctionContainer'
import FormatGwei from '@/components/viem/utils/Units/FormatGwei'

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
            <Typography level="h1">FormatGwei</Typography>
            <Typography level="h2">The FormatGwei function.</Typography>
            <Typography level="body-md">
                The <strong>formatGwei</strong> function is used to convert a numerical value in wei to a string representation in gwei. 
                Wei is the smallest denomination of ether, which is 
                the cryptocurrency coin used on the Ethereum network. One ether is equal to 1,000,000,000,000,000,000 wei.
            </Typography>
            <Typography level="body-md">
                To use the <strong>formatGwei</strong> function, you need to import it from the 'viem' library and then call it with 
                the desired numerical value in wei as an argument. 
                The function will return a string representation of the value in gwei. Here's an example:

                <pre>{`javascript
                import { formatGwei } from 'viem';

                formatGwei(1000000000000000000n); // '1'`}</pre>
            </Typography>
            <Typography level="body-md">
                    In this example, the function <strong>formatGwei</strong> is called with a numerical value of 1,000,000,000,000,000 wei. 
                    The function will return the string representation of this value in gwei, which is '1'.
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
                <FunctionContainer title="web3.formatGwei" description="">
                    <FormatGwei />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
