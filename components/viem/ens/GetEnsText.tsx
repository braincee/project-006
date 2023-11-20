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

export default function GetEnsText() {

    const [ensName, setEnsName] = useState<string>('');
    const [textRecord, setTextRecord] = useState<string | null>(null);
    const key = 'com.twitter';

    useEffect(() => {
        if (!ensName || !ensName.endsWith('.eth')) {
            setTextRecord(null);
            return;
        }

        const fetchEnsText = async () => {
            try {
                const normalizedEnsName = normalize(ensName);
                const retrievedTextRecord = await publicClient.getEnsText({ name: normalizedEnsName, key });
                setTextRecord(retrievedTextRecord || null);
            } catch (error) {
                console.error('Error retrieving text record:', error);
                setTextRecord(null);
            }
        };

        fetchEnsText();
    }, [ensName, key]);

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
                    {textRecord ||
                        'Output will appear here. You can scroll the text if it becomes too long.'}
                </Typography>
            </Sheet>
        </Stack>
    )
}