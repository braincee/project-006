'use client'

import {
    FormControl,
    FormLabel,
    Input,
    Sheet,
    Stack,
    Typography,
} from '@mui/joy';

import { useEffect, useState, ChangeEvent } from 'react';
import { parseGwei } from 'viem';

export default function ParseGwei() {
    const [gweiValue, setGweiValue] = useState<string>('');
    const [parsedValue, setParsedValue] = useState<string>('');

    useEffect(() => {
        if (!gweiValue || gweiValue === '') {
            setParsedValue('');
            return;
        }

        try {
            const parsed = parseGwei(gweiValue);
            setParsedValue(parsed.toString());
        } catch (error) {
            setParsedValue('');
        }
    }, [gweiValue]);

    const handleGweiChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setGweiValue(value);
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
                    <FormLabel>String representative of Gwei</FormLabel>
                    <Input
                        name="ParseGwei"
                        placeholder={'String representative of Gwei'}
                        value={gweiValue}
                        onChange={handleGweiChange}
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
                    {parsedValue ||
                        'Output will appear here. You can scroll the text if it becomes too long.'}
                </Typography>
            </Sheet>
        </Stack>
    );
}
