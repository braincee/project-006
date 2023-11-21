'use client'
import {
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Typography,
  Stack,
  Select,
  Option,
  FormHelperText,
} from '@mui/joy'

import React, { useState, useEffect } from 'react'
import { ByteArray, Hex, trim } from 'viem'

export default function Trim() {
  const [inputValue, setInputValue] = useState<Hex | ByteArray>()
  const [dir, setDir] = useState('')
  const [trimmedValue, setTrimmedValue] = useState<any>(null)

  useEffect(() => {
    if (!inputValue) {
      setTrimmedValue(null)
      return
    }

    try {
      const myDir = dir as 'left' | 'right'
      const trimmed = trim(inputValue, { dir: myDir })
      setTrimmedValue(trimmed)
    } catch (error) {
      setTrimmedValue(null)
    }
  }, [inputValue, dir])

  const handleSelect = (
    event: React.SyntheticEvent | null,
    newValue: string | null
  ) => {
    if (!newValue) return
    setDir(newValue)
  }

  const handleInputChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setTrimmedValue(undefined)
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
        <FormControl size='lg'>
          <FormLabel>direction</FormLabel>
          <Select placeholder={'left or right'} onChange={handleSelect}>
            <Option value={'left'}>LEFT</Option>
            <Option value={'right'}>RIGHT</Option>
          </Select>
          <FormHelperText>
            <Typography level='body-xs'>
              The direction in which to trim the zero byte data - either leading
              (left), or trailing (right).
            </Typography>
          </FormHelperText>
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
          {trimmedValue &&
            (`Trimmed value: ${trimmedValue}` ||
              'Output will appear here. You can scroll the text if it becomes too long.')}
        </Typography>
      </Sheet>
    </Stack>
  )
}
