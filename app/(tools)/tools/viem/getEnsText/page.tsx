import FunctionContainer from '@/components/FunctionContainer'
import GetEnsText from '@/components/viem/ens/GetEnsText'

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
            <Typography level="h1">GetEnsText</Typography>
            <Typography level="h2">The GetEnsText function.</Typography>
             <Typography level="body-md">
              The <strong>getEnsText</strong> function retrieves a text record associated with a given ENS name and key. 
              It does this by calling the <strong>resolve</strong> function on the ENS Universal Resolver Contract, 
              which returns the text record for the given name and key.
             </Typography>
             <Typography level="body-md">
               The function takes an ENS name and key as input, and returns the text record associated with 
               that name and key. If the name and key do not have a text record assigned, the function 
               returns null.
             </Typography>
             <Typography level="body-md">
               The function also allows for specifying a block number or block tag to perform the read against, 
               as well as an optional <strong>universalResolverAddress</strong> to specify the address of the ENS Universal 
               Resolver Contract.
             </Typography>
             <Typography level="body-md">
               The <strong>getEnsText</strong> function is useful for retrieving text records associated with ENS names and 
               keys, which can be useful in a variety of contexts, such as when building Ethereum-based 
               applications or when working with ENS names in general.
             </Typography>
             <Typography level="body-md">
               It's important to note that ENS names can have certain forbidden characters and validation 
               rules, so it's recommended to normalize ENS names with UTS-46 normalization before passing 
               them to <strong>getEnsText.</strong> The built-in <strong>normalize</strong> function can be used for this.
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
                <FunctionContainer title="web3.getEnsText" description="">
                    <GetEnsText />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
