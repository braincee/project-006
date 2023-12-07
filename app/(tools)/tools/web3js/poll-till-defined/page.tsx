import FunctionContainer from '@/components/FunctionContainer'
import PollTillDefined from '@/components/web3js/utils/PollTillDefined'
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
            <Typography level="h1">PollTillDefined</Typography>
            <Typography level="h2">The PollTillDefined function.</Typography>
            <Typography level="body-md">
                  The <strong>pollTillDefined</strong> function is a utility method provided by the <strong>web3.utils</strong> module that 
                  repeatedly calls an asynchronous function with a given interval until the result of the 
                  function is defined (not undefined or null), or until a timeout is reached. The function 
                  takes two parameters: <strong>func and interval.</strong>
            </Typography>
            <Typography level="body-md">
            The <strong>func</strong> parameter is an asynchronous function of type <strong>{`AsyncFunction<T, unknown>.`}</strong> 
                This function will be called repeatedly until the result is defined.
            </Typography>
            <Typography level="body-md">
                 The <strong>interval</strong> parameter is a number that represents the interval in milliseconds between 
                 each call to the <strong>func</strong> function.
            </Typography>
            <Typography level="body-md">
              The <strong>pollTillDefined</strong> function returns a <strong>{`Promise<Exclude<T, undefined>>`}</strong> that resolves to the
                 result of the <strong>func</strong> function once it is defined. If the <strong>func</strong> function returns undefined
                  or null, the <strong>pollTillDefined</strong> function will continue to call the <strong>func</strong> function until 
                  the result is defined or a timeout is reached.
            </Typography>
            <Typography level="body-md">
              It's important to note that the <strong>pollTillDefined</strong> function will be deprecated in the next major 
              release, and the <strong>pollTillDefinedAndReturnIntervalId</strong> function should be used instead. 
              The <strong>pollTillDefinedAndReturnIntervalId</strong> function provides the same functionality as 
              <strong>pollTillDefined,</strong> but it also returns the interval ID, which can be used to stop the polling.
            </Typography>
            <Typography level="body-md">
              Here's an example of how the pollTillDefined function can be used:

                    <pre>{`const result = await web3.utils.pollTillDefined(async () => {
                    // Perform some asynchronous operation
                    return someAsyncOperation();
                    }, 1000);`}</pre>

             <pre>{`console.log(result); // Output: <defined result>`}</pre>
            </Typography>
            <Typography level="body-md">
                In this example, the <strong>pollTillDefined</strong> function is called with an asynchronous function that 
                performs some asynchronous operation and returns the result. The <strong>interval</strong> parameter is set to 
                1000, which means that the function will be called every 1000 milliseconds until the result is 
                defined. Once the result is defined, the <strong>pollTillDefined</strong> function resolves to the result.
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
                <FunctionContainer title="web3.pollTillDefined" description="">
                    <PollTillDefined />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
