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
import { Numbers } from 'web3'
import { toNumber } from 'web3-utils'

export default function ToNumber() {
  const [num, setNum] = useState<Numbers>()

  const [output, setOutput] = useState<number | bigint>()

  const handleChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setNum(undefined)
      return
    }
    setNum(value)
  }

  useEffect(() => {
    if (!num || num === '') {
      setOutput(undefined)
      return
    }
    setOutput(toNumber(num))
  }, [num])

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
          <FormLabel>str | Bytes Eg. "12, 34, 56, 78"</FormLabel>
          <Input
            name='toNumber'
            placeholder={'Native web3js "str | bytes" parameter.'}
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
          {(output && output.toString()) ||
            'Output will appear here. You can scroll the text if it becomes too long.'}
        </Typography>
      </Sheet>
    </Stack>
  )
}
