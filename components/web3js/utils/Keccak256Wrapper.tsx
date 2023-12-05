'use client'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Stack,
  Textarea,
  Typography,
} from '@mui/joy'
import { ReactNode, useEffect, useState } from 'react'
import { keccak256Wrapper } from 'web3-utils'

export default function Keccak256Wrapper() {
  const [data, setData] = useState<
    string | number | bigint | Uint8Array | readonly number[]
  >()

  const [output, setOutput] = useState('')

  const handleChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setOutput('')
      return
    }
    if (!value.includes('[') && !value.includes(',')) {
      setData(value)
      return
    }
    if (
      (value.includes('[') && !value.includes(']')) ||
      (value.includes('[') &&
        value.length > 1 &&
        Number.isNaN(Number(value.charAt(1))))
    ) {
      return
    }

    const bytesArray = value
      .split(',')
      .map((byte: string) => Number(byte.trim()))

    // finally, convert the array of numbers to a Uint8Array
    const bytesUint8Array = Uint8Array.from(bytesArray)
    setData(bytesUint8Array)
  }

  useEffect(() => {
    if (!data || data === '') {
      setOutput('')
      return
    }
    setOutput(keccak256Wrapper(data))
  }, [data])

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
          <FormLabel>Data</FormLabel>
          <Input
            name='data'
            placeholder={
              '"string | number | bigint | Uint8Array | readonly number[]"'
            }
            onChange={handleChange}
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
          {output ||
            'Output will appear here. You can scroll the text if it becomes too long.'}
        </Typography>
      </Sheet>
    </Stack>
  )
}
