import FunctionContainer from '@/components/FunctionContainer'
import LabelHash from '@/components/viem/ens/LabelHash'

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
            <Typography level="h1">LabelHash</Typography>
            <Typography level="h2">The LabelHash function.</Typography>
            <Typography level="body-md">
               The <strong>labelhash</strong> function takes a ENS label as input and generates a hashed version of that
                label. The hashed label can be used for various purposes, such as storing the label in a
                database or comparing it with other labels.
            </Typography>
            <Typography level="body-md">
            The function takes a single parameter, <strong>name,</strong> which is the ENS label to be hashed. The function 
            returns the hashed label as a string
            </Typography>
            <Typography level="body-md">
                It's important to note that ENS labels can have certain forbidden characters and validation 
                rules, so it's recommended to normalize ENS labels with UTS-46 normalization before passing 
                them to <strong>labelhash.</strong> The built-in <strong>normalize</strong> function can be used for this.
            </Typography>
            <Typography level="body-md">
              The <strong>labelhash</strong> function is useful for a variety of use cases, such as:
              <ul>
                <li>Storing ENS labels in a database: By hashing the labels, you can store them in a compact 
                    and efficient manner, while still being able to compare them with other labels.</li>
                    <li>Comparing ENS labels: The hashed labels can be compared with other hashed labels to 
                        determine if they are the same or not.</li>
                <li>Generating ENS labels: The hashed labels can be used as a starting point for generating 
                    new ENS labels, by appending or prepending characters to the hashed label.</li>
              </ul>
            </Typography>
            <Typography level="body-md">
              Overall, the <strong>labelhash</strong> function is a useful tool for working with ENS labels in a secure and efficient manner.
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
                <FunctionContainer title="web3.labelHash" description="">
                    <LabelHash />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
