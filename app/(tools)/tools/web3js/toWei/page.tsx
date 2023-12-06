import FunctionContainer from '@/components/FunctionContainer'
import ToWei from '@/components/web3js/utils/ToWei'
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
            <Typography level="h1">ToWei</Typography>
            <Typography level="h2">The ToWei function.</Typography>
            <Typography level="body-md">
              The toWei function is a utility method provided by the web3.utils module that converts a 
              number from a given unit to wei.
            </Typography>
            <Typography level="body-md">
              The function takes two arguments:
              <ul>
                <li><strong>number:</strong> The number to convert. This can be a string or a number.</li>
                <li><strong>unit:</strong> The unit of the number passed. This can be one of the following units:</li>
                <li>noether</li>
                <li>wei</li>
                <li>kwei</li>
                <li>Kwei</li>
              </ul>
            </Typography>
            <Typography level="body-md">
              The function returns a string representing the number converted to wei.
            </Typography>
            <Typography level="body-md">
                 Here's an example of how the toWei function can be used:

                    <pre>const web3 = require('web3');</pre>
                    <pre>const number = 0.001;</pre>
                    <pre>const unit = 'ether';</pre>
                    <pre>console.log(web3.utils.toWei(number, unit)); // Output: 1000000000000000</pre>
            </Typography>
            <Typography level="body-md">
               In this example, the <strong>toWei</strong> function is called with the number 0.001 and the unit <strong>ether.</strong> 
               The function returns a string representing the number converted to wei, which is 
               1000000000000000.
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
                <FunctionContainer title="web3.toWei" description="">
                    <ToWei />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
