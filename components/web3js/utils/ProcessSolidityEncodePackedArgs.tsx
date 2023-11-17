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
import { processSolidityEncodePackedArgs } from 'web3-utils'

export default function ProcessSolidityEncodePackedArgs() {
  const [myArg, setMyArg] = useState<Sha3Input>()
  const [output, setOutput] = useState<string>('')

  const handleChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setMyArg(undefined)
      setOutput('')
      return
    }

    function isJsonString(str: string) {
      try {
        JSON.parse(str)
      } catch (e) {
        return false
      }
      return true
    }

    if (value === 'true' || value === 'false') {
      setMyArg(value)
      return
    } else if (
      typeof value === 'string' &&
      !isJsonString(value) &&
      value.startsWith('0x') &&
      value.length >= 4
    ) {
      setMyArg(value)
      return
    }

    if (
      !isJsonString(value) ||
      !value.includes('"value"') ||
      !value.includes('"type"')
    )
      return

    const jsonValue = JSON.parse(value)
    setMyArg(jsonValue)
  }

  useEffect(() => {
    if (!myArg || myArg === '') {
      setOutput('')
      return
    }
    setOutput(processSolidityEncodePackedArgs(myArg))
  }, [myArg])

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
          <FormLabel>Typed Object | Numbers | boolean</FormLabel>
          <Input
            name='typedObject'
            placeholder={`{"type": "string", "value": "Hello World" }`}
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
