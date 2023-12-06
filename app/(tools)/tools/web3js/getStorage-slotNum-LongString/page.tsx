import FunctionContainer from '@/components/FunctionContainer'
import GetStorageSlotNumForLongString from '@/components/web3js/utils/GetStorageSlotNumForLongString'
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
            <Typography level="h1">getStorageSlotNumLongString</Typography>
            <Typography level="h2">The GetStorageSlotNumForLongString function.</Typography>
             <Typography level="body-md">
               The <strong>getStorageSlotNumForLongString</strong> function is a utility method provided by the <pre>web3.utils</pre> 
               module that helps you determine the slot number where a long string will be stored in a smart
               contract.
              </Typography>
              <Typography level="body-md">
                The function takes in a single parameter, <strong>mainSlotNumber,</strong> which is the slot number 
                where the hash of the long string will be stored.
              </Typography>
              <Typography level="body-md">
                 The function returns a value of type <strong>undefined | string,</strong> which means it can 
                 return either <strong>undefined</strong> or a string representing the slot number where the long string will be stored.
              </Typography>
              <Typography level="body-md">
                The purpose of this function is to help you determine the slot number where you should store a
                 long string in a contract. When you call the <strong>getStorage</strong> method, it returns a slot number 
                 where the data will be stored. However, if the data is a long string, it may not fit in a 
                 single slot, and you'll need to use a different slot for each part of the string. This 
                 function helps you determine the slot number for each part of the string.
              </Typography>
              <Typography level="body-md">
                  Here's an example of how you can use the getStorageSlotNumForLongString function:

                    <pre>const web3 = require('web3');</pre>
                    <pre>const longString = 'This is a very long string that will not fit in a single slot';</pre>
                    <pre>const mainSlotNumber = 0; // the slot number where the hash of the long string will be stored</pre>
                    <pre>const slotNumber = web3.utils.getStorageSlotNumForLongString(mainSlotNumber);</pre>
                    <pre>console.log(slotNumber); // Output: 1</pre>
              </Typography>
              <Typography level="body-md">
                 In this example, the <strong>getStorageSlotNumForLongString</strong> function is called with 
                 the main slot number <strong>0</strong> and returns the slot number <strong>1,</strong> which means that the long string will 
                 be stored in slot <strong>1.</strong>
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
                <FunctionContainer title="web3.getStorageSlotNumLongString" description="">
                    <GetStorageSlotNumForLongString />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
