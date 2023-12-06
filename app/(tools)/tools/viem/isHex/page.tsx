import FunctionContainer from '@/components/FunctionContainer'
import IsHex from '@/components/viem/utils/Data/IsHex'

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
      <Typography level='h1'>IsHex</Typography>
      <Typography level='h2'>The IsHex function.</Typography>

      <Typography level='body-md'>
        <strong>isHex</strong> is a utility function that checks whether a given
        value is a hex value or not. It takes a value as input and returns a
        boolean indicating whether the value is a hex value.
      </Typography>

      <Typography level='body-md'>
        The function accepts an optional <strong>options</strong> object that
        allows you to customize the checking behavior. The{' '}
        <strong>strict</strong> property of the <strong>options</strong>
        object is a boolean that defaults to <strong>true</strong>. When{' '}
        <strong>strict</strong> is <strong>true</strong>, the function checks if
        the value strictly consists of only hex characters ("0x[0-9a-fA-F]*").
        When <strong>strict</strong> is <strong>false</strong>, the function
        checks if the value loosely matches the hex format (i.e.,{' '}
        <strong>value.startsWith('0x')</strong>).
      </Typography>

      <Typography level='body-md'>
        Here are some examples of how you can use <strong>isHex</strong>:
        <ul>
          <li>
            Check if a value is a hex value (strict):{' '}
            <strong>isHex('0x1a4', &#123; strict: true &#125;)</strong> returns{' '}
            <strong>true</strong> because the value consists only of hex
            characters.
          </li>
          <li>
            Check if a value is a hex value (loose):{' '}
            <strong>isHex('0x1a4', &#123; strict: false &#125;)</strong> returns{' '}
            <strong>true</strong> because the value starts with "0x".
          </li>
          <li>
            Check if a value is not a hex value:{' '}
            <strong>isHex('foo', &#123; strict: false &#125;)</strong> returns{' '}
            <strong>false</strong> because the value does not start with "0x".
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
        <FunctionContainer title='web3.pad' description=''>
          <IsHex />
        </FunctionContainer>
      </Stack>
    </Stack>
  )
}
