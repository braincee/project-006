import FunctionContainer from '@/components/FunctionContainer'
import FromRlp from '@/components/viem/utils/Encoding/FromRlp'

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
      <Typography level='h1'>FromRlp</Typography>
      <Typography level='h2'>The FromRlp function.</Typography>

      <Typography level='body-md'>
        <strong>fromRlp</strong> is a function that decodes a Recursive-Length
        Prefix (RLP) value into a decoded hex value or byte array. It takes two
        parameters: <strong>value</strong>, which is the RLP value to decode,
        and <strong>to</strong>, which specifies the desired output type (either
        "bytes" or "hex").
      </Typography>

      <Typography level='body-md'>
        The function returns a hex value or byte array, depending on the
        specified output type. Here are some examples of using the{' '}
        <strong>fromRlp</strong>
        function:
        <ul>
          <li>
            <strong>fromRlp('0x850123456789', 'hex')</strong> returns the hex
            value "0x123456789".
          </li>
          <li>
            <strong>fromRlp('0xc67f7f838081e8', 'hex')</strong> returns the hex
            value "0x7f7f8081e8".
          </li>
          <li>
            <strong>fromRlp('0x89010203040506070809', 'bytes')</strong> returns
            the byte array Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9]).
          </li>
          <li>
            <strong>
              fromRlp(new Uint8Array([133, 1, 35, 69, 103, 137]), 'hex')
            </strong>{' '}
            returns the hex value "0x123456789".
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
        <FunctionContainer title='web3.fromRlp' description=''>
          <FromRlp />
        </FunctionContainer>
      </Stack>
    </Stack>
  )
}
