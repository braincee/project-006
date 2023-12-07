import FunctionContainer from '@/components/FunctionContainer'
import FormatEhter from '@/components/viem/utils/Units/FormatEther'

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
            <Typography level="h1">FormatEther</Typography>
            <Typography level="h2">The FormatEther function.</Typography>
            <Typography level="body-md">
                The <strong>formatEther</strong> function is used to convert a value in wei (the smallest unit of Ether) to a more 
                human-readable string representation in ether. It is part of the <strong>viem</strong> library, which provides utility 
                functions for working with Ether and other cryptocurrencies. 
                The function takes a wei value as input and returns a formatted string representation of the value in 
                ether.
            </Typography>
            <Typography level="body-md">
                  Here's a description of the formatEther function:
                  <ul>
                    <li>Usage: Import the <strong>formatEther</strong> function from the <strong>viem</strong> library and use it to convert 
                        a wei value to a formatted string representation in ether.</li>
                        
                        {`javascript
                        import { formatEther } from 'viem';

                        formatEther(1000000000000000000n); // '1'`}
                    <li>Parameters: The function takes a single parameter, <strong>value,</strong> which is the wei value to be formatted.</li>
                    <li>Return: The function returns a formatted string representation of the input value in ether.</li>
                  </ul>
            </Typography>
            <Typography level="body-md">
                This function is useful for displaying balances or other values related to Ether in a more user-friendly 
                format. For example, when retrieving the balance of an Ethereum address using the <strong>getBalance</strong>
                function from the <strong>ethers</strong> library, you can use the <strong>formatEther</strong> function to display the balance in ether:

                        <pre>{`javascript
                            const ethers = require('ethers');
                            const provider = new ethers.providers.JsonRpcProvider('your_rpc_url');
                            const address = 'your_address';

                            const balance = await provider.getBalance(address);
                            const formattedBalance = ethers.utils.formatEther(balance);`}</pre>
                            <pre>{`console.log("The balance of address is formattedBalance ETH");`}</pre>
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
                <FunctionContainer title="web3.formatEther" description="">
                    <FormatEhter />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
