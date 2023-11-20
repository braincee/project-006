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
import { toBytes } from 'viem';


export default function ToBytes() {
    const [inputValue, setInputValue] = useState<any>('');
  const [result, setResult] = useState<Uint8Array | null>(null);

  useEffect(() => {
    if (!inputValue && inputValue !== 0 && inputValue !== false) {
      setResult(null);
      return;
    }

    try {
      const parsedResult = toBytes(inputValue);
      setResult(parsedResult);
    } catch (error) {
      setResult(null);
    }
  }, [inputValue]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
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
            <FormLabel>str</FormLabel>
            <Input
                name="str"
                placeholder={'eg. Hello World, 0xa....'}
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
       {result !== null && (
          <p>
            Parsed result: {Array.from(result).join(', ')}
          </p>
        )}
        </Typography>
    </Sheet>
</Stack>
  );
}

