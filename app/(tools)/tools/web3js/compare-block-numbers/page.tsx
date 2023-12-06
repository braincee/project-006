import FunctionContainer from '@/components/FunctionContainer'
import CompareBlockNumbers from '@/components/web3js/utils/CompareBlockNumbers'
import { Stack, Typography,} from '@mui/joy'

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
            <Typography level="h1">CompareBlockNumber</Typography>
            <Typography level="h2">The CompareBlockNumber function.</Typography>
            <Typography level="body-md">
                The <strong>compareBlockNumbers</strong> function compares two block numbers or tags and returns an 
                integer indicating their relative order. The function takes two parameters, <strong>blockA</strong>
                and <strong>blockB,</strong> which can be either block numbers or tags. It returns -1 if <strong>blockA </strong>is less than <strong>blockB,</strong>
                1 if <strong>blockA</strong> is greater than <strong>blockB,</strong> and 0 if <strong>blockA</strong> is equal to <strong>blockB.</strong>
            </Typography>
            <Typography level="body-md">
                This function is useful for comparing the position of two blocks in the blockchain, or for determining 
                whether a given block is newer or older than another block. It can be used in a variety of contexts, 
                such as determining the order of transactions within a block, or 
                comparing the height of two blocks to determine which one is more recent.
            </Typography>
            <Typography level="body-md">
              Here are some examples of how the function can be used:
               <ul>
                 <li> <pre><strong>web3.utils.compareBlockNumbers('latest', 'pending'):</strong> This would return -1, 
                    indicating that the <strong>pending</strong> block is newer than the <strong>latest</strong> block.</pre></li>
                    <li><pre><strong>web3.utils.compareBlockNumbers(12, 11):</strong>This would return 1, indicating that block 12 is newer than block 11.</pre></li>
                    <li><pre><strong>web3.utils.compareBlockNumbers(12, 'latest'):</strong>This would return 0, indicating that block 12 is equal to the <strong>latest</strong> block</pre>.</li>
               </ul>
            </Typography>
            <Typography>
              Overall, the <strong>compareBlockNumbers</strong> function is a useful tool for comparing the position of blocks 
              in the blockchain, and can be used in a variety of contexts where it is necessary to determine
               the relative order of blocks.
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
                <FunctionContainer title="web3.compareBlockNumbers" description="">
                    <CompareBlockNumbers />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
