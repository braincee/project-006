'use client'
import {
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Typography,
  Stack,
} from '@mui/joy'

import React, { useState, useEffect } from 'react'
import {
  Hex,
  TransactionSerializable,
  parseEther,
  parseGwei,
  serializeTransaction,
} from 'viem'

export default function SerializeTransaction() {
  const [to, setTo] = useState('')
  const [chainId, setChainId] = useState<number>()
  const [gas, setGas] = useState('')
  const [maxFeePerGas, setMaxFeePerGas] = useState('')
  const [maxPriorityFeePerGas, setMaxPriorityFeePerGas] = useState('')
  const [nonce, setNonce] = useState<number>()
  const [value, setValue] = useState('')
  const [signature, setSignature] = useState('')
  const [serializedTransaction, setSerializedTransaction] = useState<any>()

  const handleToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    if (!value || value === '') {
      setSerializedTransaction(undefined)
      return
    }
    if (!value.startsWith('0x')) return
    if (value.length != 42) return

    let myValue = value as `0x${string}`
    setTo(myValue)
  }

  const handleSignatureChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') {
      setSerializedTransaction(undefined)
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

    if (
      value.startsWith('{') &&
      value.endsWith('}') &&
      value.includes('to') &&
      value.includes('size') &&
      isJsonString(value)
    ) {
      setSignature(JSON.parse(value))
    } else {
      return
    }
  }

  useEffect(() => {
    if (
      !to ||
      !chainId ||
      !gas ||
      !maxFeePerGas ||
      !maxPriorityFeePerGas ||
      !nonce ||
      !value
    )
      return
    try {
      const parsed = {
        chainId,
        to,
        nonce,
        gas,
        maxFeePerGas: parseGwei(maxFeePerGas),
        maxPriorityFeePerGas: parseGwei(maxPriorityFeePerGas),
        value: parseEther(value),
        signature,
      }
      setSerializedTransaction(parsed)
    } catch (error) {
      console.error('Error parsing transaction:', error)
      setSerializedTransaction(undefined)
    }
  }, [
    to,
    chainId,
    nonce,
    gas,
    maxFeePerGas,
    maxPriorityFeePerGas,
    value,
    signature,
  ])

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
          <FormLabel>Address</FormLabel>
          <Input
            name='str'
            onChange={handleToChange}
            placeholder='{Address {0x...}}'
            type='string'
          />
        </FormControl>
        <FormControl size='lg' required={true}>
          <FormLabel>Chain Id</FormLabel>
          <Input
            name='chainId'
            onChange={(e) => setChainId(Number(e.target.value))}
            placeholder='Chain id'
            type='number'
          />
        </FormControl>
        <FormControl size='lg' required={true}>
          <FormLabel>Gas</FormLabel>
          <Input
            name='gas'
            onChange={(e) => setGas(e.target.value)}
            placeholder='gas'
            type='string'
          />
        </FormControl>
        <FormControl size='lg' required={true}>
          <FormLabel>Max Fee Per Gas</FormLabel>
          <Input
            name='maxFeePerGas'
            onChange={(e) => setMaxFeePerGas(e.target.value)}
            placeholder='Max Fee Per Gas'
            type='string'
          />
        </FormControl>
        <FormControl size='lg' required={true}>
          <FormLabel>Max Priority Fee Per Gas</FormLabel>
          <Input
            name='maxPriorityFeePerGas'
            onChange={(e) => setMaxPriorityFeePerGas(e.target.value)}
            placeholder='Max Priority Fee Per Gas'
            type='string'
          />
        </FormControl>
        <FormControl size='lg' required={true}>
          <FormLabel>Nonce</FormLabel>
          <Input
            name='nonce'
            onChange={(e) => setNonce(Number(e.target.value))}
            placeholder='nonce'
            type='number'
          />
        </FormControl>
        <FormControl size='lg' required={true}>
          <FormLabel>Value</FormLabel>
          <Input
            name='value'
            onChange={(e) => setValue(e.target.value)}
            placeholder='value'
            type='string'
          />
        </FormControl>
        <FormControl size='lg' required={true}>
          <FormLabel>Signature</FormLabel>
          <Input
            name='signature'
            onChange={handleSignatureChange}
            placeholder='value'
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
          {(serializedTransaction &&
            `Parsed result: ${serializedTransaction}`) ||
            'Output will appear here. You can scroll the text if it becomes too long.'}
        </Typography>
      </Sheet>
    </Stack>
  )
}
