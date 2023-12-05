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

import { normalize } from 'viem/ens';
import { publicClient } from './client';

export default function GetEnsAvatar() {

    const [ensName, setEnsName] = useState<string>('');
    const [avatarUri, setAvatarUri] = useState<string | null>(null);
  
    useEffect(() => {
      if (ensName === '') {
        setAvatarUri(null);
        return;
      }
  
      const fetchEnsAvatar = async () => {
        try {
          const normalizedEnsName = normalize(ensName);
          const avatar = await publicClient.getEnsAvatar({ name: normalizedEnsName });
          setAvatarUri(avatar || null);
        } catch (error) {
          console.error('Error retrieving ENS avatar:', error);
          setAvatarUri(null);
        }
      };
  
      fetchEnsAvatar();
    }, [ensName]);
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEnsName(event.target.value);
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
                    <FormLabel>ens</FormLabel>
                    <Input
                        type="text"
                        value={ensName}
                        onChange={handleInputChange}
                        placeholder="Enter an ENS name"
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
                    {avatarUri ||
                        'Output will appear here. You can scroll the text if it becomes too long.'}
                </Typography>
            </Sheet>
        </Stack>
    )
}