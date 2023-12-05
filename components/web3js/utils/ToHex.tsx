'use client'
import {
  FormControl,
  FormLabel,
  Input,
  Option,
  Select,
  Sheet,
  Stack,
  Typography,
} from '@mui/joy'
import { useEffect, useState } from 'react'
import { toHex } from 'web3-utils'

export default function ToHex() {
  const [str, setStr] = useState<any>()
  const [type, setType] = useState(false)

  const [output, setOutput] = useState('')

  const handleChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setStr(undefined)
      return
    }
    setStr(value)
  }

  const handleSelect = (
    event: React.SyntheticEvent | null,
    newValue: boolean | null
  ) => {
    if (!newValue) return
    setType(newValue)
  }

  useEffect(() => {
    if (!str || str === '') {
      setOutput('')
      return
    }
    setOutput(toHex(str, type))
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
          <FormLabel>
            string| number | bigint | boolean | object | Uint8Array
          </FormLabel>
          <Input
            name='toHex'
            placeholder={'Native web3js "str | number" parameter.'}
            onChange={handleChange}
            type='string'
          />
        </FormControl>
        <FormControl
          size='lg'
          sx={{
            flexGrow: 1,
          }}
        >
          <FormLabel>str | Bytes Eg. "12, 34, 56, 78"</FormLabel>
          <Select
            placeholder={'Native web3js "boolean" parameter.'}
            onChange={handleSelect}
          >
            <Option value={true}>TRUE</Option>
            <Option value={false}>FALSE</Option>
          </Select>
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
