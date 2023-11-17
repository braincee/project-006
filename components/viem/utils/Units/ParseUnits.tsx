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
import { parseUnits } from 'viem'

export default function ParseUnits() {

    const [stringValue, setStringValue] = useState<string>('');
    const [exponentValue, setExponentValue] = useState<string>('');
    const [parsedValue, setParsedValue] = useState<string>('');

    useEffect(() => {
        if (!stringValue || !exponentValue || stringValue === '' || exponentValue === '') {
            setParsedValue('');
            return;
        }

        try {
            const parsed = parseUnits(stringValue, parseInt(exponentValue));
            setParsedValue(parsed.toString());
        } catch (error) {
            setParsedValue('');
        }
    }, [stringValue, exponentValue]);

    const handleStringChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setStringValue(value);
    };

    const handleExponentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setExponentValue(value);
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
                    <FormLabel>number</FormLabel>
                    <Input
                        name="parseUnits"
                        placeholder={'a number by a given exponent of base 10.'}
                        value={stringValue}
                        onChange={handleStringChange}
                        type="text"
                    />
                </FormControl>
                <FormControl
                    size="lg"
                    required={true}
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    <FormLabel>Enter Exponent</FormLabel>
                    <Input
                        placeholder={'Enter exponent here.'}
                        value={exponentValue}
                        onChange={handleExponentChange}
                        type="number"
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
    )
}