'use client'
import {
    FormControl,
    FormLabel,
    Input,
    Sheet,
    Typography,
    Stack,
} from '@mui/joy'

import { useEffect, useState } from 'react'
import { isBytes } from 'viem'

export default function isBytes() {

  const [inputArray, setInputArray] = useState<number[] | Uint8Array>([]);
  const [isByteArray, setIsByteArray] = useState<boolean | null>(null);

  useEffect(() => {
    if (inputArray.length < 2) {
      setIsByteArray(null);
      return;
    }
  
    try {
      const result = isBytes(Uint8Array.from(inputArray));
      setIsByteArray(result);
    } catch (error) {
      setIsByteArray(null);
    }
  }, [inputArray]);
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numbers = value.split(',').map((numStr) => parseInt(numStr.trim()));
  
    if (numbers.some(isNaN)) {
      console.log("Invalid input");
      setInputArray([]);
    } else {
      console.log("Input values:", numbers);
      setInputArray(numbers);
    }
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
                <FormControl size="lg" required={true}>
                    <FormLabel>bytes</FormLabel>
                    <Input
                        name="bytes"
                        placeholder={'12, 34, 56, 78'}
                        onChange={handleInputChange}
                        type="string"
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
                  {isByteArray !== null && (
                    <p>{isByteArray ? true: false}</p>
                    )}
                </Typography>
            </Sheet>
        </Stack>
    )
}