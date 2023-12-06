import FunctionContainer from '@/components/FunctionContainer'
import RejectIfTimeout from '@/components/web3js/utils/RejectIfTimeout'
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
            <Typography level="h1">RejectIfTimeout</Typography>
            <Typography level="h2">The RejectIfTimeout function.</Typography>
            <Typography level="body-md">
             The <strong>rejectIfTimeout</strong> function is a utility method provided by the <strong>web3.utils</strong> module that 
             enforces a <strong>timeout</strong> on a promise, so that it can be rejected if it takes too long to complete. 
             The function takes two parameters: timeout and <strong>error.</strong>
            </Typography>
            <Typography level="body-md">
               <ul>
                <li><strong>timeout:</strong> A positive number that represents the timeout to be enforced in milliseconds. The timeout starts when the <strong>rejectIfTimeout</strong> function is called and continues until the promise is resolved or rejected.</li>
                <li><strong>error:</strong> An instance of the <strong>Error</strong> class that is thrown if the timeout is reached. The error message can be customized to provide additional information about the timeout.</li>
               </ul>
            </Typography>
            <Typography level="body-md">
            The rejectIfTimeout function returns an array containing two elements:
                <ul>
                    <li>The first element is the timeout ID, which can be used to clear the timeout using the <strong>clearTimeout</strong> function.</li>
                    <li>The second element is a Promise that will be rejected with the <strong>error</strong> parameter if the timeout is reached. If the promise is resolved 
                        before the timeout is reached, the Promise is resolved with the value returned by the promise.</li>
                </ul>
            </Typography>
            <Typography level="body-md">
             Here's an example of how the rejectIfTimeout function can be used:
                    <pre>{`const [timerId, promise] = web3.utils.rejectIfTimeout(100, new Error('time out'));

                    promise.then((value) => {
                    console.log(value);
                    }).catch((error) => {
                    console.error(error);
                    });`}</pre>

                    // Clear the timeout after 5 seconds
                    <pre>clearTimeout(timerId);</pre>
            </Typography>
            <Typography level="body-md">
               In this example, the <strong>rejectIfTimeout</strong> function is called with a timeout of 100 milliseconds
                and an error message of "time out". The function returns an array containing the timeout 
                ID and a Promise that will be rejected with the error message if the timeout is reached. 
                The Promise is then resolved with the value "hello" after 5 seconds, and the timeout is 
                cleared using the clearTimeout function.
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
                <FunctionContainer title="web3.rejectIfTimeout" description="">
                    <RejectIfTimeout />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
