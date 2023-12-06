import FunctionContainer from '@/components/FunctionContainer'
import SoliditySha3Raw from '@/components/web3js/utils/SoliditySha3Raw'
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
            <Typography level="h1">SoliditySha3Raw</Typography>
            <Typography level="h2">The SoliditySha3Raw function.</Typography>
            <Typography level="body-md">
               The <strong>soliditySha3Raw</strong> function is a utility method provided by the <strong>web3.utils</strong> module that takes 
               an array of <strong>TypedObject</strong> or <strong>TypedObjectAbbreviated</strong> objects and returns a string representing 
               the Keccak-256 hash of the tightly packed values. The function is designed to work in a way 
               that is similar to how Solidity, a popular smart contract programming language, would pack 
               and hash data.
            </Typography>
            <Typography level="body-md">
            The function takes a variable number of <strong>TypedObject</strong> or <strong>TypedObjectAbbreviated</strong> objects as 
            arguments, which are used to specify the input data to be hashed. Each object should have a 
            <strong>type</strong> property that specifies the type of data being input (e.g. "string", "number", etc.),
             and a <strong>value</strong> property that specifies the actual input data.
            </Typography>
            <Typography level="body-md">
               The <strong>soliditySha3Raw</strong> function returns a string representing the Keccak-256 hash of the tightly 
               packed values, or a fixed string value <strong>0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470</strong> 
               if the input array is empty.
            </Typography>
            <Typography level="body-md">
                 Here's an example of how the soliditySha3Raw function can be used:

                    <pre>{`const input = { type: "string", value: "helloworld" };`}</pre>
                    <pre>console.log(web3.utils.soliditySha3Raw(input)); // Output: 0xfa26db7ca85ead399216e7c6316bc50ed24393c3122b582735e7f3b0f91b93f0</pre>
            </Typography>
            <Typography level="body-md">
               In this example, the <strong>soliditySha3Raw</strong> function is called with a single <strong>TypedObject</strong> object that 
               specifies a string input value. The function returns a string representing the Keccak-256 hash
                of the tightly packed input value.
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
                <FunctionContainer title="web3.hexTonumber" description="">
                    <SoliditySha3Raw />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
