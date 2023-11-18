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
import { AsyncFunction, waitWithTimeout } from 'web3-utils'

export default function WaitWithTimeout<T>() {
  const [awaitable, setAwaitable] = useState<
    Promise<T> | AsyncFunction<T, unknown>
  >()
  const [timeout, setTimeout] = useState<number>()
  const [errorMessage, setErrorMessage] = useState('')

  const [output, setOutput] = useState<Promise<unknown>>()

  const handleChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setAwaitable(undefined)
      setOutput(undefined)
      return
    }
  }

  useEffect(() => {
    if (!awaitable || typeof timeout != 'number') {
      setOutput(undefined)
      return
    }
    const error = new Error(errorMessage)
    setOutput(waitWithTimeout(awaitable, timeout, error))
  }, [awaitable, timeout])

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
            onChange={(e) => setTimeout(Number(e.target.value))}
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
          {output?.toString() ||
            'Output will appear here. You can scroll the text if it becomes too long.'}
        </Typography>
      </Sheet>
    </Stack>
  )
}