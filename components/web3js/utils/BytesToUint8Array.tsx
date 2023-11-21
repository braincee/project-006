'use client'

import React, { useState, useEffect } from 'react'
import { bytesToUint8Array } from 'web3-utils'
import {
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Stack,
  Typography,
} from '@mui/joy'
import { Bytes } from 'web3'

export default function BytesToUint8Array() {
  const [inputValue, setInputValue] = useState<Bytes>('')
  const [uint8ArrayValue, setUint8ArrayValue] = useState<Uint8Array>()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    const bytesArray = value
      .split(',')
      .map((byte: string) => Number(byte.trim()))

    // finally, convert the array of numbers to a Uint8Array
    const bytesUint8Array = Uint8Array.from(bytesArray)

    setInputValue(bytesUint8Array)
  }

  useEffect(() => {
    if (!inputValue) {
      setUint8ArrayValue(undefined)
      return
    }
    setUint8ArrayValue(bytesToUint8Array(inputValue))
  }, [inputValue])

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
        <FormControl size='lg' required={true} sx={{ flexGrow: 1 }}>
          <FormLabel>Bytes</FormLabel>
          <Input
            name='bytesToUint8Array'
            placeholder={'0xab'}
            onChange={handleChange}
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
          {uint8ArrayValue ? (
            <pre>{JSON.stringify([...uint8ArrayValue])}</pre>
          ) : (
            'Uint8Array value will appear here'
          )}
        </Typography>
      </Sheet>
    </Stack>
  )
}
