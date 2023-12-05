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
import { ByteArray, FromBytesParameters, Hex, fromBytes } from 'viem'

export default function FromBytes() {
  const [inputValue, setInputValue] = useState<ByteArray>()
  const [targetType, setTargetType] = useState('')
  const [result, setResult] = useState<any>()

  useEffect(() => {
    if (!inputValue || !targetType) {
      setResult(undefined)
      return
    }

    try {
      const toOrOptions = targetType as FromBytesParameters<
        'string' | 'number' | 'bigint' | 'boolean' | 'hex'
      >
      const parsedResult = fromBytes(inputValue, toOrOptions)
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

    const bytesArray = value
      .split(',')
      .map((byte: string) => Number(byte.trim()))

    // finally, convert the array of numbers to a Uint8Array
    const bytesUint8Array = Uint8Array.from(bytesArray)

    setInputValue(bytesUint8Array)
  }

  const handleTargetTypeChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value
    if (!value || value === '') {
      setResult(undefined)
      return
    }

    function isJsonString(str: string) {
      try {
        JSON.parse(str)
      } catch (e) {
        return false
      }
      return true
    }

    let options = ['string', 'hex', 'number', 'bigint', 'boolean']
    if (
      value.startsWith('{') &&
      value.endsWith('}') &&
      value.includes('to') &&
      value.includes('size') &&
      isJsonString(value)
    ) {
      setTargetType(JSON.parse(value))
    }
    if (!options.includes(value)) {
      return
    }

    setTargetType(value)
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
          <FormLabel>ByteArray</FormLabel>
          <Input
            name='ByteArray'
            placeholder={'12, 34, 56, 78'}
            onChange={handleInputChange}
            type='string'
          />
        </FormControl>
        <FormControl size='lg' required={true}>
          <FormLabel>toOrOptions</FormLabel>
          <Input
            name='toOrOptions'
            placeholder={
              'string | hex | number | bigint | boolean | {"to": "string", "size": 32}'
            }
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
          {(result && `Parsed result: ${result}`) ||
            'Output will appear here. You can scroll the text if it becomes too long.'}
        </Typography>
      </Sheet>
    </Stack>
  )
}
