'use client'
import {
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Stack,
  Typography,
} from '@mui/joy'

import { useEffect, useState } from 'react'
import { ByteArray, Hex, concat } from 'viem'

export default function Concat() {
  const [hexValue1, setHexValue1] = useState<Hex | ByteArray>()
  const [hexValue2, setHexValue2] = useState<Hex | ByteArray>()
  const [concatenatedValue, setConcatenatedValue] = useState<Hex | Uint8Array>()

  const handleHexValue1Change = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setHexValue1(undefined)
      return
    }
    if (value.startsWith('0x')) {
      setHexValue1(value)
      return
    }
    if (!value.includes(',') && Number.isNaN(Number(value))) return

    const bytesArray = value
      .split(',')
      .map((byte: string) => Number(byte.trim()))

    // finally, convert the array of numbers to a Uint8Array
    const bytesUint8Array = Uint8Array.from(bytesArray)

    setHexValue1(bytesUint8Array)
  }

  const handleHexValue2Change = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setHexValue2(undefined)
      return
    }
    if (
      !value.includes(',') &&
      Number.isNaN(Number(value)) &&
      value.startsWith('0x')
    ) {
      setHexValue2(value)
      return
    }

    const bytesArray = value
      .split(',')
      .map((byte: string) => Number(byte.trim()))

    // finally, convert the array of numbers to a Uint8Array
    const bytesUint8Array = Uint8Array.from(bytesArray)

    setHexValue2(bytesUint8Array)
  }

  useEffect(() => {
    if (hexValue1 && hexValue2) {
      try {
        const concatenated = concat([hexValue1, hexValue2])
        setConcatenatedValue(concatenated)
      } catch (error) {
        console.error('Error concatenating values:', error)
        setConcatenatedValue(undefined)
      }
    } else {
      setConcatenatedValue(undefined)
    }
  }, [hexValue1, hexValue2])

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
        <FormControl
          size='lg'
          required={true}
          sx={{
            flexGrow: 1,
          }}
        >
          <FormLabel>hex</FormLabel>
          <Input
            name='concat'
            placeholder={'Hex value'}
            onChange={handleHexValue1Change}
            type='text'
          />
        </FormControl>
        <FormControl
          size='lg'
          required={true}
          sx={{
            flexGrow: 1,
          }}
        >
          <FormLabel>hex value</FormLabel>
          <Input
            name='concat'
            placeholder={'Hex value'}
            onChange={handleHexValue2Change}
            type='text'
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
          {concatenatedValue ||
            'Output will appear here. You can scroll the text if it becomes too long.'}
        </Typography>
      </Sheet>
    </Stack>
  )
}
