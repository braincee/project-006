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
import { Timer, rejectIfTimeout } from 'web3-utils'

export default function RejectIfTimeout() {
  const [message, setMessage] = useState('')
  const [timeout, setTimeout] = useState<number>()

  const [output, setOutput] = useState<[Timer, Promise<never>]>()

  useEffect(() => {
    if (!message || message === '' || !timeout || typeof timeout != 'number') {
      setOutput(undefined)
      return
    }
    const error = new Error(message)
    setOutput(rejectIfTimeout(timeout, error))
  }, [message, timeout])

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
          <FormLabel>timeout</FormLabel>
          <Input
            name='timeOut'
            placeholder={'Native web3js "number" parameter.'}
            onChange={(e) => setTimeout(Number(e.target.value))}
            type='number'
          />
        </FormControl>
        <FormControl
          size='lg'
          required={true}
          sx={{
            flexGrow: 1,
          }}
        >
          <FormLabel>Error Message</FormLabel>
          <Input
            name='message'
            placeholder={'Native web3js "str" parameter.'}
            onChange={(e) => setMessage(e.target.value)}
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
          {(output && `[${output.toString()}]`) ||
            'Output will appear here. You can scroll the text if it becomes too long.'}
        </Typography>
      </Sheet>
    </Stack>
  )
}
