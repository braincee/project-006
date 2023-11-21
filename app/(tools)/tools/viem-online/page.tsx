import FunctionContainer from '@/components/FunctionContainer'
import FormatEhter from '@/components/viem/utils/Units/FormatEther'
import FormatGwei from '@/components/viem/utils/Units/FormatGwei'
import FormatUnits from '@/components/viem/utils/Units/FormatUnits'
import GetAddress from '@/components/viem/utils/Addresses/GetAddress'
import GetContractAddress from '@/components/viem/utils/Addresses/GetContractAddress'
import IsAddress from '@/components/viem/utils/Addresses/IsAddress'
import IsAddressEqual from '@/components/viem/utils/Addresses/IsAddressEqual'
import ParseEther from '@/components/viem/utils/Units/ParseEther'
import ParseGwei from '@/components/viem/utils/Units/ParseGwei'
import ParseUnits from '@/components/viem/utils/Units/ParseUnits'

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
import Concat from '@/components/viem/utils/Data/Concat'
import IsBytes from '@/components/viem/utils/Data/IsBytes'
import IsHex from '@/components/viem/utils/Data/IsHex'
import Size from '@/components/viem/utils/Data/Size'
import Trim from '@/components/viem/utils/Data/Trim'
import Slice from '@/components/viem/utils/Data/Slice'
import Pad from '@/components/viem/utils/Data/Pad'
import FromRlp from '@/components/viem/utils/Encoding/FromRlp'
import ToBytes from '@/components/viem/utils/Encoding/ToBytes'
import ToHex from '@/components/viem/utils/Encoding/ToHex'
import FromHex from '@/components/viem/utils/Encoding/FromHex'
import GetEnsAddress from '@/components/viem/ens/GetEnsAddress'
import GetEnsAvatar from '@/components/viem/ens/GetEnsAvatar'
import GetEnsName from '@/components/viem/ens/GetEnsName'
import GetEnsReslover from '@/components/viem/ens/GetEnsResolver'
import GetEnsText from '@/components/viem/ens/GetEnsText'
import LabelHash from '@/components/viem/ens/LabelHash'
import NameHash from '@/components/viem/ens/NameHash'
import Normalize from '@/components/viem/ens/Normalize'
import FromBytes from '@/components/viem/utils/Encoding/FromBytes'

export default async function ViemOnline() {
  return (
    <Stack
      direction={{ xs: 'column', md: 'column' }}
      sx={{
        height: '100%',
        width: '100%',
      }}
      spacing={2}
    >
      <Typography level='h1'>Viem Online</Typography>
      <Typography level='h2'>
        All available viem functions will be placed below, each inside a
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
        <FunctionContainer title='viem.normalize' description='Enter ENS name.'>
          <Normalize />
        </FunctionContainer>
        <FunctionContainer title='viem.nameHash' description='Hashes ENS name.'>
          <NameHash />
        </FunctionContainer>
        <FunctionContainer
          title='viem.labelHash'
          description='Hashes ENS label.'
        >
          <LabelHash />
        </FunctionContainer>
        <FunctionContainer
          title='viem.getEnsText'
          description='Gets a text record for specified ENS name.'
        >
          <GetEnsText />
        </FunctionContainer>
        <FunctionContainer
          title='viem.getEnsResolver'
          description='Gets resolver for ENS name.'
        >
          <GetEnsReslover />
        </FunctionContainer>
        <FunctionContainer
          title='viem.getEns'
          description='Gets primary name for specified address.'
        >
          <GetEnsName />
        </FunctionContainer>
        <FunctionContainer
          title='viem.getEnsAvatar'
          description='Gets the avatar of an ENS name.'
        >
          <GetEnsAvatar />
        </FunctionContainer>
        <FunctionContainer
          title='viem.getEnsAddress'
          description='Gets address for ENS name.'
        >
          <GetEnsAddress />
        </FunctionContainer>
        <FunctionContainer
          title='viem.fromBytes'
          description='Decodes a byte array to a string, hex value, boolean or number.'
        >
          <FromBytes />
        </FunctionContainer>
        <FunctionContainer
          title='viem.fromHex'
          description='Decodes a hex value to a string, number or byte array.'
        >
          <FromHex />
        </FunctionContainer>
        <FunctionContainer
          title='viem.toHex'
          description='Encodes a string, number, boolean or byte array to a hex value value.'
        >
          <ToHex />
        </FunctionContainer>
        <FunctionContainer
          title='viem.toBytes'
          description='Encodes a string, hex value, number or boolean to a byte array.'
        >
          <ToBytes />
        </FunctionContainer>
        <FunctionContainer
          title='viem.fromRlp'
          description='Decodes a Recursive-Length Prefix (RLP) value into a decoded hex value or byte array.'
        >
          <FromRlp />
        </FunctionContainer>
        <FunctionContainer
          title='viem.pad'
          description='Pads a hex value or byte array with leading or trailing zeros.'
        >
          <Pad />
        </FunctionContainer>
        <FunctionContainer
          title='viem.slice'
          description='Returns a section of the hex or byte array given a start/end bytes offset.'
        >
          <Slice />
        </FunctionContainer>
        <FunctionContainer
          title='viem.trim'
          description='Trims the leading or trailing zero byte data from a hex value or byte array.'
        >
          <Trim />
        </FunctionContainer>
        <FunctionContainer
          title='viem.size'
          description='Retrieves the size of the value (in bytes).'
        >
          <Size />
        </FunctionContainer>
        <FunctionContainer
          title='viem.isHex'
          description='Checks whether the value is a hex value or not.'
        >
          <IsHex />
        </FunctionContainer>
        <FunctionContainer
          title='viem.isBytes'
          description='Checks whether the value is a byte array or not.'
        >
          <IsBytes />
        </FunctionContainer>
        <FunctionContainer
          title='viem.concat'
          description='Concatenates a set of hex values or byte arrays.'
        >
          <Concat />
        </FunctionContainer>
        <FunctionContainer
          title='viem.parseUnits'
          description='Multiplies a string representation of a number by a given exponent of base 10 (10exponent).'
        >
          <ParseUnits />
        </FunctionContainer>
        <FunctionContainer
          title='viem.parseGwei'
          description='Converts a string representation of gwei to numerical wei.'
        >
          <ParseGwei />
        </FunctionContainer>
        <FunctionContainer
          title='viem.parseEther'
          description='Converts a string representation of ether to numerical wei.'
        >
          <ParseEther />
        </FunctionContainer>
        <FunctionContainer
          title='viem.formatUnits'
          description='Divides a number by a given exponent of base 10 (10exponent), and formats it into a string representation of the number.'
        >
          <FormatUnits />
        </FunctionContainer>
        <FunctionContainer
          title='viem.formatGwei'
          description='Converts numerical wei to a string representation of gwei.'
        >
          <FormatGwei />
        </FunctionContainer>
        <FunctionContainer
          title='viem.formatEther'
          description='Converts numerical wei to a string representation of ether.'
        >
          <FormatEhter />
        </FunctionContainer>
        <FunctionContainer
          title='viem.isAddressEqual'
          description='Checks if the given addresses (checksummed) are equal.'
        >
          <IsAddressEqual />
        </FunctionContainer>
        <FunctionContainer
          title='viem.isAddressEqual'
          description='Checks the given address(checksummed)'
        >
          <GetAddress />
        </FunctionContainer>
        <FunctionContainer
          title='viem.getContractAddress'
          description='Checks to get the contract address'
        >
          <GetContractAddress />
        </FunctionContainer>
        <FunctionContainer
          title='viem.isAddressEqual'
          description='Checks for validation of address'
        >
          <IsAddress />
        </FunctionContainer>
      </Stack>
    </Stack>
  )
}
