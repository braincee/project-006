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
      <Typography level='h1'>FromBytes</Typography>
      <Typography level='h2'>The FromBytes function.</Typography>

      <Typography level='body-md'>
        <strong>fromBytes</strong> is a versatile function that can decode a
        byte array to various types, including strings, hex values, numbers, big
        integers, and booleans. It takes two parameters: value, which is the
        byte array to decode, and <strong>toOrOptions</strong>, which specifies
        the desired output type or options.
      </Typography>

      <Typography level='body-md'>
        The <strong>toOrOptions</strong> parameter can be a string indicating
        the desired output type (e.g. "string", "hex", "number", "bigint", or
        "boolean"), or an object with options for the decode operation (e.g.
        size: 32 to specify the number of bytes to decode).
      </Typography>

      <Typography level='body-md'>
        Here are some examples of using the <strong>fromBytes</strong> function:
        <ul>
          <li>
            <strong>
              fromBytes(new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111,
              114, 108, 100, 33]), 'string')
            </strong>{' '}
            returns the string "Hello world".
          </li>
          <li>
            <strong>
              fromBytes(new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111,
              114, 108, 100, 33]), 'hex')
            </strong>{' '}
            returns the hex value "0x48656c6c6f20576f726c6421".
          </li>
          <li>
            <strong>fromBytes(new Uint8Array([1, 164]), 'number')</strong>{' '}
            returns the number 420.
          </li>
          <li>
            <strong>fromBytes(new Uint8Array([1]), 'boolean')</strong> returns
            the boolean value true.
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
      ></Stack>
    </Stack>
  )
}
