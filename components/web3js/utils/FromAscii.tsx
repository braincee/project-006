'use client'

import React, { useState, useEffect } from 'react';
import { fromAscii } from 'web3-utils';
import {
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Stack,
  Typography,
} from '@mui/joy';

export default function FromAscii () {

    const [asciiText, setAsciiText] = useState('');
    const [hexResult, setHexResult] = useState('');
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setAsciiText(value);
    };
  
    useEffect(() => {
      if (!asciiText) {
        setHexResult('');
        return;
      }
      setHexResult(fromAscii(asciiText));
    }, [asciiText]);

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
        <FormControl size="lg" required={true} sx={{ flexGrow: 1 }}>
          <FormLabel>Ascii</FormLabel>
          <Input
            name="fromAscii"
            placeholder={'Enter your words'}
            onChange={handleChange}
            type="text"
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
        variant="soft"
      >
        <Typography
          level="body-md"
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
          {hexResult || 'Hex representation will appear here'}
        </Typography>
      </Sheet>
    </Stack>
  );
};

