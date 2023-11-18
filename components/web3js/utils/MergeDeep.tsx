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
import { mergeDeep } from 'web3-utils'

export default function MergeDeep() {
  const [destination, setDestination] = useState<Record<string, unknown>>()
  const [sources, setSources] = useState(new Map())
  const [sourcesArray, setSourcesArray] = useState<ReactNode[]>([])
  const [output, setOutput] = useState<Record<string, unknown>>()

  const handleDestinationChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setOutput(undefined)
      return
    }
  }

  const handleChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setOutput(undefined)
      return
    }
  }

  const addByte = () => {
    let index = sourcesArray.length - 1
    let array = (
      <FormControl key={index} size='lg' required={true}>
        <Input
          name='sourceObject'
          placeholder={`Record<string, unknown>`}
          onChange={handleChange}
          type='string'
          sx={{
            marginTop: 2,
          }}
        />
      </FormControl>
    )
    setSourcesArray((prevArray: ReactNode[]) => [...prevArray, array])
  }

  const removeByte = () => {
    let index = sourcesArray.length - 1
    const newsourcesArray = sourcesArray.filter(
      (_, idx: number) => index != idx
    )
    setSourcesArray(newsourcesArray)
    let lastKey = Array.from(sources.keys()).pop()
    sources.delete(lastKey)
  }

  useEffect(() => {
    if (!destination || sources.size <= 0) {
      setOutput(undefined)
      return
    }

    let newsources = sources.values()
    setOutput(mergeDeep(destination, ...newsources))
  }, [destination, sources.size])

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
            disabled={sourcesArray.length === 0 ? true : false}
            color='danger'
            onClick={removeByte}
          >
            Remove
          </Button>
        </Stack>
        <FormControl size='lg' required={true}>
          <FormLabel>Destination object</FormLabel>
          <Input
            name='destination'
            placeholder={`Record<string, unknown>`}
            onChange={handleDestinationChange}
            type='string'
          />
        </FormControl>
        <FormControl size='lg' required={true}>
          <FormLabel>Source objects</FormLabel>
          <Input
            name='sourceObject'
            placeholder={`Record<string, unknown>`}
            onChange={handleChange}
            type='string'
          />
        </FormControl>
        {sourcesArray}
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
