import FunctionContainer from '@/components/FunctionContainer'
import GetAddress from '@/components/viem/utils/Addresses/GetAddress'
import IsAddress from '@/components/viem/utils/Addresses/IsAddress'

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
      <Typography level='h1'>IsAddress</Typography>
      <Typography level='h2'>The IsAddress function.</Typography>

      <Typography level='body-md'>
        The <strong>isAddress</strong> function takes an Ethereum address as
        input and returns a boolean value indicating whether the address is
        valid or not. The function performs a series of checks to ensure that
        the address meets the standard format and criteria for a valid Ethereum
        address.
      </Typography>

      <Typography level='body-md'>
        The function takes a single parameter:
        <ul>
          <li>
            <strong>address:</strong> a string representing the Ethereum address
            to be checked.
          </li>
        </ul>
      </Typography>

      <Typography level='body-md'>
        The function returns a boolean value:
        <ul>
          <li>
            <strong>true</strong> if the address is valid, meaning it meets the
            standard format and criteria for a valid Ethereum address.
          </li>
          <li>
            <strong>false</strong> if the address is invalid, meaning it does
            not meet the standard format or criteria for a valid Ethereum
            address.
          </li>
        </ul>
      </Typography>

      <Typography level='body-md'>
        Here's an example of how to use the isAddress function:
        <pre>import &#123; isAddress &#125; from 'viem'</pre>
        <pre>const address = '0xa5cc3c03994db5b0d9a5eEdD10Cabab0813678ac'</pre>
        <pre>console.log(isAddress(address)) // true</pre>
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
        <FunctionContainer title='web3.isAddress' description=''>
          <IsAddress />
        </FunctionContainer>
      </Stack>
    </Stack>
  )
}
