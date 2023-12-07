import FunctionContainer from '@/components/FunctionContainer'
import GetEnsResolver from '@/components/viem/ens/GetEnsResolver'


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
            <Typography level="h1">GetEnsResolver</Typography>
            <Typography level="h2">The GetEnsResolver function.</Typography>
             <Typography level="body-md">
               The <strong>getEnsResolver</strong> function retrieves the resolver address associated with a given ENS name. 
               It does this by calling the <strong>findResolver</strong> function on the ENS Universal Resolver Contract, 
               which returns the resolver address for the given name.
             </Typography>
             <Typography level="body-md">
                The function takes an ENS name as input and returns the resolver address associated with that 
                name. If the name does not have a resolver assigned, the function returns null.
             </Typography>
             <Typography level="body-md">
               The function also allows for specifying a block number or block tag to perform the read 
               against, as well as an optional <strong>universalResolverAddress</strong> to specify the address of the ENS 
               Universal Resolver Contract.
             </Typography>
             <Typography level="body-md">
               The <strong>getEnsResolver</strong> function is useful for retrieving the resolver address for an ENS name, 
               which can be useful in a variety of contexts, such as when building Ethereum-based applications 
               or when working with ENS names in general.
             </Typography>
             <Typography level="body-md">
               It's important to note that ENS names can have certain forbidden characters and validation 
               rules, so it's recommended to normalize ENS names with UTS-46 normalization before passing 
               them to <strong>getEnsResolver.</strong> The built-in <strong>normalize</strong> function can be used for this.
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
                <FunctionContainer title="web3.getEnsResolver" description="">
                    <GetEnsResolver />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
