import FunctionContainer from '@/components/FunctionContainer'
import GetAddress from '@/components/viem/utils/Addresses/GetAddress'

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
      <Typography level='h1'>GetAddress</Typography>
      <Typography level='h2'>The GetAddress function.</Typography>

      <Typography level='body-md'>
        The <strong>getAddress</strong> function takes an Ethereum address as
        input and returns a checksum-encoded version of the address. The
        function supports EIP-1191, which means that it can handle addresses on
        different networks (e.g., mainnet, testnet) and will return the
        checksum-encoded address in the format specified by the chain ID.
      </Typography>

      <Typography level='body-md'>
        The function takes two parameters:
        <ul>
          <li>
            <strong>address:</strong> a string representing the Ethereum address
            to be checksum-encoded.
          </li>
          <li>
            <strong>chainId</strong> (optional): a number representing the chain
            ID of the network the address is on. If this parameter is not
            provided, the function will assume that the address is on the
            mainnet (chain ID 1).
          </li>
        </ul>
      </Typography>

      <Typography level='body-md'>
        The function returns a string representing the checksum-encoded address.
      </Typography>

      <Typography level='body-md'>
        Here are some examples of how to use the <strong>getAddress</strong>
        function:
        <ul>
          <li>
            <strong>
              getAddress('0xa5cc3c03994db5b0d9a5eEdD10Cabab0813678ac')
            </strong>
            // returns
            <br />
            '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC'
          </li>
          <li>
            <strong>
              getAddress('0x27b1fdb04752bbc536007a920d24acb045561c26', 30)
            </strong>
            // returns <br /> '0x27b1FdB04752BBc536007A920D24ACB045561c26'
          </li>
        </ul>
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
        <FunctionContainer title='web3.getAddress' description=''>
          <GetAddress />
        </FunctionContainer>
      </Stack>
    </Stack>
  )
}
