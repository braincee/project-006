import FunctionContainer from '@/components/FunctionContainer'
import Slice from '@/components/viem/utils/Data/Slice'

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
      <Typography level='h1'>Slice</Typography>
      <Typography level='h2'>The Slice function.</Typography>

      <Typography level='body-md'>
        The <strong>slice</strong> function in the <strong>viem</strong> library
        allows you to extract a section of a hex or byte array, specified by a
        start and end offset. The function takes three arguments: the value to
        slice, the start offset, and the end offset. The start and end offsets
        are optional, and if not provided, the function will use the default
        values of 0 for the start offset and the length of the value for the end
        offset.
      </Typography>

      <Typography level='body-md'>
        The <strong>slice</strong> function returns a new hex or byte array
        containing the section of the original value specified by the start and
        end offsets. If the end offset is not provided, it will be inferred from
        the length of the value.
      </Typography>

      <Typography level='body-md'>
        The function also takes an optional options object that can contain a
        <strong>strict</strong> property, which defaults to{' '}
        <strong>false</strong>. If <strong>strict</strong> is{' '}
        <strong>true</strong>, the end offset must be inclusive of the bounds of
        the data. If the end offset is out-of-bounds, an error will be thrown.
      </Typography>

      <Typography level='body-md'>
        The <strong>slice</strong> function is useful for extracting a section
        of a hex or byte array, and it allows you to specify the start and end
        offsets, as well as an optional <strong>strict</strong> option to ensure
        that the end offset is inclusive of the bounds of the data.
      </Typography>

      <Typography level='body-md'>
        Here are some examples of using the <strong>slice</strong> function:
        <ul>
          <li>
            <strong>slice('0x0123456789', 1, 4)</strong> returns{' '}
            <strong>0x234567</strong>, which is the section of the hex string
            starting from the second byte (offset 1) and ending at the fifth
            byte (offset 4).
          </li>
          <li>
            <strong>slice(new Uint8Array([1, 122, 51, 123]), 1, 3)</strong>{' '}
            returns <strong>Uint8Array [122, 51]</strong>, which is the section
            of the byte array starting from the second byte (offset 1) and
            ending at the fourth byte (offset 3).
          </li>
          <li>
            <strong>
              slice('0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678', 0, 20, &#123;
              strict: true &#125;)
            </strong>{' '}
            throws an error because the end offset <strong>20</strong> is
            out-of-bounds (the size of the value is 19).
          </li>
          <li>
            <strong>
              slice('0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC', 0, 20, &#123;
              strict: true &#125;)
            </strong>{' '}
            returns
            <strong>0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC</strong>, which
            is the section of the hex string starting from the beginning (offset
            0) and ending at the 20th byte (offset 19).
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
        <FunctionContainer title='web3.slice' description=''>
          <Slice />
        </FunctionContainer>
      </Stack>
    </Stack>
  )
}
