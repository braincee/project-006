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
import { ByteArray, Hex, slice } from 'viem'

export default function Slice() {
  const [inputValue, setInputValue] = useState<Hex | ByteArray>()
  const [startOffset, setStartOffset] = useState<number>()
  const [endOffset, setEndOffset] = useState<number>()
  const [strict, setStrict] = useState<boolean>(false)

  const [slicedValue, setSlicedValue] = useState<any>()

  useEffect(() => {
    if (!inputValue) {
      setSlicedValue(undefined)
      return
    }
    try {
      const sliced = slice(inputValue, startOffset, endOffset, { strict })
      setSlicedValue(sliced)
    } catch (error) {
      setSlicedValue(undefined)
    }
  }, [inputValue, startOffset, endOffset, strict])

  const handleInputChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setSlicedValue(undefined)
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

  const handleSelect = (
    event: React.SyntheticEvent | null,
    newValue: boolean | null
  ) => {
    if (!newValue) return
    setStrict(newValue)
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
          <FormLabel>hex | bytesArray</FormLabel>
          <Input
            name='hex'
            placeholder={'0xa...'}
            onChange={handleInputChange}
            type='string'
          />
        </FormControl>
        <FormControl size='lg'>
          <FormLabel>start</FormLabel>
          <Input
            name='number'
            placeholder={'Number'}
            onChange={(e) => setStartOffset(Number(e.target.value))}
            type='number'
          />
        </FormControl>
        <FormControl size='lg'>
          <FormLabel>end</FormLabel>
          <Input
            name='number'
            placeholder={'Number'}
            onChange={(e) => setEndOffset(Number(e.target.value))}
            type='number'
          />
        </FormControl>
        <FormControl size='lg'>
          <FormLabel>strict</FormLabel>
          <Select
            placeholder={'Native viem "boolean" parameter.'}
            onChange={handleSelect}
          >
            <Option value={true}>TRUE</Option>
            <Option value={false}>FALSE</Option>
          </Select>
          <FormHelperText>
            <Typography level='body-xs'>strict</Typography>
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
          {(slicedValue && `Sliced value: ${slicedValue}`) ||
            'Output will appear here. You can scroll the text if it becomes too long.'}
        </Typography>
      </Sheet>
    </Stack>
  )
}
