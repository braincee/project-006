import FunctionContainer from '@/components/FunctionContainer'
import ToBytes from '@/components/viem/utils/Encoding/ToBytes'

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
      <Typography level='h1'>ToBytes</Typography>
      <Typography level='h2'>The ToBytes function.</Typography>

      <Typography level='body-md'>
        <strong>toBytes</strong> is a versatile function that encodes various
        data types into a byte array represented as a Uint8Array. It accepts
        four types of input:
      </Typography>

      <Typography level='body-md'>
        <ol>
          <li>
            String: Encodes a string into a byte array using the UTF-8 encoding
            scheme.
          </li>
          <li>
            Hex: Parses a hexadecimal string and returns the corresponding byte
            array.
          </li>
          <li>
            Number: Converts a number into a byte array, where each byte
            represents a single byte of the number in little-endian order.
          </li>
          <li>
            Boolean: Encodes a boolean value into a single byte, where 0
            represents false and 1 represents true.
          </li>
        </ol>
      </Typography>

      <Typography level='body-md'>
        The function returns a Uint8Array, which can be used to represent the
        encoded data in a variety of contexts, such as storing or transmitting
        it. Additionally, an optional <strong>size</strong> parameter can be
        passed to specify the desired length of the returned Uint8Array, padding
        the result with zeros if necessary.
      </Typography>

      <Typography level='body-md'>
        Here are some examples of using toBytes:
        <ul>
          <li>
            <strong>toBytes('Hello world')</strong>: Returns a Uint8Array
            representing the UTF-8 encoded string.
          </li>
          <li>
            <strong>toBytes('0x48656c6c6f20576f726c6421')</strong>: Parses a
            hexadecimal string and returns the corresponding byte array.
          </li>
          <li>
            <strong>toBytes(420)</strong>: Converts the number 420 into a byte
            array.
          </li>
          <li>
            <strong>toBytes(true)</strong>: Encodes a boolean value into a
            single byte, representing true.
          </li>
        </ul>
      </Typography>

      <Typography level='body-md'>
        <pre>javascript</pre>
        <pre>import &#123; toBytes &#125; from 'viem';</pre>
        <pre>
          console.log(toBytes('Hello world')); // Uint8Array([72, 101, 108, 108,
          111, 32, 87, 111, 114, 108, 100, 33])
        </pre>
        <pre>
          console.log(toBytes('0x48656c6c6f20576f726c6421')); // Uint8Array([72,
          101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33])
        </pre>
        <pre>console.log(toBytes(420)); // Uint8Array([1, 164])</pre>
        <pre>console.log(toBytes(true)); // Uint8Array(1)</pre>
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
        <FunctionContainer title='web3.toBytes' description=''>
          <ToBytes />
        </FunctionContainer>
      </Stack>
    </Stack>
  )
}
