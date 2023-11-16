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
import { rightPad } from 'web3-utils'

export default function RightPad() {
  const [val, setVal] = useState<Numbers>()
  const [charAmt, setCharAmt] = useState<number>()
  const [sign, setSign] = useState('0')

  const [output, setOutput] = useState('')

  useEffect(() => {
    if (!val || val === '' || !charAmt || typeof charAmt != 'number') {
      setOutput('')
      return
    }
    setOutput(rightPad(val, charAmt, sign))
  }, [val, charAmt])

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
            onChange={(e) => setVal(e.target.value)}
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
          <FormLabel>char Amount</FormLabel>
          <Input
            name='charAmt'
            placeholder={'Native web3js "number" parameter.'}
            onChange={(e) => setCharAmt(Number(e.target.value))}
            type='number'
          />
        </FormControl>
        <FormControl
          size='lg'
          sx={{
            flexGrow: 1,
          }}
        >
          <FormLabel>str</FormLabel>
          <Input
            name='sign'
            placeholder={'Native web3js "str" parameter.'}
            onChange={(e) => setSign(e.target.value)}
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
          {output ||
            'Output will appear here. You can scroll the text if it becomes too long.'}
        </Typography>
      </Sheet>
    </Stack>
  )
}
