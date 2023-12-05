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
import { parseEther } from 'viem'

export default function ParseEther() {

    const [etherValue, setEtherValue] = useState<string>('');
    const [parsedValue, setParsedValue] = useState<bigint | string>();
  
    useEffect(() => {
      if (!etherValue || etherValue === '') {
        setParsedValue('');
        return;
      }
  
      try {
        const parsed = parseEther(etherValue);
        setParsedValue(parsed.toString());
      } catch (error) {
        setParsedValue('');
      }
    }, [etherValue]);
  
    const handleEtherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setEtherValue(value);
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
                    <FormLabel>str</FormLabel>
                    <Input
                        name="ParseEther"
                        placeholder={'String representative of Ether'}
                        value={etherValue}
                        onChange={handleEtherChange}
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
                    {(parsedValue?.toString()) ||
                        'Output will appear here. You can scroll the text if it becomes too long.'}
                </Typography>
            </Sheet>
        </Stack>
    )
}