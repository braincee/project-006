'use client'
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
import { Metadata } from 'next'
import { useEffect, useState } from 'react'
import { ArrowRightCircle, Info } from 'react-feather'
import { isAddressEqual } from 'viem'
import { ETH_DATA_FORMAT, FMT_NUMBER } from 'web3'
import { asciiToHex, convertScalarValue } from 'web3-utils'

export default function IsAddressEqual() {
    const [firstAddress, setFirstAddress] = useState('')
    const [secondAddress, setSecondAddress] = useState('')

    const [output, setOutput] = useState('')

    useEffect(() => {
        if (!firstAddress || firstAddress === '') return
        if (!secondAddress || secondAddress === '') return

        // check if they satisfy the type `0x${string}`
        // if not, return false

        if (!firstAddress.startsWith('0x')) return
        if (!secondAddress.startsWith('0x')) return

        if (firstAddress.length !== 42) return
        if (secondAddress.length !== 42) return

        setOutput(
            isAddressEqual(firstAddress as `0x${string}`, secondAddress as `0x${string}`)
                .valueOf()
                .toString()
        )
    }, [firstAddress, secondAddress])

    return (
        <Stack
            direction={{
                sm: 'column',
                md: 'row',
            }}
            spacing={2}
            height={'100%'}
            alignItems={'center'}
        >
            <Sheet
                sx={{
                    height: '100%',
                    width: '100%',
                    maxWidth: {
                        md: '50%',
                        sm: '100%',
                    },
                    alignSelf: 'center',
                }}
            >
                <FormControl size="lg" required={true}>
                    <FormLabel>firstAddress</FormLabel>
                    <Input
                        name="firstAddress"
                        placeholder={'0x...'}
                        onChange={(e) => setFirstAddress(e.target.value)}
                        type="text"
                    />
                </FormControl>
                <FormControl size="lg" required={true}>
                    <FormLabel>secondAddress</FormLabel>
                    <Input
                        name="secondAddress"
                        placeholder={'0x...'}
                        onChange={(e) => setSecondAddress(e.target.value)}
                        type="text"
                    />
                </FormControl>
            </Sheet>

            <Sheet
                sx={{
                    height: '100%',
                    minHeight: '100px',
                    width: '100%',
                    maxWidth: {
                        md: '50%',
                        sm: '100%',
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    borderRadius: 'md',
                }}
                variant="soft"
            >
                <Typography
                    level="body-md"
                    sx={{
                        display: 'inline-block',
                        whiteSpace: 'nowrap',
                        overflow: 'scroll',
                        textOverflow: 'ellipsis',
                        wordBreak: 'break-all',
                        wordWrap: 'break-word',
                        maxWidth: '90%',
                    }}
                >
                    {output ||
                        'Output will appear here. You can scroll the text if it becomes too long.'}
                </Typography>
            </Sheet>
        </Stack>
    )
}