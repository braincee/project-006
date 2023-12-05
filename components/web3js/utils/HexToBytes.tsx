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
import { hexToBytes } from 'web3-utils'

export default function HexToBytes() {

    const [hexString, setHexString] = useState<string>('');
    const [byteArray, setByteArray] = useState<Uint8Array>();
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setHexString(value);
    };
  
    useEffect(() => {
      if (!hexString) {
        setByteArray(undefined);
        return;
      }
  
      try {
        const bytes = hexToBytes(hexString);
        setByteArray(bytes);
      } catch (error) {
        console.error('Error converting hex to bytes:', error);
        setByteArray(undefined);
      }
    }, [hexString]);

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
          size='lg'
          required={true}
          sx={{
            flexGrow: 1,
          }}
        >
          <FormLabel>hex</FormLabel>
          <Input
            name='hexToBytes'
            placeholder={'Native web3js "hex" parameter.'}
            onChange={handleChange}
            type='text'
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
        variant='soft'
      >
        <Typography
          level='body-md'
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
          {byteArray ? JSON.stringify([...byteArray]) : 
            'Output will appear here. You can scroll the text if it becomes too long.'}
        </Typography>
      </Sheet>
    </Stack>
  )
}
