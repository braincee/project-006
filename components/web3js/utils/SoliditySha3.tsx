'use client'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Stack,
  Textarea,
  Typography,
} from '@mui/joy'
import { ReactNode, useEffect, useState } from 'react'
import { soliditySha3 } from 'web3-utils'

export default function SoliditySha3() {
  const [stringObject, setStringObject] = useState('')
  const [inputId, setInputId] = useState('')
  const [values, setValues] = useState(new Map())
  const [bytesArray, setBytesArray] = useState<ReactNode[]>([])
  const [output, setOutput] = useState<string | undefined>('')

  const handleChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setStringObject('')
      setOutput('')
      return
    }
    function isJsonString(str: string) {
      try {
        JSON.parse(str)
      } catch (e) {
        return false
      }
      return true
    }

    if (value === 'true' || value === 'false') {
      setInputId(event.target.id)
      setStringObject(value)
      return
    } else if (typeof value === 'string' && !isJsonString(value)) {
      setStringObject(value)
      values.set(event.target.id, value)
      return
    }

    if (
      !isJsonString(value) ||
      !value.includes('"value"') ||
      !value.includes('"type"')
    )
      return

    setStringObject(value)
    const jsonValue = JSON.parse(value)
    values.set(event.target.id, jsonValue)
  }

  const addByte = () => {
    let index = bytesArray.length - 1
    let array = (
      <FormControl key={index} size='lg' required={true}>
        <FormLabel>Typed Object</FormLabel>
        <Textarea
          name='typedObject'
          placeholder={`{"type": "string", "value": "Hello World" }`}
          onChange={handleChange}
          minRows={2}
        />
      </FormControl>
    )
    setBytesArray((prevArray: ReactNode[]) => [...prevArray, array])
  }

  const removeByte = () => {
    let index = bytesArray.length - 1
    const newBytesArray = bytesArray.filter((_, idx: number) => index != idx)
    setBytesArray(newBytesArray)
    let lastKey = Array.from(values.keys()).pop()
    values.delete(lastKey)
  }

  useEffect(() => {
    if (!stringObject || stringObject === '') {
      setOutput('')
      return
    }
    if (stringObject === 'true' || stringObject === 'false') {
      values.set(inputId, stringObject)
    }
    let newvalues = values.values()
    setOutput(soliditySha3(...newvalues))
  }, [stringObject, values.size, inputId])

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
          <FormLabel>Typed Object | Numbers | boolean</FormLabel>
          <Input
            name='typedObject'
            placeholder={`{"type": "string", "value": "Hello World" }`}
            onChange={handleChange}
            type='string'
          />
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
          {output ||
            'Output will appear here. You can scroll the text if it becomes too long.'}
        </Typography>
      </Sheet>
    </Stack>
  )
}
