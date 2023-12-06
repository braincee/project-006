import FunctionContainer from '@/components/FunctionContainer'
import NameHash from '@/components/viem/ens/NameHash'

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
            <Typography level="h1">NameHash</Typography>
            <Typography level="h2">The NameHash function.</Typography>
            <Typography level="body-md">
              The <strong>namehash</strong> function takes a ENS name as input and generates a hashed version of that name. 
              The hashed name can be used for various purposes, such as storing the name in a database or 
              comparing it with other names.
            </Typography>
            <Typography level="body-md">
                The function takes a single parameter, <strong>name,</strong> which is the ENS name to be hashed. The function 
                returns the hashed name as a string.
            </Typography>
            <Typography level="body-md">
               It's important to note that ENS names can have certain forbidden characters and validation 
               rules, so it's recommended to normalize ENS names with UTS-46 normalization before passing 
               them to <strong>namehash.</strong> The built-in <strong>normalize</strong> function can be used for this.
            </Typography>
            <Typography level="body-md">
              The <strong>namehash</strong> function is useful for a variety of use cases, such as:

              <ul>
                <li>Storing ENS names in a database: By hashing the names, you 
                    can store them in a compact and efficient manner, while still being able 
                    to compare them with other names.
                 </li>
                 <li>Comparing ENS names: The hashed names can be compared with other hashed names to 
                    determine if they are the same or not.
                </li>
                <li>Generating ENS names: The hashed names can be used 
                    as a starting point for generating new ENS names, by appending or prepending characters to 
                    the hashed name.
                </li>
              </ul>
            </Typography>
            <Typography level="body-md">
              Overall, the <strong>namehash</strong> function is a useful tool for working with ENS names in a secure and efficient manner.
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
                <FunctionContainer title="web3.nameHash" description="">
                    <NameHash />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
