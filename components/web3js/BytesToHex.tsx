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
    Option,
    Select,
    Sheet,
    Stack,
    Textarea,
    ToggleButtonGroup,
    Typography,
} from '@mui/joy'
import { Metadata } from 'next'
import { useEffect, useState } from 'react'
import { ArrowRightCircle, Info } from 'react-feather'
import { DataFormat, ETH_DATA_FORMAT, FMT_NUMBER } from 'web3'
import { bytesToHex } from 'web3-utils'

export default function BytesToHex() {
    const [bytes, setBytes] = useState<Uint8Array>()

    const [output, setOutput] = useState('')

    useEffect(() => {
        if (!bytes || bytes.length === 0) return
        console.log('bytes', bytes)
        setOutput(bytesToHex(bytes))
    }, [bytes])

    const handleChange = (event: React.BaseSyntheticEvent) => {
        const value = event.target.value

        if (!value || value === '') {
            setBytes(undefined)
            return
        }

        // value is a string in the form of '12, 34, 56, 78'
        // this string needs to be converted to a Uint8Array before it can be passed to bytesToHex
        // Uint8Array.from() is the way to do this

        // first, split the string into an array of strings
        // then, convert each string to a number

        const bytesArray = value.split(',').map((byte: string) => Number(byte.trim()))

        // finally, convert the array of numbers to a Uint8Array
        const bytesUint8Array = Uint8Array.from(bytesArray)

        setBytes(bytesUint8Array)
    }

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
                    <FormLabel>bytes</FormLabel>
                    <Input
                        name="bytes"
                        placeholder={'12, 34, 56, 78'}
                        onChange={handleChange}
                        type="string"
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