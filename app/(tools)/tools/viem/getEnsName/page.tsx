import FunctionContainer from '@/components/FunctionContainer'
import GetEnsName from '@/components/viem/ens/GetEnsName'

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
            <Typography level="h1">GetEnsName</Typography>
            <Typography level="h2">The GetEnsName function.</Typography>
            <Typography level="body-md">
              The <strong>getEnsName</strong> function retrieves the primary ENS name associated with a given address. 
              It does this by calling the <strong>reverse</strong> function on the ENS Universal Resolver Contract, which 
              "reverse resolves" the address to the primary ENS name.
            </Typography>
            <Typography level="body-md">
               The function takes an address as input and returns the primary ENS name associated with that 
               address. If the address does not have a primary name assigned, the function returns null.
            </Typography>
            <Typography level="body-md">
              The function also allows for specifying a block number or block tag to perform the read 
              against, as well as an optional <strong>universalResolverAddress</strong> to specify the 
              address of the ENS Universal Resolver Contract.
            </Typography>
            <Typography level="body-md">
              The <strong>getEnsName</strong> function is useful for retrieving the primary ENS name for a given address, 
              which can be useful in a variety of contexts, such as when building Ethereum-based applications 
              or when working with ENS names in general.
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
                <FunctionContainer title="web3.getEnsName" description="">
                    <GetEnsName />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
