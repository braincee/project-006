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
import { etherUnits } from 'viem'
import { Numbers } from 'web3'
import { toWei } from 'web3-utils'

export default function ToWei() {
  const [num, setNum] = useState<Numbers>()
  const [unit, setUnit] = useState<keyof typeof etherUnits>()
  const [output, setOutput] = useState('')

  useEffect(() => {
    if (!num || !unit) return
    setOutput(toWei(num, unit))
  }, [num, unit])

  const handleUnitValueChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value
    const etherUnits = [
      'noether',
      'wei',
      'kwei',
      'Kwei',
      'babbage',
      'femtoether',
      'mwei',
      'Mwei',
      'lovelace',
      'picoether',
      'gwei',
      'Gwei',
      'shannon',
      'nanoether',
      'nano',
      'szabo',
      'microether',
      'micro',
      'finney',
      'milliether',
      'milli',
      'ether',
      'kether',
      'grand',
      'mether',
      'gether',
      'tether',
    ]

    if (!value || value === '' || !etherUnits.includes(value)) {
      setUnit(undefined)
      return
    }
    setUnit(value)
  }

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
          <FormLabel>Numbers ('string | number | bigInt') </FormLabel>
          <Input
            name='number'
            placeholder={'Native web3js "Numbers" parameter.'}
            onChange={(e) => setNum(e.target.value)}
            type='string'
          />
        </FormControl>
        <FormControl
          size='lg'
          required={true}
          sx={{
            flexGrow: 1,
          }}
        >
          <FormLabel>Unit (EtherUnits) as string</FormLabel>
          <Input
            name='unit'
            placeholder={'Native web3js "EtherUnits" parameter.'}
            onChange={handleUnitValueChange}
            type='string'
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
          {output ||
            'Output will appear here. You can scroll the text if it becomes too long.'}
        </Typography>
      </Sheet>
    </Stack>
  )
}
