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
import { parseTransaction } from 'viem';


export default function ParseTransaction() {
  
    const [inputValue, setInputValue] = useState<string>('');
    const [parsedTransaction, setParsedTransaction] = useState<TransactionSerializable | null>(null);
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };
  
    const parseTransactionData = () => {
      try {
        const parsed = parseTransaction(inputValue);
        setParsedTransaction(parsed);
      } catch (error) {
        console.error('Error parsing transaction:', error);
        setParsedTransaction(null);
      }
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
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter serialized RLP-encoded transaction..."
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
         {result !== null && <p>Parsed result: {result}</p>}
        </Typography>
    </Sheet>
</Stack>
  );
}

