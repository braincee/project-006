import FunctionContainer from '@/components/FunctionContainer'
import ParseUnits from '@/components/viem/utils/Units/ParseUnits'

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
            <Typography level="h1">ParseUnits</Typography>
            <Typography level="h2">The ParseUnits function.</Typography>
            <Typography level="body-md">
                The <strong>parseUnits</strong> function is used to multiply a string representation of a number by a given exponent of 
                base 10 (10^exponent). It is imported from the 'viem' library, which is a TypeScript Ethereum library. 
                The function takes two arguments: <strong>value,</strong> a string 
                representing the number to multiply, and <strong>exponent,</strong> a number representing the exponent of base 10 to apply.
            </Typography>
            <Typography level="body-md">
               Here's an example of how to use the parseUnits function:

               <pre>{`typescript
                import { parseUnits } from 'viem';

                parseUnits('420', 9); // 42000000000n`}</pre>
            </Typography>
            <Typography level="body-md">
               In this example, the function multiplies the string '420' by the exponent 9,
                resulting in the BigInt value 420,000,000,000n.
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
                <FunctionContainer title="web3.parseUnits" description="">
                    <ParseUnits />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
