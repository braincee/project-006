'use client'
import {
    FormControl,
    FormLabel,
    Input,
    Sheet,
    Typography,
    Stack,
    Option,
    Select,
} from '@mui/joy'

import React, { useState, useEffect } from 'react';
import { fromRlp } from 'viem';

type ValueType = 'hex' | 'bytes';

export default function FromRlp() {
    const [inputValue, setInputValue] = useState('');
    const [valueType, setValueType] = useState<ValueType>('hex');
    const [result, setResult] = useState<any>(null);
  
    useEffect(() => {
      if (!inputValue) {
        setResult(null);
        return;
      }
  
      try {
        const parsedResult = fromRlp(inputValue, valueType);
        setResult(parsedResult);
      } catch (error) {
        setResult(null);
      }
    }, [inputValue, valueType]);
  
    const handleInputChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setInputValue(event.target.value);
    };
  
    const handleSelectChange = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      setValueType(event.target.value as ValueType);
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
        <Select value={valueType} onChange={handleSelectChange}>
            <Option value="hex">Hex</Option>
            <Option value="bytes">Bytes</Option>
        </Select>
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
          <p>Parsed result: {JSON.stringify(result)}</p>
        )}
        </Typography>
    </Sheet>
</Stack>
  );
}

