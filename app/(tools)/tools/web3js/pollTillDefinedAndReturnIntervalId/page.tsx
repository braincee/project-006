import FunctionContainer from '@/components/FunctionContainer'
import PollTillDefinedAndReturnIntervalId from '@/components/web3js/utils/PollTillDefinedAndReturnIntervalId'
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
            <Typography level="h1">PollTilldefinedAndReturnIntervalId</Typography>
            <Typography level="h2">The PollTillDefinedAndReturnIntervalId function.</Typography>
            <Typography level="body-md">
            The <strong>pollTillDefinedAndReturnIntervalId</strong> function is a utility method provided by the <strong>web3.utils</strong> 
            module that repeatedly calls an asynchronous function with a given interval until the result of 
            the function is defined (not undefined or null), or until a timeout is reached. It returns a 
            tuple of two values: a <strong>{`Promise<Exclude<T, undefined>>`}</strong> that resolves to the result of the func 
                function once it is defined, and a Timer object that represents the interval timer.
            </Typography>
            <Typography level="body-md">
              The function takes two parameters: <strong>func and interval.</strong> The <strong>func</strong> parameter is an asynchronous 
              function of type <strong>{`AsyncFunction<T, unknown>.`}</strong> This function will be called repeatedly until the 
              result is defined.
            </Typography>
            <Typography level="body-md">
            The <strong>interval</strong> parameter is a number that represents the interval in milliseconds between each call 
            to the <strong>func</strong> function.
            </Typography>
            <Typography level="body-md">
              The <strong>pollTillDefinedAndReturnIntervalId</strong> function returns a tuple of two values:
              <ul>
                <li>A <strong>{`Promise<Exclude<T, undefined>>`}</strong> that resolves to the result of the <strong>func</strong> function once it 
                    is defined. If the <strong>func</strong> function returns undefined or null, the <strong>pollTillDefinedAndReturnIntervalId</strong> 
                    function will continue to call the func function until the result is defined or a timeout is reached.</li>
                    <li>A <strong>Timer</strong> object that represents the interval timer. This can be used to stop the polling using the clearInterval method</li>
              </ul>
            </Typography>
            <Typography level="body-md">
              Here's an example of how the pollTillDefinedAndReturnIntervalId function can be used:

                    <pre>{`const [resultPromise, intervalId] = web3.utils.pollTillDefinedAndReturnIntervalId(async () => {
                    // Perform some asynchronous operation
                    return someAsyncOperation();
                    }, 1000);`}</pre>

                    <pre>console.log(resultPromise); // Output: {`<promise resolved to defined result>`}</pre>
                    <pre>console.log(intervalId); // Output: {`<intervalId>`}</pre>
                    <pre>// Stop polling</pre>
                    <pre>clearInterval(intervalId);</pre>
            </Typography>
            <Typography level="body-md">
              In this example, the <strong>pollTillDefinedAndReturnIntervalId</strong> function is called with an asynchronous 
              function that performs some asynchronous operation and returns the result. The <strong>interval</strong> 
              parameter is set to 1000, which means that the function will be called every 1000 milliseconds 
              until the result is defined. Once the result is defined, the <strong>pollTillDefinedAndReturnIntervalId</strong>
               function resolves the <strong>resultPromise</strong> to the result and returns the <strong>intervalId.</strong> The <strong>intervalId</strong>
                can be used to stop the polling using the <strong>clearInterval</strong> method.
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
                <FunctionContainer title="web3.pollTillDefinedAndReturnIntervalId" description="">
                    <PollTillDefinedAndReturnIntervalId />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
