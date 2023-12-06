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
      <Typography level='h1'>ToHex</Typography>
      <Typography level='h2'>The ToHex function.</Typography>

      <Typography level='body-md'>
        <strong>toHex</strong> is a versatile function that converts various
        data types into a hexadecimal string representation. It accepts four
        types of input:
      </Typography>

      <Typography level='body-md'>
        <ol>
          <li>
            String: Encodes a string into a hexadecimal string, using the UTF-8
            encoding scheme.
          </li>
          <li>
            Number: Converts a number into a hexadecimal string, representing
            the number in little-endian order.
          </li>
          <li>
            ByteArray: Encodes a byte array into a hexadecimal string, where
            each byte is represented by its hexadecimal value.
          </li>
          <li>
            Boolean: Encodes a boolean value into a single hexadecimal digit,
            where 0 represents false and 1 represents true.
          </li>
        </ol>
      </Typography>

      <Typography level='body-md'>
        The function returns a hexadecimal string, which can be used to
        represent the encoded data in a variety of contexts, such as storing or
        transmitting it. Additionally, an optional <strong>size</strong>{' '}
        parameter can be passed to specify the desired length of the returned
        hexadecimal string, padding the result with zeros if necessary.
      </Typography>

      <Typography level='body-md'>
        Here are some examples of using toHex:
        <ul>
          <li>
            <strong>toHex(420)</strong>: Encodes the number 420 into a
            hexadecimal string.
          </li>
          <li>
            <strong>toHex('Hello world')</strong>: Encodes a string into a
            hexadecimal string using UTF-8 encoding.
          </li>
          <li>
            <strong>
              toHex(new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114,
              108, 100, 33]))
            </strong>
            : Encodes a byte array into a hexadecimal string.
          </li>
          <li>
            <strong>toHex(true)</strong>: Encodes a boolean value into a single
            hexadecimal digit.
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
