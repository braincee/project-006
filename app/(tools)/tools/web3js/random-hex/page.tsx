import FunctionContainer from '@/components/FunctionContainer'
import RandomHex from '@/components/web3js/utils/RandomHex'
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
            <Typography level="h1">RandomHex</Typography>
            <Typography level="h2">The RandomHex function.</Typography>
            <Typography level="body-md">
              The <strong>randomHex</strong> function is a utility method provided by the <strong>web3.utils</strong> module that generates a 
              random hexadecimal string of a specified size. The function returns a string containing 
              random hexadecimal characters, which can be used for various purposes such as generating
               random keys, hashes, or other types of identifiers.
            </Typography>
            <Typography level="body-md">
             The function takes a single parameter, <strong>byteSize,</strong> which specifies the size of the random hex 
             string to be generated. The <strong>byteSize</strong> parameter must be a positive integer.
            </Typography>
            <Typography level="body-md">
             The <strong>randomHex</strong> function returns a string containing <strong>byteSize</strong> random hexadecimal characters. 
             The characters are generated using a cryptographically secure pseudorandom number generator,
              which ensures that the generated string is truly random and unpredictable
            </Typography>
            <Typography level="body-md">
                 Here's an example of how the <strong>randomHex</strong> function can be used:
                    <pre>console.log(web3.utils.randomHex(32));</pre>
            </Typography>
            <Typography level="body-md">
               In this example, the <strong>randomHex</strong> function is called with a size of 32, and it returns a string containing 32 random hexadecimal characters. The resulting string is logged to the console, showing the random hex string that was generated.
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
                <FunctionContainer title="web3.randomHex" description="">
                    <RandomHex />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
