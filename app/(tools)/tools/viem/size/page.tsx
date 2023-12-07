import FunctionContainer from '@/components/FunctionContainer'
import Size from '@/components/viem/utils/Data/Size'

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
      <Typography level='h1'>Size</Typography>
      <Typography level='h2'>The Size function.</Typography>

      <Typography level='body-md'>
        The <strong>size</strong> function in the <strong>viem</strong> library
        returns the size of a hex or byte array value, measured in bytes. The
        function takes a single argument,
        <strong>value</strong>, which can be either a hex string or a byte
        array.
      </Typography>

      <Typography level='body-md'>
        The <strong>size</strong> function is useful for quickly determining the
        size of a value, without having to manually calculate the number of
        bytes it occupies. This can be particularly useful when working with
        binary data, where the size of the data can be important for memory
        management or network transmission purposes.
      </Typography>

      <Typography level='body-md'>
        Here are some examples of using the <strong>size</strong> function:
        <ul>
          <li>
            <strong>size('0xa4')</strong> returns <strong>1</strong>, which is
            the size of the hex string '0xa4' in bytes.
          </li>
          <li>
            <strong>size('0xa4e12a45')</strong> returns <strong>4</strong>,
            which is the size of the hex string '0xa4e12a45' in bytes.
          </li>
          <li>
            <strong>size(new Uint8Array([1, 122, 51, 123]))</strong> returns{' '}
            <strong>4</strong>, which is the size of the byte array in bytes.
          </li>
        </ul>
      </Typography>

      <Typography level='body-md'>
        The <strong>size</strong> function returns a <strong>number</strong>{' '}
        value, representing the size of the input value in bytes.
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
        <FunctionContainer title='web3.size' description=''>
          <Size />
        </FunctionContainer>
      </Stack>
    </Stack>
  )
}
