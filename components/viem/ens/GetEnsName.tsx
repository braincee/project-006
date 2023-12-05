'use client'
import {
    FormControl,
    FormLabel,
    Input,
    Sheet,
    Stack,
    Typography,
} from '@mui/joy'

import { useEffect, useState } from 'react'

import { publicClient } from './client';

export default function GetEnsName() {

    const [ethAddress, setEthAddress] = useState<string>('');
  const [ensName, setEnsName] = useState<string | null>(null);

  useEffect(() => {
    if (!ethAddress.match(/^0x[a-fA-F0-9]{40}$/)) {
      setEnsName(null);
      return;
    }

    const fetchEnsName = async () => {
      try {
        const retrievedEnsName = await publicClient.getEnsName({ address: ethAddress });
        setEnsName(retrievedEnsName || null);
      } catch (error) {
        console.error('Error retrieving ENS name:', error);
        setEnsName(null);
      }
    };

    fetchEnsName();
  }, [ethAddress]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEthAddress(event.target.value);
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
                <FormControl
                    size="lg"
                    required={true}
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <FormLabel>address</FormLabel>
                    <Input
                          type="text"
                          value={ethAddress}
                          onChange={handleInputChange}
                          placeholder="Enter an Ethereum address"
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
                    {ensName ||
                        'Output will appear here. You can scroll the text if it becomes too long.'}
                </Typography>
            </Sheet>
        </Stack>
    )
}