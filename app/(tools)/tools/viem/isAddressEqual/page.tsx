import FunctionContainer from '@/components/FunctionContainer'
import IsAddressEqual from '@/components/viem/utils/Addresses/IsAddressEqual'

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
      <Typography level='h1'>IsAddressEqual</Typography>
      <Typography level='h2'>The IsAddressEqual function.</Typography>

      <Typography level='body-md'>
        The <strong>isAddressEqual</strong> function compares two checksummed
        Ethereum addresses and returns a boolean value indicating whether they
        are equal. The function performs a byte-by-byte comparison of the two
        addresses, ignoring case differences and checking for exact matching of
        the address bytes. This means that the function will return{' '}
        <strong>true</strong> only if the two addresses have the same bytes in
        the same order, regardless of whether they are in the same case.
      </Typography>

      <Typography level='body-md'>
        The function takes two parameters:
        <ul>
          <li>
            <strong>address1:</strong> a string representing the first
            checksummed Ethereum address.
          </li>
          <li>
            <strong>address2:</strong> a string representing the second
            checksummed Ethereum address.
          </li>
        </ul>
      </Typography>

      <Typography level='body-md'>
        The function returns a boolean value:
        <ul>
          <li>
            <strong>true</strong> if the two addresses are equal, meaning they
            have the same bytes and case.
          </li>
          <li>
            <strong>false</strong> if the two addresses are different, meaning
            they have different bytes or case.
          </li>
        </ul>
      </Typography>
      <Typography level='body-md'>
        The <strong>isAddressEqual</strong> function is useful for comparing two
        addresses and determining if they are the same, which can be important
        in various use cases such as verifying the authenticity of a transaction
        or ensuring that a contract is being called by the correct address.
      </Typography>
      <Typography level='body-md'>
        Here's an example of how to use the isAddressEqual function:
        <pre>import &#123; isAddressEqual &#125; from 'viem'</pre>
        <pre>const address1 = '0xa5cc3c03994db5b0d9a5eEdD10Cabab0813678ac'</pre>
        <pre>const address2 = '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC'</pre>
        <pre>console.log(isAddressEqual(address1, address2)) // true</pre>
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
        <FunctionContainer title='web3.isAddressEqual' description=''>
          <IsAddressEqual />
        </FunctionContainer>
      </Stack>
    </Stack>
  )
}
