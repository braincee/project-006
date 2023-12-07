import FunctionContainer from '@/components/FunctionContainer'
import Normalize from '@/components/viem/ens/Normalize'

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
            <Typography level="h1">Normalize</Typography>
            <Typography level="h2">The Normalize function.</Typography>
            <Typography level="body-md">
              The <strong>normalize</strong> function takes a ENS name as input and normalizes it to conform to the UTS-51 
              and ENSIP-15 standards. The function internally uses the <strong>@adraffy/ens-normalize</strong> library to
               perform the normalization.
            </Typography>
            <Typography level="body-md">
              The function takes a single parameter, <strong>name,</strong> which is the ENS name to be normalized. 
              The function returns the normalized ENS label as a string.
            </Typography>
            <Typography level="body-md">
                The <strong>normalize</strong> function is useful for ensuring that ENS names are in a consistent 
                format and can be easily compared and matched. It can be used in a variety of contexts, such as:

                <ul>
                    <li>Preparing ENS names for use in smart contracts: By normalizing ENS names,
                         you can ensure that they are in a format that can be easily processed and 
                         compared by smart contracts.
                    </li>
                    <li>Comparing ENS names: The normalized ENS names can be compared with other 
                        normalized ENS names to determine if they are the same or not.
                    </li>
                    <li>Generating ENS names: The normalized ENS names can be used as a starting point 
                        for generating new ENS names, by appending or prepending characters to the normalized name.
                    </li>
                </ul>
            </Typography>
            <Typography level="body-md">
              Overall, the <strong>normalize</strong> function is a useful tool for working with ENS names in a consistent 
              and standardized manner.
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
                <FunctionContainer title="web3.normalize" description="">
                    <Normalize />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
