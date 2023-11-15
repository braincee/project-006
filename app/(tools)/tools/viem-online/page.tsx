import FunctionContainer from '@/components/FunctionContainer'
import IsAddressEqual from '@/components/viem/IsAddressEqual'
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
                    title="viem.isAddressEqual"
                    description="Checks if the given addresses (checksummed) are equal."
                >
                    <IsAddressEqual />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
