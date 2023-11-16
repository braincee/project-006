'use client'

import React, { useState, useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Stack,
  Typography,
} from '@mui/joy';
import { getContractAddress } from 'viem';

export default function GetContractAddress() {
  const [str, setStr] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    if (!str || str === '') return;

    const fetchData = async () => {
      try {
        const contractAddress = await getContractAddress(str);
        setOutput(contractAddress);
      } catch (error) {
        console.error('Error fetching contract address:', error);
        setOutput('Error occurred. Please check the console for details.');
      }
    };

    fetchData();
  }, [str]);

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
          <FormLabel>str</FormLabel>
          <Input
            name="getContractAddress"
            placeholder={'Native viem "str" parameter.'}
            onChange={(e) => setStr(e.target.value)}
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
          {output ||
            'Output will appear here. You can scroll the text if it becomes too long.'}
        </Typography>
      </Sheet>
    </Stack>
  );
}
