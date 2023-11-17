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
import { Sha3Input } from 'web3'
import { pollTillDefined } from 'web3-utils'

export default function ProcessSolidityEncodePackedArgs() {
  const [func, setFunc] = useState<any>()
  const [interval, setInterval] = useState<number>()

  const [output, setOutput] = useState<Promise<any>>()

  const handleChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setFunc(undefined)
      setOutput(undefined)
      return
    }
  }

  useEffect(() => {
    if (!func || typeof interval != 'number') {
      setOutput(undefined)
      return
    }
    setOutput(pollTillDefined(func, interval))
  }, [func, interval])

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
          <FormLabel>Async function</FormLabel>
          <Input
            name='func'
            placeholder={'Async function'}
            onChange={handleChange}
            type='string'
          />
        </FormControl>
        <FormControl size='lg' required={true}>
          <FormLabel>Interval</FormLabel>
          <Input
            name='interval'
            placeholder={'Native web3js "number" parameter.'}
            onChange={(e) => setInterval(Number(e.target.value))}
            type='number'
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
