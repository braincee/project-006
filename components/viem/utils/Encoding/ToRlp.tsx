'use client'
import {
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Typography,
  Stack,
  Option,
  Select,
} from '@mui/joy'

import React, { useState, useEffect } from 'react'
import { ByteArray, Hex, toRlp } from 'viem'

export default function ToRlp() {
  const [inputValue, setInputValue] = useState<Hex | ByteArray>()
  const [valueType, setValueType] = useState('')
  const [result, setResult] = useState<any>()

  useEffect(() => {
    if (!inputValue) {
      setResult(undefined)
      return
    }

    try {
      const myValueType = valueType as 'bytes' | 'hex'
      const parsedResult = toRlp(inputValue, myValueType)
      setResult(parsedResult)
    } catch (error) {
      setResult(undefined)
    }
  }, [inputValue, valueType])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    if (!value || value === '') {
      setResult(undefined)
      return
    }
    if (value.startsWith('0x')) {
      let myValue = value as `0x${string}`
      setInputValue(myValue)
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

  const handleSelectChange = (
    event: React.SyntheticEvent | null,
    newValue: string | null
  ) => {
    if (!newValue) return
    setValueType(newValue)
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
        <FormControl size='lg'>
          <FormLabel>hex | bytes</FormLabel>
          <Input
            name='hex'
            placeholder={'0xa... | 12, 34, 56, 78'}
            onChange={handleInputChange}
            type='string'
          />
        </FormControl>
        <Select onChange={handleSelectChange}>
          <Option value='hex'>Hex</Option>
          <Option value='bytes'>Bytes</Option>
        </Select>
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
          {result !== null && <p>Parsed result: {JSON.stringify(result)}</p>}
        </Typography>
      </Sheet>
    </Stack>
  )
}
