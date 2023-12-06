import FunctionContainer from '@/components/FunctionContainer'
import HexToNumber from '@/components/web3js/utils/HexToNumber'
import WaitWithTimeout from '@/components/web3js/utils/WaitWithTimeout'
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
            <Typography level="h1">WaitWithTimeout</Typography>
            <Typography level="h2">The WaitWithTimeout function.</Typography>
            <Typography level="body-md">
              The <strong>waitWithTimeout</strong> function is a utility method provided by the <strong>web3.utils</strong> module that 
              allows you to wait for a promise to resolve, but interrupts the wait if the promise does 
              not resolve within a given timeout.
            </Typography>
            <Typography level="body-md">
               The function takes three arguments:

               <ul>
                <li><strong>awaitable:</strong> This is the promise or function that you want to wait for. It can be a <strong>{`Promise<T>`}</strong> or an <strong>{`AsyncFunction<T, unknown>.`}</strong></li>
                <li><strong>timeout:</strong> This is the timeout in milliseconds that you want to wait for the promise to resolve.</li>
                <li><strong>error:</strong> This is an optional error object that you can provide to throw if the timeout is 
                    reached before the promise resolves. If you do not provide an error object, the function 
                    will return <strong>undefined</strong> instead.</li>
               </ul>
            </Typography>
            <Typography level="body-md">
               The function returns a <strong>{`Promise<T>`}</strong> that resolves with the value of the awaitable promise if it 
                resolves within the given timeout. If the timeout is reached before the awaitable promise 
                resolves, the function will either throw an error if one was provided or return undefined.
            </Typography>
            <Typography level="body-md">
                Here's an example of how you can use the waitWithTimeout function:

                        <pre>const web3 = require('web3');</pre>
                        <pre>const promise = web3.eth.getAccounts();</pre>

                        <pre>{`web3.utils.waitWithTimeout(promise, 10000).then((accounts) => {
                        console.log(accounts);
                        }).catch((error) => {
                        console.error(error);
                        }); `}</pre>
            </Typography>
            <Typography level="body-md">
               In this example, the <strong>waitWithTimeout</strong> function is called with a promise that resolves after 10 
               seconds, and a timeout of 10,000 milliseconds (10 seconds). If the promise resolves within 
               the 10-second timeout, the function will return the resolved value of the promise. If the 
               timeout is reached before the promise resolves, the function will throw an error.
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
                <FunctionContainer title="web3.waitWithTimeout" description="">
                    <WaitWithTimeout />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
