'use client'
import {
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Stack,
  Typography,
  Textarea,
} from '@mui/joy'
import { useEffect, useState } from 'react'
import { DataFormat, FormatType } from 'web3'
import { format } from 'web3-utils'

export default function Format() {
  const [schema, setSchema] = useState<object>()
  const [data, setData] = useState('')
  const [returnFormat, setreturnFormat] = useState('')

  const [output, setOutput] = useState('')

  const handleChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setOutput('')
      return
    }
    if (typeof value != 'object' || typeof value != 'function') return
  }

  useEffect(() => {
    if (!schema || !data || !returnFormat) {
      setOutput('')
      return
    }
    setOutput(
      format(schema, data, returnFormat as unknown as DataFormat) as string
    )
  }, [schema, data, returnFormat])

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
          <FormLabel>Validation Schema | Schema</FormLabel>
          <Textarea
            name='schema'
            placeholder={'Validation Schema | Schema'}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl size='lg' required={true}>
          <FormLabel>Data Type</FormLabel>
          <Input
            name='data'
            placeholder={'Data type'}
            onChange={(e) => setData(e.target.value)}
            type='string'
          />
        </FormControl>
        <FormControl size='lg' required={true}>
          <FormLabel>Return Type</FormLabel>
          <Input
            name='returnType'
            placeholder={'Data format'}
            onChange={(e) => setreturnFormat(e.target.value)}
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
