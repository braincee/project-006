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

import { normalize, namehash } from 'viem/ens';


export default function NameHash() {

    const [ensHash, setEnsHash] = useState<string>('');
   const [ensNameHash, setEnsNameHash] = useState<string>('');

  useEffect(() => {
    if (ensHash.trim() === '') {
      setEnsNameHash('');
      return;
    }

    try {
      const hashed = namehash(normalize(ensHash));
      setEnsNameHash(hashed);
    } catch (error) {
      console.error('Error hashing ENS label:', error);
      setEnsNameHash('');
    }
  }, [ensHash]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnsHash(event.target.value);
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
                    <FormLabel>name hash</FormLabel>
                    <Input
                        type="text"
                        value={ensHash}
                        onChange={handleInputChange}
                        placeholder="Enter an ENS hashes name"
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
                    {ensNameHash ||
                        'Output will appear here. You can scroll the text if it becomes too long.'}
                </Typography>
            </Sheet>
        </Stack>
    )
}