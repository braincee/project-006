import FunctionContainer from '@/components/FunctionContainer'
import Trim from '@/components/viem/utils/Data/Trim'

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
      <Typography level='h1'>Trim</Typography>
      <Typography level='h2'>The Trim function.</Typography>

      <Typography level='body-md'>
        The <strong>trim</strong> function in the <strong>viem</strong> library
        removes leading or trailing zero byte data from a hex value or byte
        array. By default, the function trims leading zero bytes, but you can
        also specify a direction parameter to trim trailing zero bytes instead.
      </Typography>

      <Typography level='body-md'>
        The <strong>trim</strong> function is useful when working with binary
        data that may have unnecessary zero bytes at the beginning or end. For
        example, when deserializing data from a hex string, you may want to
        remove leading zero bytes to get the actual data. Similarly, when
        working with byte arrays, you may want to remove trailing zero bytes to
        ensure that the data is properly formatted.
      </Typography>

      <Typography level='body-md'>
        Here are some examples of using the <strong>trim</strong> function:
        <ul>
          <li>
            <strong>
              trim('0x000000000000000000000000000000000000000000000000000000001a4e12a45')
            </strong>{' '}
            returns <strong>0x01a4e12a45</strong>, which is the trimmed version
            of the hex string.
          </li>
          <li>
            <strong>
              trim(new Uint8Array([0, 0, 0, 0, 0, 0, 1, 122, 51, 123])))
            </strong>{' '}
            returns <strong>Uint8Array [1,122,51,123]</strong>, which is the
            trimmed version of the byte array.
          </li>
          <li>
            <strong>
              trim('0xa4e12a4510000000000000000000000000000000000000000000000000000000',
              &#123; dir: 'right' &#125;)
            </strong>{' '}
            returns <strong>0xa4e12a4510</strong>, which is the trimmed version
            of the hex string with the trailing zero bytes removed.
          </li>
        </ul>
      </Typography>

      <Typography level='body-md'>
        The <strong>trim</strong> function takes an optional{' '}
        <strong>dir</strong> parameter, which specifies the direction in which
        to trim the zero byte data. The default value of <strong>dir</strong>
        is <strong>"left"</strong>, which means that the function trims leading
        zero bytes. If you set <strong>dir</strong> to <strong>"right"</strong>,
        the function trims trailing zero bytes instead.
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
        <FunctionContainer title='web3.trim' description=''>
          <Trim />
        </FunctionContainer>
      </Stack>
    </Stack>
  )
}
