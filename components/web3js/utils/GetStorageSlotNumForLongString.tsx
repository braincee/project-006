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
import { getStorageSlotNumForLongString } from 'web3-utils'

export default function GetStorageSlotNumForLongString() {
  const [dataFormat, setDataFormat] = useState<number | string>('')

  const [output, setOutput] = useState<boolean>()

  const handleChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setOutput(false)
      return
    }
    if (typeof value != 'object' || typeof value != 'function') return
    setDataFormat(value)
  }

  useEffect(() => {
    if (!dataFormat || dataFormat === '') {
      setOutput(false)
      return
    }
    setOutput(getStorageSlotNumForLongString(dataFormat))
  }, [dataFormat])

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
          <FormLabel>Number</FormLabel>
          <Input
            name='number'
            placeholder={'1234'}
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
