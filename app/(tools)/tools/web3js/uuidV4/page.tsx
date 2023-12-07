import FunctionContainer from '@/components/FunctionContainer'
import UuidV4 from '@/components/web3js/utils/UuidV4'
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
            <Typography level="h1">Uuidv4</Typography>
            <Typography level="h2">The UuidV4 function.</Typography>
            <Typography level="body-md">The <strong>uuidV4</strong> function is a utility method provided by the <strong>web3.utils</strong> module that 
                generates a version 4 UUID (Universally Unique Identifier) using the random number generator.</Typography>

            <Typography level="body-md">
               The function does not take any arguments and returns a string that represents a version 4 UUID. 
               The UUID is generated using the <strong>uuid</strong> library, specifically the <strong>v4</strong> variant, which uses a random 
               number generator to create a unique identifier.
            </Typography>
            <Typography level="body-md">
               The resulting UUID is a string of the form <strong>xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx,</strong> where each <strong>x</strong> represents a hexadecimal digit. The UUID is guaranteed to be unique and can be used to identify a specific entity or object.
            </Typography>
            <Typography level="body-md">
              Here's an example of how the uuidV4 function can be used:

                    <pre>const web3 = require('web3');</pre>
                    <pre>console.log(web3.utils.uuidV4()); // Output: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed"</pre>
            </Typography>
            <Typography level="body-md">
               In this example, the <strong>uuidV4</strong> function is called and returns a version 4 UUID as a string.
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
                <FunctionContainer title="web3.uuidV4" description="">
                    <UuidV4 />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
