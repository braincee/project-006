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
import { numberToHex } from 'web3-utils'
import { Numbers } from 'web3'

export default function NumberToHex() {
    const [number, setNumber] = useState<Numbers>(0);
    const [hexOutput, setHexOutput] = useState<string>('');

  const handleChange = (event: React.BaseSyntheticEvent) => {

    const value = event.target.value;
    const parsedNumber = parseInt(value, 10);
    setNumber(isNaN(parsedNumber) ? 0 : parsedNumber);
  }

  useEffect(() => {
    const hexValue = numberToHex(number);
    setHexOutput(hexValue);
  }, [number]);

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
          <FormLabel>number</FormLabel>
          <Input
            name='stringToHex'
            placeholder={'Native web3js "number" parameter.'}
            onChange={handleChange}
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
          {(hexOutput && hexOutput.toString()) ||
            'Output will appear here. You can scroll the text if it becomes too long.'}
        </Typography>
      </Sheet>
    </Stack>
  )
}
