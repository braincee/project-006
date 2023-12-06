import FunctionContainer from '@/components/FunctionContainer'
import ParseGwei from '@/components/viem/utils/Units/ParseGwei'

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
            <Typography level="h1">ParseGwei</Typography>
            <Typography level="h2">The ParseGwei function.</Typography>
            <Typography level="body-md">
                The <strong>parseGwei</strong> function is used to convert a string representation of gwei to a numerical value in wei. 
                It is imported from the 'viem' library, which is a utility library for working with Ethereum and Web3. 
                The function takes a string input, which represents the gwei value, and returns a bigint value in wei.
            </Typography>
            <Typography level="body-md">
               Here's an example of how to use the parseGwei function:

               <pre>{`javascript
                import { parseGwei } from 'viem';

                parseGwei('420'); // 420000000000n`}</pre>
            </Typography>
            <Typography level="body-md">
               In this example, the function <strong>parseGwei</strong> is imported from the 'viem' library, 
               and then it is called with the string '420' as its argument. The function returns 
               a bigint value of 420,000,000,000 wei.
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
                <FunctionContainer title="web3.parseGwei" description="">
                    <ParseGwei />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
