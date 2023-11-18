'use client'
import {
    FormControl,
    FormLabel,
    Input,
    Sheet,
    Typography,
    Stack,
} from '@mui/joy'

import React, { useState, useEffect } from 'react';
import { pad } from 'viem';

export default function Pad() {
    const [inputValue, setInputValue] = useState('');
  const [paddedValue, setPaddedValue] = useState<any>(null);

  useEffect(() => {
    if (!inputValue) {
      setPaddedValue(null);
      return;
    }

    try {
      const padded = pad(inputValue);
      setPaddedValue(padded);
    } catch (error) {
      setPaddedValue(null);
    }
  }, [inputValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  
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
        <FormControl size="lg" required={true}>
            <FormLabel>hex</FormLabel>
            <Input
                name="hex"
                placeholder={'0xa...'}
                value={inputValue}
                onChange={handleInputChange}
                type="string"
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
       {paddedValue !== null && (
          <p>Padded value: {JSON.stringify(paddedValue)}</p>
        )}
        </Typography>
    </Sheet>
</Stack>
  );
}

