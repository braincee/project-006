'use client'
import {
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Typography,
  Stack,
} from '@mui/joy'

import { useEffect, useState } from 'react'
import { isBytes } from 'viem'

export default function IsBytes() {
  const [inputArray, setInputArray] = useState<unknown>()
  const [isByteArray, setIsByteArray] = useState<boolean>()

  useEffect(() => {
    if (inputArray === '' || !inputArray) return
    setIsByteArray(isBytes(inputArray))
  }, [inputArray])

  const handleInputChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setIsByteArray(undefined)
      return
    }

    if (!value.includes(',') && Number.isNaN(Number(value))) {
      setInputArray(value)
      return
    }
    const bytesArray = value
      .split(',')
      .map((byte: string) => Number(byte.trim()))

    // finally, convert the array of numbers to a Uint8Array
    const bytesUint8Array = Uint8Array.from(bytesArray)
    setInputArray(bytesUint8Array)
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
          <FormLabel>bytes</FormLabel>
          <Input
            name='bytes'
            placeholder={'12, 34, 56, 78'}
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
          {isByteArray?.toString() ||
            'Output will appear here. You can scroll the text if it becomes too long.'}
        </Typography>
      </Sheet>
    </Stack>
  )
}
