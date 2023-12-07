import FunctionContainer from '@/components/FunctionContainer'
import GetAddress from '@/components/viem/utils/Addresses/GetAddress'
import ToHex from '@/components/viem/utils/Encoding/ToHex'

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
      <Typography level='h1'>ToRlp</Typography>
      <Typography level='h2'>The ToRlp function.</Typography>

      <Typography level='body-md'>
        <strong>toRlp</strong> is a function that takes a hex value or byte
        array as input and returns a Recursive-Length Prefix (RLP) encoded
        value. RLP is a method of encoding binary data in a compact format,
        where the length of the data is encoded recursively.
      </Typography>

      <Typography level='body-md'>
        The function accepts two parameters: <strong>value</strong> and{' '}
        <strong>to</strong>. The <strong>value</strong> parameter can be either
        a hex string or a byte array, and represents the data to be encoded. The{' '}
        <strong>to</strong> parameter is an optional string that specifies the
        output format. If <strong>to</strong> is not provided, the default
        output format is a hex string.
      </Typography>

      <Typography level='body-md'>
        If <strong>to</strong> is set to <strong>"bytes"</strong>, the function
        returns a byte array representing the RLP-encoded data. Otherwise, it
        returns a hex string representing the RLP-encoded data.
      </Typography>

      <Typography level='body-md'>
        Here are some examples of using <strong>toRlp</strong>:
        <ul>
          <li>
            <strong>toRlp('0x123456789')</strong> - Encodes a hex string into an
            RLP-encoded hex string.
          </li>
          <li>
            <strong>toRlp(['0x7f', '0x7f', '0x8081e8'])</strong> - Encodes a
            list of hex strings into an RLP-encoded hex string.
          </li>
          <li>
            <strong>toRlp(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9]))</strong>{' '}
            - Encodes a byte array into an RLP-encoded hex string.
          </li>
          <li>
            <strong>toRlp('0x123456789', 'bytes')</strong> - Encodes a hex
            string into an RLP-encoded byte array.
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
        <FunctionContainer title='web3.toHex' description=''>
          <ToHex />
        </FunctionContainer>
      </Stack>
    </Stack>
  )
}
