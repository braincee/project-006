'use client'

import React, { useState, useEffect } from 'react';
import { fromUtf8 } from 'web3-utils';
import {
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Stack,
  Typography,
} from '@mui/joy';

export default function FromUtf8 () {

  const [utf8String, setUtf8String] = useState<string>('');

  const [hexString, setHexString] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setUtf8String(value);
  };

  useEffect(() => {
    if (!utf8String || utf8String === '') {
      setHexString('');
      return;
    }
    setHexString(fromUtf8(utf8String));
  }, [utf8String]);

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
          <FormLabel>UTF-8 String</FormLabel>
          <Input
            name="fromUtf8"
            placeholder={'Enter a UTF-8 string'}
            onChange={handleInputChange}
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
          {hexString || 'Hex representation will appear here'}
        </Typography>
      </Sheet>
    </Stack>
  );
};

