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
import { hexToUtf8 } from 'web3-utils'

export default function HexToUtf8() {
  const [str, setStr] = useState('')

  const [output, setOutput] = useState<string>('')

  const handleChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setStr('')
      return
    }

    const bytesArray = value
      .split(',')
      .map((byte: string) => Number(byte.trim()))

    // finally, convert the array of numbers to a Uint8Array
    const bytesUint8Array = Uint8Array.from(bytesArray)
    setStr(bytesUint8Array)
  }


  useEffect(() => {
    if (!str || str === '') {
      setOutput('')
      return
    }
    setOutput(hexToUtf8(str))
  }, [str])

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
        <FormControl
          size='lg'
          required={true}
          sx={{
            flexGrow: 1,
          }}
        >
          <FormLabel>hex</FormLabel>
          <Input
            name='hexToUtf8'
            placeholder={'Native web3js "hex" parameter.'}
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
          {output ||
            'Output will appear here. You can scroll the text if it becomes too long.'}
        </Typography>
      </Sheet>
    </Stack>
  )
}
