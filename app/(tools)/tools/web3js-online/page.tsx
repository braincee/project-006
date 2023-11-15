import FunctionContainer from '@/components/FunctionContainer'
import AsciiToHex from '@/components/web3js/AsciiToHex'
import BytesToHex from '@/components/web3js/BytesToHex'
import ConvertScalarValue from '@/components/web3js/ConvertScalarValue'
import StringToHex from '@/components/web3js/StringToHex'
import ToAscii from '@/components/web3js/ToAscii'
import ToBigInt from '@/components/web3js/ToBigInt'
import ToBool from '@/components/web3js/ToBool'
import ToChecksumAddress from '@/components/web3js/ToChecksumAddress'
import ToDecimal from '@/components/web3js/ToDecimal'
import ToHex from '@/components/web3js/ToHex'
import ToNumber from '@/components/web3js/ToNumber'
import ToTwosComplement from '@/components/web3js/ToTwosComplement'
import ToUtf8 from '@/components/web3js/ToUtf8'
import ToWei from '@/components/web3js/ToWei'
import Uint8ArrayEquals from '@/components/web3js/Uint8ArrayEquals'
import Utf8ToBytes from '@/components/web3js/Utf8ToBytes'
import Utf8ToHex from '@/components/web3js/Utf8ToHex'
import UuidV4 from '@/components/web3js/UuidV4'

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
          title='web3.stringToHex'
          description='Auto converts any given value into it’s hex representation.'
        >
          <StringToHex />
        </FunctionContainer>
        <FunctionContainer
          title='web3.toAscii'
          description='Auto converts any given value into it’s hex representation.'
        >
          <ToAscii />
        </FunctionContainer>
        <FunctionContainer
          title='web3.toBigInt'
          description='Auto converts any given value into it’s hex representation.'
        >
          <ToBigInt />
        </FunctionContainer>
        <FunctionContainer
          title='web3.toBool'
          description='Auto converts any given value into it’s hex representation.'
        >
          <ToBool />
        </FunctionContainer>
        <FunctionContainer
          title='web3.toChecksumAddress'
          description='Auto converts any given value into it’s hex representation.'
        >
          <ToChecksumAddress />
        </FunctionContainer>
        <FunctionContainer
          title='web3.toDecimal'
          description='Auto converts any given value into it’s hex representation.'
        >
          <ToDecimal />
        </FunctionContainer>
        <FunctionContainer
          title='web3.toHex'
          description='Auto converts any given value into it’s hex representation.'
        >
          <ToHex />
        </FunctionContainer>
        <FunctionContainer
          title='web3.toNumber'
          description="Convert any given value into it's number representation, if possible, else into it's bigint representation."
        >
          <ToNumber />
        </FunctionContainer>

        <FunctionContainer
          title='web3.toTwoComplement'
          description="Convert a negative number into the two's complement and return a hexstring of 64 nibbles."
        >
          <ToTwosComplement />
        </FunctionContainer>

        <FunctionContainer
          title='web3.toUtf8'
          description='Convert a string | bytes to utf8.'
        >
          <ToUtf8 />
        </FunctionContainer>

        <FunctionContainer
          title='web3.toWei'
          description='Convert a number of a unit to wei'
        >
          <ToWei />
        </FunctionContainer>

        <FunctionContainer
          title='web3.uuidV4'
          description='Generate a version 4 (random) uuid '
        >
          <UuidV4 />
        </FunctionContainer>

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
