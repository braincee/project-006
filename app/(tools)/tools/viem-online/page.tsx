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
            <Typography level="h1">Viem Online</Typography>
            <Typography level="h2">
                All available viem functions will be placed below, each inside a FunctionContainer.
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
                    title="viem.fromRlp"
                    description="Decodes a Recursive-Length Prefix (RLP) value into a decoded hex value or byte array."
                >
                 <FromRlp />
                  </FunctionContainer>
                 <FunctionContainer
                    title="viem.pad"
                    description="Pads a hex value or byte array with leading or trailing zeros."
                >
                 <Pad />
                  </FunctionContainer>
                <FunctionContainer
                    title="viem.slice"
                    description="Returns a section of the hex or byte array given a start/end bytes offset."
                >
                 <Slice />
                  </FunctionContainer>
                <FunctionContainer
                    title="viem.trim"
                    description="Trims the leading or trailing zero byte data from a hex value or byte array."
                >
                 <Trim />
                  </FunctionContainer>
                 <FunctionContainer
                    title="viem.size"
                    description="Retrieves the size of the value (in bytes)."
                >
                 <Size />
                  </FunctionContainer>
                 <FunctionContainer
                    title="viem.isHex"
                    description="Checks whether the value is a hex value or not."
                >
                  <IsHex />
                  </FunctionContainer>
                 <FunctionContainer
                    title="viem.isBytes"
                    description="Checks whether the value is a byte array or not."
                >
                  <IsBytes />
                  </FunctionContainer>
                <FunctionContainer
                    title="viem.concat"
                    description="Concatenates a set of hex values or byte arrays."
                >
                  <Concat />
                  </FunctionContainer>
                   <FunctionContainer
                    title="viem.parseUnits"
                    description="Multiplies a string representation of a number by a given exponent of base 10 (10exponent)."
                >
                  <ParseUnits />
                  </FunctionContainer>
                   <FunctionContainer
                    title="viem.parseGwei"
                    description="Converts a string representation of gwei to numerical wei."
                >
                  <ParseGwei />
                  </FunctionContainer>
                  <FunctionContainer
                    title="viem.parseEther"
                    description="Converts a string representation of ether to numerical wei."
                >
                  <ParseEther />
                </FunctionContainer>
                   <FunctionContainer
                    title="viem.formatUnits"
                    description="Divides a number by a given exponent of base 10 (10exponent), and formats it into a string representation of the number."
                >
                  <FormatUnits />
                </FunctionContainer>
                  <FunctionContainer
                    title="viem.formatGwei"
                    description="Converts numerical wei to a string representation of gwei."
                >
                  <FormatGwei />
                </FunctionContainer>
                  <FunctionContainer
                    title="viem.formatEther"
                    description="Converts numerical wei to a string representation of ether."
                >
                  <FormatEhter />
                </FunctionContainer>
                <FunctionContainer
                    title="viem.isAddressEqual"
                    description="Checks if the given addresses (checksummed) are equal."
                >
                    <IsAddressEqual />
                </FunctionContainer>
                <FunctionContainer
                    title="viem.isAddressEqual"
                    description="Checks the given address(checksummed)"
                >
                    <GetAddress />
                </FunctionContainer>
                <FunctionContainer
                    title="viem.getContractAddress"
                    description="Checks to get the contract address"
                >
                   <GetContractAddress />
                </FunctionContainer>
                <FunctionContainer
                    title="viem.isAddressEqual"
                    description="Checks for validation of address"
                >
                    <IsAddress />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
