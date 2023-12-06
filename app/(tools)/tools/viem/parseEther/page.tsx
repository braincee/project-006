import FunctionContainer from '@/components/FunctionContainer'
import ParseEther from '@/components/viem/utils/Units/ParseEther'

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
            <Typography level="h1">ParseEther</Typography>
            <Typography level="h2">The ParseEther function.</Typography>
            <Typography level="body-md">
                The <strong>parseEther</strong> function is used to convert a string representation of ether to a numerical value in wei.
                It is available in the <strong>viem</strong> library, which is part of the Ethereum ecosystem. To use the <strong>parseEther</strong>
                function, you need to import it from 
                the library and then call it with the desired string value. Here's an example of how to use the function:
            </Typography>
            <Typography level="body-md">
               Import the parseEther function from the viem library:

               <pre>{`javascript
               import { parseEther } from 'viem';`}</pre>
            </Typography>
            <Typography level="body-md">
               Call the parseEther function with the string representation of ether:

               <pre>{`javascript
                const etherValue = parseEther('420');`}</pre>
            </Typography>
            <Typography level="body-md">
              The function returns a BigNumber value representing the numerical representation of the ether value:

              <pre>javascript
              // 420000000000000000000n</pre>
            </Typography>
            <Typography level="body-md">
                In summary, the <strong>parseEther</strong> function is a convenient way to convert string representations of ether to 
                numerical values in wei, which can be useful for various Ethereum-related applications.
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
                <FunctionContainer title="web3.parseEther" description="">
                    <ParseEther />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
