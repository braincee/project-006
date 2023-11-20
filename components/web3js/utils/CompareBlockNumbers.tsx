'use client'
import {
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Stack,
  Typography,
  Textarea,
} from '@mui/joy'
import { useEffect, useState } from 'react'
import { BlockNumberOrTag } from 'web3'
import { compareBlockNumbers } from 'web3-utils'

export default function CompareBlockNumbers() {
  const [blockA, setBlockA] = useState<BlockNumberOrTag>('')
  const [blockB, setBlockB] = useState<BlockNumberOrTag>('')

  const [output, setOutput] = useState<number>()

  useEffect(() => {
    if (!blockA || blockA === '' || !blockB || blockB === '') {
      setOutput(undefined)
      return
    }
    setOutput(compareBlockNumbers(blockA, blockB))
  }, [blockA, blockB])

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
        <FormControl size='lg' required={true}>
          <FormLabel>Numbers || BlockTag</FormLabel>
          <Input
            name='blockA'
            placeholder={'Native web3js "Numbers | BlockTag" parameter.'}
            onChange={(e) => setBlockA(e.target.value)}
            type='string'
          />
        </FormControl>
        <FormControl size='lg' required={true}>
          <FormLabel>Numbers || BlockTag</FormLabel>
          <Input
            name='blockB'
            placeholder={'Native web3js "Numbers | BlockTag" parameter.'}
            onChange={(e) => setBlockB(e.target.value)}
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
