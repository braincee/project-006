import FunctionContainer from '@/components/FunctionContainer'
import SoliditySha3 from '@/components/web3js/utils/SoliditySha3'
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
            <Typography level="h1">SoliditySha3</Typography>
            <Typography level="h2">The SoliditySha3 function.</Typography>
            <Typography level="body-md">
              The <strong>soliditySha3</strong> function is a utility method provided by the <strong>web3.utils</strong> module that takes 
              an array of <strong>Sha3Input</strong> objects and returns a string representing the Keccak-256 hash of the 
              tightly packed values. The function is designed to work in a way that is similar to how Solidity,
               a popular smart contract programming language, would pack and hash data.
            </Typography>
            <Typography level="body-md">
              The function takes a variable number of <strong>Sha3Input</strong> objects as arguments, which are used to 
              specify the input data to be hashed. Each <strong>Sha3Input</strong> object should have a <strong>type</strong> property that 
              specifies the type of data being input (e.g. "string", "number", etc.), and a <strong>value</strong> property
               that specifies the actual input data.
            </Typography>
            <Typography level="body-md">
               The <strong>soliditySha3</strong> function returns a string representing the Keccak-256 hash of the tightly 
               packed values, or <strong>undefined</strong> if the input array is empty.
            </Typography>
            <Typography level="body-md">
               Here's an example of how the soliditySha3 function can be used:

                    <pre>{`const input = { type: "string", value: "31323334" };`}</pre>
                    <pre>console.log(web3.utils.soliditySha3(input)); // Output: 0xf15f8da2ad27e486d632dc37d24912f634398918d6f9913a0a0ff84e388be62b</pre>
            </Typography>
            <Typography level="body-md">
               In this example, the <strong>soliditySha3</strong> function is called with a single <strong>Sha3Input</strong> object that 
               specifies a string input value. The function returns a string representing the Keccak-256 
               hash of the tightly packed input value.
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
                <FunctionContainer title="web3.soliditySha3" description="">
                    <SoliditySha3 />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
