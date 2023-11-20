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
import { Numbers } from 'web3'
import { toTwosComplement } from 'web3-utils'

export default function ToTwosComplement() {
  const [num, setNum] = useState<Numbers>()
  const [nibbleWidth, setNibbleWidth] = useState<number>(64)

  const [output, setOutput] = useState('')

  useEffect(() => {
    if (!num || num === '') {
      setOutput('')
      return
    }
    setOutput(toTwosComplement(num, nibbleWidth))
  }, [num, nibbleWidth])

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
          <FormLabel>Numbers ('string | number | bigInt')</FormLabel>
          <Input
            name='Numbers'
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
          <FormLabel>NibbleWidth</FormLabel>
          <Input
            name='nibbleWidth'
            placeholder={'Native web3js "number" parameter.'}
            onChange={(e) => setNibbleWidth(Number(e.target.value))}
            type='number'
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
