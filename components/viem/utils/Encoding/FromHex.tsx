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
import { Hex, fromHex } from 'viem'
import { FromHexParameters } from 'viem/_types/utils/encoding/fromHex'

export default function FromHex() {
  const [inputValue, setInputValue] = useState<Hex>()
  const [targetType, setTargetType] = useState('')
  const [output, setOutput] = useState<any>()

  useEffect(() => {
    if (!inputValue || !targetType) {
      setOutput(undefined)
      return
    }

    try {
      const toOrOptions = targetType as FromHexParameters<
        'string' | 'number' | 'bigint' | 'boolean' | 'bytes'
      >
      const parsedResult = fromHex(inputValue, toOrOptions)
      setOutput(parsedResult)
    } catch (error) {
      setOutput(null)
    }
  }, [inputValue, targetType])

  const handleInputChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setOutput(undefined)
      return
    }

    if (value.startsWith('0x')) {
      setInputValue(value)
      return
    }
  }

  const handleTargetTypeChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value
    if (!value || value === '') {
      setOutput(undefined)
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
          <FormLabel>hex</FormLabel>
          <Input
            name='hex'
            placeholder={'0xa...'}
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
          {(output && `Parsed result: ${output}`) ||
            'Output will appear here. You can scroll the text if it becomes too long.'}
        </Typography>
      </Sheet>
    </Stack>
  )
}
