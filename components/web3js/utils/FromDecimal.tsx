'use client'

import React, { useState, useEffect } from 'react'
import { fromDecimal } from 'web3-utils'
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

export default function FromDecimal() {
  const [decimalValue, setDecimalValue] = useState<string>('')
  const [hexstrict, setHexstrict] = useState<boolean>()
  const [hexValue, setHexValue] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    const sanitizedValue = value.replace(/[^0-9-]/g, '')
    setDecimalValue(sanitizedValue)
  }

  const handleSelect = (
    event: React.SyntheticEvent | null,
    newValue: boolean | null
  ) => {
    if (!newValue) return
    setHexstrict(newValue)
  }

  useEffect(() => {
    if (!decimalValue) {
      setHexValue('')
      return
    }
    const hex = fromDecimal(decimalValue, hexstrict)
    setHexValue(hex)
  }, [decimalValue])

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
        <FormControl size='lg' required={true} sx={{ flexGrow: 1 }}>
          <FormLabel>Decimal</FormLabel>
          <Input
            name='fromDecimal'
            placeholder={'Enter a Number'}
            onChange={handleChange}
            type='text'
          />
        </FormControl>
        <FormControl size='lg'>
          <FormLabel>Hexstrict</FormLabel>
          <Select
            placeholder={'Native web3js "boolean" parameter.'}
            onChange={handleSelect}
          >
            <Option value={true}>TRUE</Option>
            <Option value={false}>FALSE</Option>
          </Select>

          <FormHelperText>
            <Typography level='body-xs'>Hexstrict</Typography>
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
          {hexValue || 'Hex representation will appear here'}
        </Typography>
      </Sheet>
    </Stack>
  )
}
