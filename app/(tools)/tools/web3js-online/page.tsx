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
import SoliditySha3Raw from '@/components/web3js/utils/SoliditySha3Raw'
import SoliditySha3 from '@/components/web3js/utils/SoliditySha3'
import Sha3Raw from '@/components/web3js/utils/Sha3Raw'
import Sha3 from '@/components/web3js/utils/Sha3'
import SetRequestIdStart from '@/components/web3js/utils/SetRequestIdStart'
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
import BytesToUint8Array from '@/components/web3js/utils/BytesToUint8Array'
import FromAscii from '@/components/web3js/utils/FromAscii'
import FromDecimal from '@/components/web3js/utils/FromDecimal'
import FromUtf8 from '@/components/web3js/utils/FromUtf8'
import FromWei from '@/components/web3js/utils/FromWei'
import HexToAscii from '@/components/web3js/utils/HexToAscii'
import HexToBytes from '@/components/web3js/utils/HexToBytes'
import HexToNumber from '@/components/web3js/utils/HexToNumber'
import HexToString from '@/components/web3js/utils/HexToString'
import HexToNumberString from '@/components/web3js/utils/HexToNumberString'
import HexToUtf8 from '@/components/web3js/utils/HexToUtf8'
import NumberToHex from '@/components/web3js/utils/NumberToHex'
import Uint8ArrayConcat from '@/components/web3js/utils/Uint8ArrayConcat'
import RandomBytes from '@/components/web3js/utils/RandomBytes'
import RandomHex from '@/components/web3js/utils/RandomHex'
import RejectIfTimeout from '@/components/web3js/utils/RejectIfTimeout'
import ProcessSolidityEncodePackedArgs from '@/components/web3js/utils/ProcessSolidityEncodePackedArgs'
import WaitWithTimeout from '@/components/web3js/utils/WaitWithTimeout'
import RejectIfConditionAtInterval from '@/components/web3js/utils/RejectIfConditionAtInterval'
import PollTillDefined from '@/components/web3js/utils/PollTillDefined'
import PollTillDefinedAndReturnIntervalId from '@/components/web3js/utils/PollTillDefinedAndReturnIntervalId'
import MergeDeep from '@/components/web3js/utils/MergeDeep'
import LeftPad from '@/components/web3js/utils/LeftPad'
import Keccak256Wrapper from '@/components/web3js/utils/Keccak256Wrapper'
import CheckAddressCheckSum from '@/components/web3js/utils/CheckAddressCheckSum'
import CompareBlockNumbers from '@/components/web3js/utils/CompareBlockNumbers'
import Convert from '@/components/web3js/utils/Convert'
import Format from '@/components/web3js/utils/Format'
import FromTwosComplement from '@/components/web3js/utils/FromTwosComplement'
import GetStorageSlotNumForLongString from '@/components/web3js/utils/GetStorageSlotNumForLongString'
import IsAddress from '@/components/web3js/utils/IsAddress'
import IsBloom from '@/components/web3js/utils/IsBloom'
import IsContractAddressInBloom from '@/components/web3js/utils/IsContractAddressInBloom'
import IsHex from '@/components/web3js/utils/IsHex'
import IsHexStrict from '@/components/web3js/utils/IsHexStrict'
import IsTopic from '@/components/web3js/utils/isTopic'
import IsTopicInBloom from '@/components/web3js/utils/IsTopicInBloom'
import EncodePacked from '@/components/web3js/utils/EncodePacked'

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
        <FunctionContainer title='web3.isTopicInBloom' description=''>
          <IsTopicInBloom />
        </FunctionContainer>
        <FunctionContainer title='web3.isTopic' description=''>
          <IsTopic />
        </FunctionContainer>
        <FunctionContainer title='web3.isHexStrict' description=''>
          <IsHexStrict />
        </FunctionContainer>
        <FunctionContainer title='web3.isHex' description=''>
          <IsHex />
        </FunctionContainer>
        <FunctionContainer title='web3.isContractAddressInBloom' description=''>
          <IsContractAddressInBloom />
        </FunctionContainer>
        <FunctionContainer title='web3.isBloom' description=''>
          <IsBloom />
        </FunctionContainer>
        <FunctionContainer title='web3.isAddress' description=''>
          <IsAddress />
        </FunctionContainer>
        <FunctionContainer
          title='web3.getStorageSlotNumForLongString'
          description=''
        >
          <GetStorageSlotNumForLongString />
        </FunctionContainer>
        <FunctionContainer title='web3.fromTwosComplement' description=''>
          <FromTwosComplement />
        </FunctionContainer>
        <FunctionContainer title='web3.format' description=''>
          <Format />
        </FunctionContainer>
        <FunctionContainer title='web3.encodePacked' description=''>
          <EncodePacked />
        </FunctionContainer>
        <FunctionContainer title='web3.convert' description=''>
          <Convert />
        </FunctionContainer>
        <FunctionContainer title='web3.compareBlockNumbers' description=''>
          <CompareBlockNumbers />
        </FunctionContainer>
        <FunctionContainer title='web3.checkAddressCheckSum' description=''>
          <CheckAddressCheckSum />
        </FunctionContainer>
        <FunctionContainer
          title='web3.bytesToUint8Array'
          description='Converts values from bytes to Uint8Array.'
        >
          <BytesToUint8Array />
        </FunctionContainer>
        <FunctionContainer
          title='web3.fromAscii'
          description='Converts words to a hex representation.'
        >
          <FromAscii />
        </FunctionContainer>
        <FunctionContainer
          title='web3.fromDecimal'
          description='Converts Decimal to a hex representation.'
        >
          <FromDecimal />
        </FunctionContainer>
        <FunctionContainer
          title='web3.fromUtf8'
          description='Converts Utf8 string to a hex representation.'
        >
          <FromUtf8 />
        </FunctionContainer>
        <FunctionContainer
          title='web3.fromWei'
          description='Takes a number of wei and converts it to any other ether unit.'
        >
          <FromWei />
        </FunctionContainer>
        <FunctionContainer
          title='web3.hexToAscii'
          description='Converts a hex to ascii'
        >
          <HexToAscii />
        </FunctionContainer>
        <FunctionContainer
          title='web3.hexToBytes'
          description='Converts a hex to bytes'
        >
          <HexToBytes />
        </FunctionContainer>
        <FunctionContainer
          title='web3.hexToNumber'
          description='Converts a hex to number'
        >
          <HexToNumber />
        </FunctionContainer>
        <FunctionContainer
          title='web3.hexToNumberString'
          description='Converts a hex to Number string'
        >
          <HexToNumberString />
        </FunctionContainer>
        <FunctionContainer
          title='web3.hexToString'
          description='Converts a hex to string'
        >
          <HexToString />
        </FunctionContainer>
        <FunctionContainer
          title='web3.hexToUtf8'
          description='Get utf8 string of hex representation (prefixed by 0x).'
        >
          <HexToUtf8 />
        </FunctionContainer>
        <FunctionContainer
          title='web3.keccak256Wrapper'
          description='A wrapper for ethereum-cryptography/keccak256 to allow hashing a string 
            and a bigint in addition to UInt8Array'
        >
          <Keccak256Wrapper />
        </FunctionContainer>
        <FunctionContainer
          title='web3.leftPad'
          description='Adds a padding on the left of a string, if value is a integer or 
            bigInt will be converted to a hex string.'
        >
          <LeftPad />
        </FunctionContainer>
        <FunctionContainer
          title='web3.mergeDeep'
          description='Deep merge two objects.'
        >
          <MergeDeep />
        </FunctionContainer>
        <FunctionContainer
          title='web3.numberToHex'
          description='Converts a number to Hex'
        >
          <NumberToHex />
        </FunctionContainer>
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
          title='web3.pollTillDefined'
          description='Repeatedly calls an async function with a given interval until the result 
            of the function is defined (not undefined or null), or until a timeout is reached. 
            pollTillDefinedAndReturnIntervalId() function should be used instead of pollTillDefined 
            if you need IntervalId in result. This function will be deprecated in next major release 
            so use pollTillDefinedAndReturnIntervalId().'
        >
          <PollTillDefined />
        </FunctionContainer>
        <FunctionContainer
          title='web3.pollTillDefinedAndReturnIntervalId'
          description='Repeatedly calls an async function with a given interval until the result
            of the function is defined (not undefined or null), or until a timeout is reached. 
            It returns promise and intervalId.'
        >
          <PollTillDefinedAndReturnIntervalId />
        </FunctionContainer>
        <FunctionContainer
          title='web3.processSolidityEncodePackedArgs'
          description='Returns a string of the tightly packed value given based on the type'
        >
          <ProcessSolidityEncodePackedArgs />
        </FunctionContainer>
        <FunctionContainer
          title='web3.randomBytes'
          description='Returns a random byte array by the given bytes size'
        >
          <RandomBytes />
        </FunctionContainer>
        <FunctionContainer
          title='web3.randomHex'
          description='Returns a random hex string by the given bytes size'
        >
          <RandomHex />
        </FunctionContainer>
        <FunctionContainer
          title='web3.rejectIfConditionAtInterval'
          description='Sets an interval that repeatedly executes the given cond function with 
            the specified interval between each call. If the condition is met, the interval is 
            cleared and a Promise that rejects with the returned value is returned.'
        >
          <RejectIfConditionAtInterval />
        </FunctionContainer>
        <FunctionContainer
          title='web3.rejectIfTimeout'
          description='Enforce a timeout on a promise, so that it can be rejected if it takes
           too long to complete'
        >
          <RejectIfTimeout />
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
        <FunctionContainer
          title='web3.uuidV4'
          description='Generate a version 4 (random) uuid '
        >
          <UuidV4 />
        </FunctionContainer>
        <FunctionContainer
          title='web3.waitWithTimeout'
          description='Wait for a promise but interrupt it if it did not resolve within a given timeout. 
            If the timeout reached, before the promise code resolve, either throw an error if an error object 
            was provided, or return undefined'
        >
          <WaitWithTimeout />
        </FunctionContainer>
      </Stack>
    </Stack>
  )
}
