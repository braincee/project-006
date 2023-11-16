'use client'
import {
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Stack,
  Typography,
  Select,
  Option,
} from '@mui/joy'
import { useEffect, useState } from 'react'
import { fromWei } from 'web3-utils'

type EtherUnits =
  | 'noether'
  | 'wei'
  | 'kwei'
  | 'Kwei'
  | 'babbage'
  | 'femtoether'
  | 'mwei'
  | 'Mwei'
  | 'lovelace'
  | 'picoether'
  | 'gwei'
  | 'Gwei'
  | 'shannon'
  | 'nanoether'
  | 'nano'
  | 'szabo'
  | 'microether'
  | 'micro'
  | 'finney'
  | 'milliether'
  | 'milli'
  | 'ether'
  | 'kether'
  | 'grand'
  | 'mether'
  | 'gether'
  | 'tether';

export default function FromWei() {

    const [weiValue, setWeiValue] = useState<string>('');
    const [selectedUnit, setSelectedUnit] = useState<EtherUnits>('ether');
    const [convertedValue, setConvertedValue] = useState<string>('');
  
    const handleWeiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setWeiValue(value);
    };
  
    const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      if (event && event.target) {
        const value = event.target.value as EtherUnits;
        setSelectedUnit(value);
      }
    };
  
    useEffect(() => {
      if (!weiValue) {
        setConvertedValue('');
        return;
      }
  
      try {
        const converted = fromWei(weiValue, selectedUnit);
        setConvertedValue(converted);
      } catch (error) {
        console.error('Error converting from Wei:', error);
        setConvertedValue('');
      }
    }, [weiValue, selectedUnit]);

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
          <FormLabel>Wei</FormLabel>
          <Input
            name='fromWei'
            placeholder={'Native web3js "wei" parameter.'}
            onChange={handleWeiChange}
            type='text'
          />
        </FormControl>
        <FormControl size="lg" required={true} sx={{ flexGrow: 1 }}>
          <FormLabel>Unit</FormLabel>
          <Input
            onChange={handleUnitChange}
            placeholder={'Native web3js "EtherUnit" parameter.'}
            value={selectedUnit}
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
           {convertedValue || 'Converted value will appear here'}
        </Typography>
      </Sheet>
    </Stack>
  )
}
