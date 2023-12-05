'use client'
import {
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Typography,
  Stack,
} from '@mui/joy'

import React, { useState, useEffect } from 'react'
import { ByteArray, Hex, pad } from 'viem'

export default function Pad() {
  const [inputValue, setInputValue] = useState<Hex | ByteArray>()
  const [paddedValue, setPaddedValue] = useState<any>()

  useEffect(() => {
    if (!inputValue) return

    const padded = pad(inputValue)
    if (inputValue.toString().startsWith('0x')) {
      setPaddedValue(padded)
    } else {
      setPaddedValue(padded.toString())
    }
  }, [inputValue])

  const handleInputChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setPaddedValue(undefined)
      return
    }
    if (value.startsWith('0x')) {
      setInputValue(value)
      return
    }

    if (!value.includes(',') && Number.isNaN(Number(value))) return

    const bytesArray = value
      .split(',')
      .map((byte: string) => Number(byte.trim()))

    // finally, convert the array of numbers to a Uint8Array
    const bytesUint8Array = Uint8Array.from(bytesArray)

    setInputValue(bytesUint8Array)
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
        <FormControl size='lg' required={true}>
          <FormLabel>hex</FormLabel>
          <Input
            name='hex'
            placeholder={'0xa...'}
            onChange={handleInputChange}
            type='string'
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
        variant='soft'
      >
        <Typography
          level='body-md'
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
          {paddedValue ||
            'Output will appear here. You can scroll the text if it becomes too long.'}
        </Typography>
      </Sheet>
    </Stack>
  )
}
