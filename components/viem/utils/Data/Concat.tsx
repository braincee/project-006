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
import { concat } from 'viem'

export default function Concat() {

    const [hexValue1, setHexValue1] = useState<string>('');
    const [hexValue2, setHexValue2] = useState<string>('');
    const [concatenatedValue, setConcatenatedValue] = useState<string | Uint8Array>('');
  
    useEffect(() => {
      if (hexValue1 && hexValue2) {
        try {
          const concatenated = concat([`${hexValue1}`, `${hexValue2}`]);
          setConcatenatedValue(concatenated);
        } catch (error) {
          console.error('Error concatenating values:', error);
          setConcatenatedValue('');
        }
      } else {
        setConcatenatedValue('');
      }
    }, [hexValue1, hexValue2]);


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
                    <FormLabel>hex</FormLabel>
                    <Input
                        name="concat"
                        placeholder={"Hex value"}
                        value={hexValue1}
                        onChange={(e) => setHexValue1(e.target.value)}
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
                    <FormLabel>hex value</FormLabel>
                    <Input
                        name="concat"
                        placeholder={"Hex value"}
                        value={hexValue2}
                        onChange={(e) => setHexValue2(e.target.value)}
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
                    {concatenatedValue ||
                        'Output will appear here. You can scroll the text if it becomes too long.'}
                </Typography>
            </Sheet>
        </Stack>
    )
}