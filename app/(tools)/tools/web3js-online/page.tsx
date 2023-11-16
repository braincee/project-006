import FunctionContainer from '@/components/FunctionContainer'
import AsciiToHex from '@/components/web3js/utils/AsciiToHex'
import BytesToHex from '@/components/web3js/utils/BytesToHex'
import ConvertScalarValue from '@/components/web3js/utils/ConvertScalarValue'
import PadLeft from '@/components/web3js/utils/PadLeft'
import PadRight from '@/components/web3js/utils/PadRight'
import RightPad from '@/components/web3js/utils/RightPad'
import StringToHex from '@/components/web3js/utils/StringToHex'
import ToAscii from '@/components/web3js/utils/ToAscii'
import ToBigInt from '@/components/web3js/utils/ToBigInt'
import ToBool from '@/components/web3js/utils/ToBool'
import ToChecksumAddress from '@/components/web3js/utils/ToChecksumAddress'
import ToDecimal from '@/components/web3js/utils/ToDecimal'
import ToHex from '@/components/web3js/utils/ToHex'
import ToNumber from '@/components/web3js/utils/ToNumber'
import ToTwosComplement from '@/components/web3js/utils/ToTwosComplement'
import ToUtf8 from '@/components/web3js/utils/ToUtf8'
import ToWei from '@/components/web3js/utils/ToWei'
import Uint8ArrayEquals from '@/components/web3js/utils/Uint8ArrayEquals'
import Utf8ToBytes from '@/components/web3js/utils/Utf8ToBytes'
import Utf8ToHex from '@/components/web3js/utils/Utf8ToHex'
import UuidV4 from '@/components/web3js/utils/UuidV4'
import Uint8ArrayConcat from '@/components/web3js/utils/Uint8ArrayConcat'

import { Stack, Typography } from '@mui/joy'
import SoliditySha3Raw from '@/components/web3js/utils/SoliditySha3Raw'
import SoliditySha3 from '@/components/web3js/utils/SoliditySha3'
import Sha3Raw from '@/components/web3js/utils/Sha3Raw'
import Sha3 from '@/components/web3js/utils/Sha3'
import SetRequestIdStart from '@/components/web3js/utils/SetRequestIdStart'

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
          title='web3.padLeft'
          description='Adds a padding on the left of a string, if value is a integer or bigInt will be 
            converted to a hex string.'
        >
          <PadLeft />
        </FunctionContainer>
        <FunctionContainer
          title='web3.padRight'
          description='Adds a padding on the right of a string, if value is a integer or bigInt will be
           converted to a hex string.'
        >
          <PadRight />
        </FunctionContainer>
        <FunctionContainer
          title='web3.rightPad'
          description='Adds a padding on the right of a string, if value is a integer or 
            bigInt will be converted to a hex string.'
        >
          <RightPad />
        </FunctionContainer>
        <FunctionContainer
          title='web3.setRequestIdStart'
          description='Optionally use to make the jsonrpc id start from a specific number. 
            Without calling this function, the id will be filled with a Uuid. 
            But after this being called with a number, the id will be a number staring from 
            the provided start variable. However, if undefined was passed to this function, 
            the id will be a Uuid again.'
        >
          <SetRequestIdStart />
        </FunctionContainer>
        <FunctionContainer
          title='web3.sha3'
          description='Computes the Keccak-256 hash of the input and returns a hexstring'
        >
          <Sha3 />
        </FunctionContainer>
        <FunctionContainer
          title='web3.sha3Raw'
          description='Will calculate the sha3 of the input but does return the hash value instead 
          of null if for example a empty string is passed.'
        >
          <Sha3Raw />
        </FunctionContainer>
        <FunctionContainer
          title='web3.soliditySha3'
          description='Will tightly pack values given in the same way solidity would then hash. 
          returns a hash string, or null if input is empty'
        >
          <SoliditySha3 />
        </FunctionContainer>
        <FunctionContainer
          title='web3.soliditySha3Raw'
          description='Will tightly pack values given in the same way solidity would then hash. returns a hash 
          string, if input is empty will return 0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470'
        >
          <SoliditySha3Raw />
        </FunctionContainer>
        <FunctionContainer
          title='web3.stringToHex'
          description='Converts a string to hex'
        >
          <StringToHex />
        </FunctionContainer>
        <FunctionContainer
          title='web3.toAscii'
          description='Converts a string to Ascii'
        >
          <ToAscii />
        </FunctionContainer>
        <FunctionContainer
          title='web3.toBigInt'
          description='Auto converts any given value into it’s bigint representation'
        >
          <ToBigInt />
        </FunctionContainer>
        <FunctionContainer
          title='web3.toBool'
          description='Covert any given value to boolean.'
        >
          <ToBool />
        </FunctionContainer>
        <FunctionContainer
          title='web3.toChecksumAddress'
          description='Convert an upper or lowercase Ethereum address to a checksum address.'
        >
          <ToChecksumAddress />
        </FunctionContainer>
        <FunctionContainer
          title='web3.toDecimal'
          description='Convert a value to it’s number representation.'
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
          description="Convert any given value into it's number representation, if possible, 
          else into it's bigint representation."
        >
          <ToNumber />
        </FunctionContainer>

        <FunctionContainer
          title='web3.toTwoComplement'
          description="Convert a negative number into the two's complement and return a hexstring 
          of 64 nibbles."
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
          title='web3.uint8ArrayConcat'
          description='Convert a utf8 string to Bytes.'
        >
          <Uint8ArrayConcat />
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
