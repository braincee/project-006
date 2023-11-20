'use client'
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Option,
  Select,
  Sheet,
  Stack,
  Typography,
} from '@mui/joy'
import { useEffect, useState } from 'react'
import { DataFormat } from 'web3'
import { convertScalarValue } from 'web3-utils'

export default function ConvertScalarValue() {
  const [value, setValue] = useState<unknown>('')
  const [ethType, setEthType] = useState('')
  const [format, setFormat] = useState('')

  const [output, setOutput] = useState('')

  useEffect(() => {
    if (!value || !ethType || ethType === '' || !format) return

    setOutput(
      convertScalarValue(
        value,
        ethType,
        format as unknown as DataFormat
      ) as string
    )
  }, [value, ethType, format])

  const handleChange = (
    event: React.SyntheticEvent | null,
    newValue: string | null
  ) => {
    if (!newValue) return
    setFormat(newValue)
  }

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
          <FormLabel>value</FormLabel>
          <Input
            name='value'
            placeholder={'Native web3js "value" parameter.'}
            onChange={(e) => setValue(e.target.value)}
            type='number'
          />
        </FormControl>
        <FormControl size='lg' required={true}>
          <FormLabel>ethType</FormLabel>
          <Input
            name='ethType'
            placeholder={'Native web3js "ethType" parameter.'}
            onChange={(e) => setEthType(e.target.value)}
            type='text'
          />
        </FormControl>
        <FormControl size='lg' required={true}>
          <FormLabel>format</FormLabel>
          <Select
            placeholder={'Native web3js "format" parameter.'}
            onChange={handleChange}
          >
            <Option value={'NUMBER_NUMBER'}>NUMBER_NUMBER</Option>
            <Option value={'NUMBER_HEX'}>NUMBER_HEX</Option>
            <Option value={'NUMBER_STR'}>NUMBER_STR</Option>
            <Option value={'NUMBER_BIGINT'}>NUMBER_BIGINT</Option>
            <Option value={'BYTES_HEX'}>BYTES_HEX</Option>
            <Option value={'BYTES_UINT8ARRAY'}>BYTES_UINT8ARRAY</Option>
          </Select>

          <FormHelperText>
            <Typography level='body-xs'>web3js DataFormat type.</Typography>
          </FormHelperText>
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
