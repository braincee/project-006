import FunctionContainer from '@/components/FunctionContainer'
import AsciiToHex from '@/components/web3js/AsciiToHex'
import BytesToHex from '@/components/web3js/BytesToHex'
import ConvertScalarValue from '@/components/web3js/ConvertScalarValue'
import Uint8ArrayEquals from '@/components/web3js/Uint8ArrayEquals'
import Utf8ToBytes from '@/components/web3js/Utf8ToBytes'
import Utf8ToHex from '@/components/web3js/Utf8ToHex'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Sheet,
  Stack,
  Textarea,
  ToggleButtonGroup,
  Typography,
} from '@mui/joy'

export default async function Web3JsOnline() {
  return (
    <Stack
      direction={{ xs: 'column', md: 'column' }}
      sx={{
        height: '100%',
        width: '100%',
      }}
      spacing={2}
    >
      <Typography level='h1'>Web3.js Online</Typography>
      <Typography level='h2'>
        All available web3-utils functions will be placed below, each inside a
        FunctionContainer.
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
        <FunctionContainer
          title='web3.uint8ArrayEquals'
          description='Convert a utf8 string to Bytes.'
        >
          <Uint8ArrayEquals />
        </FunctionContainer>

        <FunctionContainer
          title='web3.utf8ToBytes'
          description='Convert a utf8 string to Bytes.'
        >
          <Utf8ToBytes />
        </FunctionContainer>

        <FunctionContainer
          title='web3.utf8ToHex'
          description='Get hex representation (prefixed by 0x) of utf8 string.'
        >
          <Utf8ToHex />
        </FunctionContainer>
        <FunctionContainer
          title='web3.asciiToHex'
          description='Get hex representation (prefixed by 0x) of ascii string.'
        >
          <AsciiToHex />
        </FunctionContainer>

        <FunctionContainer
          title='web3.convertScalarValue'
          description='Convert a value depending on the format.'
        >
          <ConvertScalarValue />
        </FunctionContainer>

        <FunctionContainer
          title='web3.bytesToHex'
          description='Convert a byte array to a hex string.'
        >
          <BytesToHex />
        </FunctionContainer>
      </Stack>
    </Stack>
  )
}
