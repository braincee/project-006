import FunctionContainer from '@/components/FunctionContainer'
import IsBytes from '@/components/viem/utils/Data/IsBytes'

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
      <Typography level='h1'>IsBytes</Typography>
      <Typography level='h2'>The IsBytes function.</Typography>

      <Typography level='body-md'>
        <strong>isBytes</strong> is a utility function that checks whether a
        given value is a byte array or not. It takes a value as input and
        returns a boolean indicating whether the value is a byte array or n
      </Typography>

      <Typography level='body-md'>
        The function is useful when working with binary data in TypeScript, as
        it allows you to quickly and easily check whether a value is a byte
        array without having to perform a type check or manually inspect the
        value.
      </Typography>

      <Typography level='body-md'>
        Here are some examples of how you can use <strong>isBytes</strong>:
        <ul>
          <li>
            Check if a value is a byte array:{' '}
            <strong>isBytes(new Uint8Array([1, 69, 420]))</strong> returns{' '}
            <strong>true</strong> because the value is a byte array.
          </li>
          <li>
            Check if a value is not a byte array:{' '}
            <strong>isBytes([1, 69, 420])</strong> returns
            <strong>false</strong> because the value is not a byte array.
          </li>
        </ul>
      </Typography>

      <Typography level='body-md'>
        The <strong>isBytes</strong> function is a convenient and efficient way
        to check whether a value is a byte array in TypeScript. It returns a
        boolean value, making it easy to use in conditional statements or other
        logical operations.
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
        <FunctionContainer title='web3.isBytes' description=''>
          <IsBytes />
        </FunctionContainer>
        T
      </Stack>
    </Stack>
  )
}
