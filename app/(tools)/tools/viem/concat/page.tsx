import FunctionContainer from '@/components/FunctionContainer'
import Concat from '@/components/viem/utils/Data/Concat'

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
      <Typography level='h1'>Concat</Typography>
      <Typography level='h2'>The Concat function.</Typography>

      <Typography level='body-md'>
        <strong>concat</strong> is a versatile function that concatenates a set
        of hex values or byte arrays into a single hex string or byte array. It
        is a useful tool for working with binary data in TypeScript.
      </Typography>

      <Typography level='body-md'>
        The function takes an arbitrary number of arguments, each of which can
        be a hex string, a byte array, or a combination of both. Hex strings are
        represented as sequences of bytes, and byte arrays are converted to hex
        strings before concatenation.
      </Typography>

      <Typography level='body-md'>
        Here are some examples of how you can use <strong>concat</strong>:
        <ul>
          <li>
            Concatenate two hex strings:{' '}
            <strong>concat('0x00000069', '0x00000420')</strong> returns the hex
            string <strong>0x0000006900000420.</strong>
          </li>
          <li>
            Concatenate a hex string and a byte array:{' '}
            <strong>concat('0x00000069', new Uint8Array([420]))</strong> returns
            the hex string <strong>0x0000006900000420.</strong>
          </li>
          <li>
            Concatenate two byte arrays:{' '}
            <strong>concat(new Uint8Array([69]), new Uint8Array([420]))</strong>{' '}
            returns the byte array <strong>Uint8Array [69, 420].</strong>
          </li>
          <li>
            Concatenate a mix of hex strings and byte arrays:
            <strong>
              concat('0x00000069', new Uint8Array([420]), '0x00000420')
            </strong>{' '}
            returns the hex string <strong>0x0000006900000420.</strong>
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
        <FunctionContainer title='web3.concat' description=''>
          <Concat />
        </FunctionContainer>
      </Stack>
    </Stack>
  )
}
