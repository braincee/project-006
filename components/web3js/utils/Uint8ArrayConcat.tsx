'use client'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Stack,
  Typography,
} from '@mui/joy'
import { ReactNode, useEffect, useState } from 'react'
import { uint8ArrayConcat } from 'web3-utils'

export default function Uint8ArrayConcat() {
  const [byte, setByte] = useState<Uint8Array>()
  const [parts, setParts] = useState(new Map())
  const [bytesArray, setBytesArray] = useState<ReactNode[]>([])
  const [output, setOutput] = useState<Uint8Array>()

  const handleChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setByte(undefined)
      setOutput(undefined)
      return
    }

    const bytesArray = value
      .split(',')
      .map((byte: string) => Number(byte.trim()))

    // finally, convert the array of numbers to a Uint8Array
    const bytesUint8Array = Uint8Array.from(bytesArray)
    setByte(bytesUint8Array)

    if (parts.has(event.target.id)) {
      parts.set(event.target.id, bytesUint8Array)
    } else {
      parts.set(event.target.id, bytesUint8Array)
    }
  }

  const addByte = () => {
    let index = bytesArray.length - 1
    let array = (
      <FormControl key={index} size='lg' required={true}>
        <FormLabel>bytes A Eg. "12, 34, 56, 78"</FormLabel>
        <Input
          name='bytes'
          placeholder={'12, 34, 56, 78'}
          onChange={handleChange}
          type='string'
        />
      </FormControl>
    )
    setBytesArray((prevArray: ReactNode[]) => [...prevArray, array])
  }

  const removeByte = () => {
    let index = bytesArray.length - 1
    const newBytesArray = bytesArray.filter((_, idx: number) => index != idx)
    setBytesArray(newBytesArray)
    let lastKey = Array.from(parts.keys()).pop()
    parts.delete(lastKey)
  }

  useEffect(() => {
    if (!byte || parts.size <= 0) {
      setOutput(undefined)
      return
    }
    let newParts = parts.values()
    setOutput(uint8ArrayConcat(...newParts))
  }, [byte, parts.size])

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
        <Stack
          sx={{
            dispaly: 'flex',
            width: '100%',
            justifyContent: 'center',
            gap: {
              sm: 1,
              md: 3,
            },
          }}
          direction={{ sm: 'column', md: 'row' }}
        >
          <Button onClick={addByte}>Add</Button>
          <Button
            disabled={bytesArray.length === 0 ? true : false}
            color='danger'
            onClick={removeByte}
          >
            Remove
          </Button>
        </Stack>
        <FormControl size='lg' required={true}>
          <FormLabel>bytes Eg. "12, 34, 56, 78"</FormLabel>
          <Input
            name='bytes'
            placeholder={'12, 34, 56, 78'}
            onChange={handleChange}
            type='string'
          />{' '}
        </FormControl>
        {bytesArray}
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
          {(output && output.length > 0 && `[${output.toString()}]`) ||
            'Output will appear here. You can scroll the text if it becomes too long.'}
        </Typography>
      </Sheet>
    </Stack>
  )
}
