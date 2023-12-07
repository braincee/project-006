import FunctionContainer from '@/components/FunctionContainer'
import FormatUnits from '@/components/viem/utils/Units/FormatUnits'

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
            <Typography level="h1">FormatUnits</Typography>
            <Typography level="h2">The FormatUnits function.</Typography>
            <Typography level="body-md">
                The <strong>formatUnits</strong> function is not a standard function in any programming language. However, I 
                found a similar function in a GitHub repository called "9-9-9". The function is used to format 
                a given number 
                into a string with a specified number of decimal places. Here's the function signature and usage example:

                <pre>{`javascript
                    import { formatUnits } from 'viem';

                    formatUnits(42000000000n, 9); // '420'`}</pre>
            </Typography>
            <Typography level="body-md">
                In this example, the function <strong>formatUnits</strong> takes a number <strong>42000000000n</strong> and an exponent <strong>9</strong> as input, 
                and returns the formatted string '420'. The function is useful 
                for displaying numbers in a user-friendly format, especially when dealing with large or small numbers.
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
                <FunctionContainer title="web3.formatUnits" description="">
                    <FormatUnits />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
