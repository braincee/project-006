import FunctionContainer from '@/components/FunctionContainer'
import GetEnsAvatar from '@/components/viem/ens/GetEnsAvatar'

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
            <Typography level="h1">GetEnsAvatar</Typography>
            <Typography level="h2">The GetEnsAvatar function.</Typography>
            <Typography level="body-md">
               The <strong>getEnsAvatar</strong> function retrieves the avatar associated with a given ENS name. It does this 
               by calling the <strong>getEnsText</strong> function with the key set to <strong>'avatar'.</strong> The function takes an ENS name as input and returns the avatar URI for that name.
            </Typography>
            <Typography level="body-md">
            The function also allows for specifying a block number or block tag to perform the read against, 
            as well as an optional gatewayUrls object to resolve IPFS and/or Arweave assets. Additionally, an 
            optional universalResolverAddress can be provided to specify the address of the ENS Universal 
            Resolver Contract.
            </Typography>
            <Typography level="body-md">
              The function returns a string representing the avatar URI for the ENS name, or null if the 
              avatar cannot be resolved from the ENS name.
            </Typography>
            <Typography level="body-md">
              It's important to note that ENS names can have certain forbidden characters and validation 
              rules, so it's recommended to normalize ENS names with UTS-46 normalization before passing 
              them to <strong>getEnsAvatar.</strong> The built-in <strong>normalize</strong> function can be used for this.
            </Typography>
            <Typography level="body-md">
              Overall, <strong>getEnsAvatar</strong> is a helpful function for retrieving the avatar associated with an ENS 
              name, and can be useful in a variety of contexts, such as when building Ethereum-based 
              applications or when working with ENS names in general.
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
                <FunctionContainer title="web3.getEnsAvatar" description="">
                    <GetEnsAvatar />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
