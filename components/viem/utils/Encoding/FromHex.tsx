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
import { fromHex } from 'viem';


export default function FromHex() {
    const [inputValue, setInputValue] = useState<string>('');
    const [result, setResult] = useState<any>(null);
    const [targetType, setTargetType] = useState<string>('string');
  
    useEffect(() => {
      if (!inputValue) {
        setResult(null);
        return;
      }
  
      try {
        const parsedResult = fromHex(inputValue, targetType as any);
        setResult(parsedResult);
      } catch (error) {
        setResult(null);
      }
    }, [inputValue, targetType]);
  
    const handleInputChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setInputValue(event.target.value);
    };
  
    const handleTargetTypeChange = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      setTargetType(event.target.value);
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
        <Select value={targetType} onChange={handleTargetTypeChange}>
        <Option value="string">String</Option>
        <Option value="number">Number</Option>
        <Option value="bigint">BigInt</Option>
        <Option value="bytes">Byte Array</Option>
        <Option value="boolean">Boolean</Option>
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

