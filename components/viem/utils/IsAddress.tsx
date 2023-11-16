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
import { isAddress } from 'viem';

export default function IsAddress() {
  const [address, setAddress] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (!address || address === '') return;

    const checkAddressValidity = async () => {
      try {
        const isValidAddress = await isAddress(address);
        setIsValid(isValidAddress);
      } catch (error) {
        console.error('Error checking address validity:', error);
        setIsValid(false); // Set to false in case of an error
      }
    };

    checkAddressValidity();
  }, [address]);

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
          <FormLabel>Address</FormLabel>
          <Input
            name="checkContractAddress"
            placeholder={'Enter the contract address'}
            onChange={(e) => setAddress(e.target.value)}
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
          {isValid ? 'Valid Address' : ''}
        </Typography>
      </Sheet>
    </Stack>
  );
}
