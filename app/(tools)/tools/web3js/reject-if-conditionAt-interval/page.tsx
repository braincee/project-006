import FunctionContainer from '@/components/FunctionContainer'
import RejectIfConditionAtInterval from '@/components/web3js/utils/RejectIfConditionAtInterval'
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
            <Typography level="h1">RejectIfConditionAtInterval</Typography>
            <Typography level="h2">The RejectIfConditionAtInterval function.</Typography>
            <Typography level="body-md">
              The <strong>rejectIfConditionAtInterval</strong> function is a utility method provided by the <strong>web3.utils</strong>
              module that sets an interval that repeatedly executes a given condition function with a 
              specified interval between each call. If the condition is met, the interval is cleared and a 
              Promise that rejects with the returned value is returned.
            </Typography>
            <Typography level="body-md">
               The function takes two parameters:
                    <ul>
                        <li><strong>cond:</strong> An asynchronous function that takes an optional argument of type T and returns a value of type <strong>unknown.</strong> The function is executed repeatedly at the specified interval until the condition is met.</li>
                        <li><strong>interval:</strong> A positive number that represents the interval between each call of the cond function. The interval is measured in milliseconds.</li>
                    </ul>
            </Typography>
            <Typography level="body-md">
                <ul>
                    <li>The first element is the interval ID, which can be used to clear the interval using the <strong>clearInterval</strong> function.</li>
                    <li>The second element is a Promise that rejects with the value returned by the <strong>cond</strong> function if the condition is met. If the condition is not met, the Promise is never resolved or rejected.</li>
                </ul>
            </Typography>
            <Typography level="body-md">
              Here's an example of how the rejectIfConditionAtInterval function can be used:
                        <pre>{`const intervalId = web3.utils.rejectIfConditionAtInterval(
                        async () => {
                            // Condition to check
                            return navigator.userAgent;
                        },
                        1000
                        );`}</pre>

                        <pre>console.log(intervalId);</pre>
                        <pre>// Output: [1, {`Promise<never>`}]</pre>
                        <pre>// Clear the interval after 5 seconds</pre>
                        <pre>clearInterval(intervalId[0]);</pre>
            </Typography>
            <Typography level="body-md">
               In this example, the <strong>rejectIfConditionAtInterval</strong> function is called with a condition function 
               that checks the current user agent every second. If the user agent changes, the interval is 
               cleared and a Promise that rejects with the new user agent is returned. The <strong>console.log</strong>
               statement logs the interval ID and the Promise to the console. After 5 seconds, the interval 
               is cleared using the <strong>clearInterval</strong> function.
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
                <FunctionContainer title="web3.rejectIfConditionAtInterval" description="">
                    <RejectIfConditionAtInterval />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
