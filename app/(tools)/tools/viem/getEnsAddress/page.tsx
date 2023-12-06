import FunctionContainer from '@/components/FunctionContainer'
import GetEnsAddress from '@/components/viem/ens/GetEnsAddress'

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
            <Typography level="h1">getEnsAddress</Typography>
            <Typography level="h2">The getEnsAddress function.</Typography>
            <Typography level="body-md">
              The <strong>formatEther</strong> function takes a numerical value represented in wei (
                a subunit of the Ethereum cryptocurrency) and converts it into a human-readable string 
                representation of ether (the main unit of Ethereum). The function returns a string that 
                includes the ether symbol (ETH) followed by the formatted value, with the number of decimal
                 places adjusted to match the standard ether denominations (e.g., 1 ETH = 10^18 wei).
            </Typography>
            <Typography level="body-md">
              For example, passing the value <strong>10000000000000000000n</strong> (which represents 1 ETH) to the function 
              would result in the string output <strong>'1 ETH'.</strong>
            </Typography>
            <Typography level="body-md">
               The function is useful for displaying ether values in a user-friendly format, especially when 
               working with large numbers or when presenting data to users who may not be familiar with the 
               wei denomination. It can be used in a variety of contexts, such as in Ethereum wallet 
               interfaces, blockchain explorers, or financial applications that involve ether transactions.
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
                <FunctionContainer title="web3.getEnsAddress" description="">
                    <GetEnsAddress />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
