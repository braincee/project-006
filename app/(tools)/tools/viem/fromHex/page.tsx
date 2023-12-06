import FunctionContainer from '@/components/FunctionContainer'
import FromHex from '@/components/viem/utils/Encoding/FromHex'

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
      <Typography level='h1'>FromHex</Typography>
      <Typography level='h2'>The FromHex function.</Typography>

      <Typography level='body-md'>
        <strong>fromHex</strong> is a versatile function that decodes a hex
        value to various types, including strings, numbers, big integers, byte
        arrays, and booleans. It takes two parameters: <strong>hex</strong>,
        which is the hex value to decode, and <strong>toOrOptions</strong>,
        which specifies the desired output type or options.
      </Typography>

      <Typography level='body-md'>
        The <strong>toOrOptions</strong> parameter can be a string indicating
        the desired output type (e.g. "string", "number", "bigint", "boolean"),
        or an object with options for the decode operation (e.g.{' '}
        <strong>size: 32</strong> to specify the number of bytes to decode).
      </Typography>

      <Typography>
        Here are some examples of using the fromHex function:
        <ul>
          <li>
            <strong>fromHex('0x1a4', 'number')</strong> returns the number 420.
          </li>
          <li>
            <strong>
              fromHex('0xc5cf39211876fb5e5884327fa56fc0b75', 'bigint')
            </strong>{' '}
            returns the big integer 4206942069420694206942069420694206942069n.
          </li>
          <li>
            <strong>fromHex('0x48656c6c6f20776f726c642e', 'string')</strong>{' '}
            returns the string "Hello world".
          </li>
          <li>
            <strong>fromHex('0x48656c6c6f20576f726c6421', 'bytes')</strong>{' '}
            returns the byte array Uint8Array([72, 101, 108, 108, 111, 32, 87,
            111, 114, 108, 100, 33]).
          </li>
          <li>
            <strong>fromHex('0x1', 'boolean')</strong> returns the boolean value
            true.
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
        <FunctionContainer title='web3.fromHex' description=''>
          <FromHex />
        </FunctionContainer>
      </Stack>
    </Stack>
  )
}
