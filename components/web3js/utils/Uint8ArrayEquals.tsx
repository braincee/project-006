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
import { uint8ArrayEquals } from 'web3-utils'

export default function Uint8ArrayEquals() {
  const [byteA, setByteA] = useState<Uint8Array>()
  const [byteB, setByteB] = useState<Uint8Array>()

  const [output, setOutput] = useState<boolean>()

  const handleByteAChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setByteA(undefined)
      return
    }

    const bytesArray = value
      .split(',')
      .map((byte: string) => Number(byte.trim()))

    // finally, convert the array of numbers to a Uint8Array
    const bytesUint8Array = Uint8Array.from(bytesArray)

    setByteA(bytesUint8Array)
  }

  const handleByteBChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setByteB(undefined)
      return
    }

    const bytesArray = value
      .split(',')
      .map((byte: string) => Number(byte.trim()))

    // finally, convert the array of numbers to a Uint8Array
    const bytesUint8Array = Uint8Array.from(bytesArray)

    setByteB(bytesUint8Array)
  }

  useEffect(() => {
    if (!byteA || !byteB || byteA.length === 0 || byteB.length === 0) {
      setOutput(undefined)
      return
    }
    console.log(uint8ArrayEquals(byteA, byteB))
    setOutput(uint8ArrayEquals(byteA, byteB))
  }, [byteA, byteB])

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
          <FormLabel>bytes A Eg. "12, 34, 56, 78"</FormLabel>
          <Input
            name='bytesA'
            placeholder={'12, 34, 56, 78'}
            onChange={handleByteAChange}
            type='string'
          />
        </FormControl>
        <FormControl size='lg' required={true}>
          <FormLabel>bytes B Eg. "12, 34, 56, 78"</FormLabel>
          <Input
            name='bytesB'
            placeholder={'12, 34, 56, 78'}
            onChange={handleByteBChange}
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
          {(output !== undefined && output.toString()) ||
            'Output will appear here. You can scroll the text if it becomes too long.'}
        </Typography>
      </Sheet>
    </Stack>
  )
}
