'use client'
import {
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Stack,
  Typography,
  Textarea,
  Button,
  Select,
  Option,
  FormHelperText,
} from '@mui/joy'
import { ReactNode, useEffect, useState } from 'react'
import { DataFormat } from 'web3'
import { convert } from 'web3-utils'

export default function Convert() {
  const [data, setData] = useState<unknown>()
  const [schema, setSchema] = useState<object>()
  const [dataPath, setDataPath] = useState(new Map())
  const [dataPathArray, setDataPathArray] = useState<ReactNode[]>([])
  const [format, setFormat] = useState('')
  const [oneOfPath, setOneOfPath] = useState(new Map())
  const [oneOfPathArray, setOneOfPathArray] = useState<ReactNode[]>([])

  const [output, setOutput] = useState<unknown>()

  const handleSchemaChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setOutput(false)
      return
    }
    if (typeof value != 'object') return
    setSchema(value)
  }

  const handleSelect = (
    event: React.SyntheticEvent | null,
    newValue: string | null
  ) => {
    if (!newValue) return
    setFormat(newValue)
  }

  const handleDataPathChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setOutput(undefined)
      return
    }

    dataPath.set(event.target.id, value)
  }

  const handleOneOfPathChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setOutput(undefined)
      return
    }

    oneOfPath.set(event.target.id, value)
  }

  const addDataPath = () => {
    let index = dataPathArray.length - 1
    let array = (
      <FormControl key={index} size='lg' required={true}>
        <Input
          name='data path'
          placeholder={'Data Path'}
          onChange={handleDataPathChange}
          type='string'
          sx={{
            marginTop: 2,
          }}
        />
      </FormControl>
    )
    setDataPathArray((prevArray: ReactNode[]) => [...prevArray, array])
  }

  const addOneOfPath = () => {
    let index = oneOfPathArray.length - 1
    let array = (
      <FormControl key={index} size='lg' required={true}>
        <Input
          name='data path'
          placeholder={'Data Path'}
          onChange={handleOneOfPathChange}
          type='string'
          sx={{
            marginTop: 2,
          }}
        />
      </FormControl>
    )
    setOneOfPathArray((prevArray: ReactNode[]) => [...prevArray, array])
  }

  const removeDataPath = () => {
    let index = dataPathArray.length - 1
    const newBytesArray = dataPathArray.filter((_, idx: number) => index != idx)
    setDataPathArray(newBytesArray)
    let lastKey = Array.from(dataPath.keys()).pop()
    dataPath.delete(lastKey)
  }

  const removeOneOfPath = () => {
    let index = oneOfPathArray.length - 1
    const newBytesArray = oneOfPathArray.filter(
      (_, idx: number) => index != idx
    )
    setOneOfPathArray(newBytesArray)
    let lastKey = Array.from(oneOfPath.keys()).pop()
    oneOfPath.delete(lastKey)
  }

  useEffect(() => {
    if (!data || !schema || !dataPath || !format) {
      setOutput(undefined)
      return
    }
    let newDataPath = [...dataPath.values()]
    let newOneOfPath = [...oneOfPath.values()]
    setOutput(
      convert(
        data,
        schema,
        newDataPath,
        format as unknown as DataFormat,
        newOneOfPath
      )
    )
  }, [data, schema, dataPath, format, oneOfPath])

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
          <FormLabel>Data</FormLabel>
          <Input
            name='data'
            placeholder={'Data'}
            onChange={(e) => setData(e.target.value)}
            type='string'
          />
        </FormControl>
        <FormControl size='lg' required={true}>
          <FormLabel>Schema</FormLabel>
          <Textarea
            name='hex'
            placeholder={
              'The JSON schema that describes the structure of the data'
            }
            onChange={handleSchemaChange}
          />
        </FormControl>
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
          marginTop={2}
          direction={{ sm: 'column', md: 'row' }}
        >
          <Button onClick={addDataPath}>Add</Button>
          <Button
            disabled={dataPathArray.length === 0 ? true : false}
            color='danger'
            onClick={removeDataPath}
          >
            Remove
          </Button>
        </Stack>
        <FormControl size='lg' required={true}>
          <FormLabel>Data Path</FormLabel>
          <Input
            name='data path'
            placeholder={'Data Path'}
            onChange={handleDataPathChange}
            type='string'
          />
        </FormControl>
        {dataPathArray}
        <FormControl size='lg' required={true}>
          <FormLabel>format</FormLabel>
          <Select
            placeholder={'Native web3js "format" parameter.'}
            onChange={handleSelect}
          >
            <Option value={'NUMBER_NUMBER'}>NUMBER_NUMBER</Option>
            <Option value={'NUMBER_HEX'}>NUMBER_HEX</Option>
            <Option value={'NUMBER_STR'}>NUMBER_STR</Option>
            <Option value={'NUMBER_BIGINT'}>NUMBER_BIGINT</Option>
            <Option value={'BYTES_HEX'}>BYTES_HEX</Option>
            <Option value={'BYTES_UINT8ARRAY'}>BYTES_UINT8ARRAY</Option>
          </Select>

          <FormHelperText>
            <Typography level='body-xs'>web3js DataFormat type.</Typography>
          </FormHelperText>
        </FormControl>
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
          marginTop={2}
          direction={{ sm: 'column', md: 'row' }}
        >
          <Button onClick={addOneOfPath}>Add</Button>
          <Button
            disabled={oneOfPathArray.length === 0 ? true : false}
            color='danger'
            onClick={removeOneOfPath}
          >
            Remove
          </Button>
        </Stack>
        <FormControl size='lg'>
          <FormLabel>OneOf Option</FormLabel>
          <Input
            name='oneOf'
            placeholder={'OneOf Option'}
            onChange={handleOneOfPathChange}
            type='string'
          />
        </FormControl>
        {oneOfPathArray}
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
          {output?.toString() ||
            'Output will appear here. You can scroll the text if it becomes too long.'}
        </Typography>
      </Sheet>
    </Stack>
  )
}
