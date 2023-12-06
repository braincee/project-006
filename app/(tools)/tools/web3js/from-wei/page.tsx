import FunctionContainer from '@/components/FunctionContainer'
import FromWei from '@/components/web3js/utils/FromWei'
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
            <Typography level="h1">FromWei</Typography>
            <Typography level="h2">The FromWei function.</Typography>
            <Typography level="body-md">
                The <strong>fromWei</strong> function takes a number of wei <strong>number</strong> and converts it to any other ether unit <strong>unit</strong>, as specified by the user. 
                The function is a part of the web3-utils library and is designed to be used with the Ethereum blockchain.
            </Typography>
            <Typography level="body-md">
                The function returns a string representing the converted value in the given unit. This string 
                can be used in a variety of contexts, such as in smart contracts, hash functions, and other cryptographic applications.
            </Typography>
            <Typography level="body-md">
                 Here are some examples of how the fromWei function can be used:

                    <pre>const web3 = require('web3');</pre>

                    <pre>console.log(web3.utils.fromWei("1", "ether")); // Output: 0.000000000000000001</pre>
                    <pre>console.log(web3.utils.fromWei("1", "shannon")); // Output: 0.000000001</pre>
            </Typography>
            <Typography level="body-md">
                In the first example, the function takes a value of 1 wei and converts it to ether, resulting in a value of 0.000000000000000001. In the second example, 
                the function takes a value of 1 wei and converts it to shannon, resulting in a value of 0.000000001.
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
                <FunctionContainer title="web3.fromWei" description="">
                    <FromWei />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
