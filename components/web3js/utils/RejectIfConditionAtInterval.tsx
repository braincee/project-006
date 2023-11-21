'use client'
import {
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Stack,
  Textarea,
  Typography,
} from '@mui/joy'
import { useEffect, useState } from 'react'
import { AsyncFunction, Timer, rejectIfConditionAtInterval } from 'web3-utils'

export default function RejectIfConditionAtInterval<T>() {
  const [cond, setCond] = useState<AsyncFunction<undefined | T, unknown>>()
  const [interval, setInterval] = useState<number>()

  const [output, setOutput] = useState<[Timer, Promise<never>]>()

  const handleChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setCond(undefined)
      setOutput(undefined)
      return
    }
    if (!value.includes('async')) return
    let myFunction = value.parseFunction()
    setCond(myFunction)
  }

  useEffect(() => {
    if (!cond || typeof interval != 'number') {
      setOutput(undefined)
      return
    }
    setOutput(rejectIfConditionAtInterval(cond, interval))
  }, [cond, interval])

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
          <FormLabel>Async function</FormLabel>
          <Textarea
            name='cond'
            placeholder={'Async function'}
            onChange={handleChange}
            minRows={2}
          />
        </FormControl>
        <FormControl
          size='lg'
          required={true}
          sx={{
            flexGrow: 1,
          }}
        >
          <FormLabel>Interval in milliseconds</FormLabel>
          <Input
            name='interval'
            placeholder={'Native web3js "str" parameter.'}
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
          {(output && `[${output.toString()}]`) ||
            'Output will appear here. You can scroll the text if it becomes too long.'}
        </Typography>
      </Sheet>
    </Stack>
  )
}
