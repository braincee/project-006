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
import { formatUnits } from 'viem'

export default function FormatUnits() {

    const [bigNumberValue, setBigNumberValue] = useState<string>('');
    const [formattedValue, setFormattedValue] = useState<string>('');
    const [exponentValue, setExponentValue] = useState<number>(0);
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setBigNumberValue(value);
    };

    const handleExponentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setExponentValue(Number(value));
      };
  
      useEffect(() => {
        try {
          const parsedValue = BigInt(bigNumberValue);
          const formatted = formatUnits(parsedValue, exponentValue);
          setFormattedValue(formatted);
        } catch (error) {
          setFormattedValue('');
        }
      }, [bigNumberValue, exponentValue]);

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
                        name="formatUnits"
                        placeholder={'a number by a given exponent of base 10.'}
                        value={bigNumberValue}
                        onChange={handleInputChange}
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
                    {formattedValue ||
                        'Output will appear here. You can scroll the text if it becomes too long.'}
                </Typography>
            </Sheet>
        </Stack>
    )
}