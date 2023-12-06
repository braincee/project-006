import FunctionContainer from '@/components/FunctionContainer'

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
      <Typography level='h1'>Keccak256</Typography>
      <Typography level='h2'>The Keccak256 function.</Typography>

      <Typography level='body-md'>
        <strong>keccak256</strong> is a function that calculates the Keccak256
        hash of a given input value. The Keccak256 hash is a 256-bit hash value
        that is commonly used in various applications, including
        cryptocurrencies like Bitcoin and Ethereum.
      </Typography>

      <Typography level='body-md'>
        The function takes a single parameter, <strong>value</strong>, which can
        be either a hex string or a byte array. The <strong>to</strong>{' '}
        parameter is optional and specifies the output format of the hash value.
        If not specified, the default output format is a hex string.
      </Typography>

      <Typography level='body-md'>
        The function returns the Keccak256 hash value of the input{' '}
        <strong>value</strong>. If the input is a hex string, it is first
        converted to a byte array before hashing. The resulting hash value is
        then returned as a hex string or byte array, depending on the specified
        output format.
      </Typography>

      <Typography level='body-md'>
        Here are some examples of how to use the <strong>keccak256</strong>{' '}
        function:
        <ul>
          <li>To hash a byte array:</li>
          <pre>
            const hash = keccak256(new Uint8Array([72, 101, 108, 108, 111, 32,
            87, 111, 114, 108, 100, 33]));
          </pre>
          <pre>
            console.log(hash); // Output:
            0x3ea2f1d0abf3fc66cf29eebb70cbd4e7fe762ef8a09bcc06c8edf641230afec0
          </pre>
          <li>To hash a hex string:</li>
          <pre>const hash = keccak256('0xdeadbeef');</pre>
          <pre>
            console.log(hash); // Output:
            0xd4fd4e189132273036449fc9e11198c739161b4c0116a9a2dccdfa1c492006f1
          </pre>
          <li>To hash a UTF-8 string:</li>
          <pre>const hash = keccak256(toHex('hello world'));</pre>
          <pre>
            console.log(hash); // Output:
            0x3ea2f1d0abf3fc66cf29eebb70cbd4e7fe762ef8a09bcc06c8edf641230afec0
          </pre>
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
