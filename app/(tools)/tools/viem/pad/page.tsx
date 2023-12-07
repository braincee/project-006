import FunctionContainer from '@/components/FunctionContainer'
import Pad from '@/components/viem/utils/Data/Pad'

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
      <Typography level='h1'>Pad</Typography>
      <Typography level='h2'>The Pad function.</Typography>

      <Typography level='body-md'>
        The <strong>pad</strong> function pads a hex value or byte array with
        leading or trailing zeros up to a specified size. It takes a value and
        an optional options object as input, and returns a new hex value or byte
        array with the padded zeros.
      </Typography>

      <Typography level='body-md'>
        The dir property of the options object specifies the direction in which
        to pad the zeros. It can be set to "left" to pad the zeros on the left
        side of the value, or "right" to pad the zeros on the right side of the
        value. The default value of dir is "left".
      </Typography>

      <Typography level='body-md'>
        The size property of the options object specifies the size (in bytes) of
        the targeted value. The default value of size is 32 bytes (64 hex
        characters).
      </Typography>

      <Typography level='body-md'>
        Here are some examples of how you can use the pad function:
        <ul>
          <li>
            Pad a hex value with leading zeros:{' '}
            <strong>pad('0xa4e12a45', &#123; dir: 'left' &#125;)</strong>{' '}
            returns
            <strong>
              0x000000000000000000000000000000000000000000000000000000000a4e12a45.
            </strong>
          </li>
          <li>
            Pad a hex value with trailing zeros:{' '}
            <strong>pad('0xa4e12a45', &#123; dir: 'right' &#125;)</strong>{' '}
            returns
            <strong>
              0xa4e12a4500000000000000000000000000000000000000000000000000000000.
            </strong>
          </li>
          <li>
            Pad a byte array with leading zeros:{' '}
            <strong>
              pad(new Uint8Array([1, 122, 51, 123]), &#123; dir: 'left' &#125;)
            </strong>{' '}
            returns{' '}
            <strong>
              Uint8Array
              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,122,51,123].
            </strong>
          </li>
          <li>
            Pad a byte array with trailing zeros:{' '}
            <strong>
              pad(new Uint8Array([1, 122, 51, 123]), &#123; dir: 'right' &#125;)
            </strong>{' '}
            returns{' '}
            <strong>
              Uint8Array
              [1,122,51,123,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].
            </strong>
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
          <Pad />
        </FunctionContainer>
        t
      </Stack>
    </Stack>
  )
}
