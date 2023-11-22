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
import { ByteArray, Hex, ToHexParameters, toHex } from 'viem'

export default function ToHex() {
  const [inputValue, setInputValue] = useState<
    string | number | bigint | ByteArray
  >()
  const [targetType, setTargetType] = useState('')
  const [result, setResult] = useState<Hex>()

  useEffect(() => {
    if (!inputValue || inputValue === '') {
      setResult(undefined)
      return
    }

    try {
      const toOrOptions = targetType as ToHexParameters
      const parsedResult = toHex(inputValue, toOrOptions)
      setResult(parsedResult)
    } catch (error) {
      setResult(undefined)
    }
  }, [inputValue])

  const handleInputChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setResult(undefined)
      return
    }
    if (!value.includes(',') || Number.isNaN(Number(value))) {
      setInputValue(value)
    }

    const bytesArray = value
      .split(',')
      .map((byte: string) => Number(byte.trim()))

    // finally, convert the array of numbers to a Uint8Array
    const bytesUint8Array = Uint8Array.from(bytesArray)

    setInputValue(bytesUint8Array)
  }

  const handleTargetTypeChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    function isJsonString(str: string) {
      try {
        JSON.parse(str)
      } catch (e) {
        return false
      }
      return true
    }

    if (
      value.startsWith('{') &&
      value.endsWith('}') &&
      value.includes('to') &&
      value.includes('size') &&
      isJsonString(value)
    ) {
      setTargetType(JSON.parse(value))
    } else {
      return
    }
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
          <FormLabel>string | number | bigint | ByteArray`</FormLabel>
          <Input
            name='str'
            placeholder={'string | number | bigint | ByteArray'}
            onChange={handleInputChange}
            type='string'
          />
        </FormControl>
        <FormControl size='lg'>
          <FormLabel>toOrOptions</FormLabel>
          <Input
            name='toOrOptions'
            placeholder={'{"size": 32}'}
            onChange={handleTargetTypeChange}
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
          {result !== null && <p>Parsed result: {result}</p>}
        </Typography>
      </Sheet>
    </Stack>
  )
}
