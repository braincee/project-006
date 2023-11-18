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
import { slice } from 'viem';

export default function Slice() {
    const [inputValue, setInputValue] = useState('');
  const [startOffset, setStartOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(0);
  const [slicedValue, setSlicedValue] = useState<any>(null);

  useEffect(() => {
    if (!inputValue) {
      setSlicedValue(null);
      return;
    }

    try {
      const sliced = slice(inputValue, startOffset, endOffset);
      setSlicedValue(sliced);
    } catch (error) {
      setSlicedValue(null);
    }
  }, [inputValue, startOffset, endOffset]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleStartOffsetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartOffset(parseInt(event.target.value));
  };

  const handleEndOffsetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndOffset(parseInt(event.target.value));
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
        <FormControl size="lg" required={true}>
            <FormLabel>number</FormLabel>
            <Input
                name="number"
                placeholder={'Number'}
                value={startOffset}
                onChange={handleStartOffsetChange}
                type="number"
            />
        </FormControl>
        <FormControl size="lg" required={true}>
            <FormLabel>number</FormLabel>
            <Input
                name="number"
                placeholder={'Number'}
                value={endOffset}
                onChange={handleEndOffsetChange}
                type="number"
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
        {slicedValue !== null && (
          <p>Sliced value: {JSON.stringify(slicedValue)}</p>
        )}

        </Typography>
    </Sheet>
</Stack>
  );
}

