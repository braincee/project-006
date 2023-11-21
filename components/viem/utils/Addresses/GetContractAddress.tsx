'use client'

import React, { useState, useEffect } from 'react'
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Option,
  Select,
  Sheet,
  Stack,
  Typography,
} from '@mui/joy'
import {
  ByteArray,
  GetContractAddressOptions,
  Hex,
  getContractAddress,
} from 'viem'

export default function GetContractAddress() {
  const [from, setFrom] = useState('')
  const [nonce, setNonce] = useState<bigint>()
  const [opCode, setOpCode] = useState('')
  const [byteCode, setByteCode] = useState('')
  const [byteCodeHash, setByteCodeHash] = useState('')
  const [salt, setSalt] = useState('')
  const [output, setOutput] = useState('')

  const handleFromChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value

    if (!value || value === '') return
    if (!value.startsWith('0x') || value.length !== 42) return
    setFrom(value)
  }

  const handleSelect = (
    event: React.SyntheticEvent | null,
    newValue: string | null
  ) => {
    if (!newValue) return
    setOpCode(newValue)
  }

  useEffect(() => {
    let newFrom = from as `0x${string}`
    let newByteCode = byteCode as ByteArray | Hex
    let newByteCodeHash = byteCode as ByteArray | Hex
    let newSalt = salt as Hex | ByteArray
    if (opCode !== '' && nonce) {
      setOutput(
        getContractAddress({
          from: newFrom,
          nonce,
        })
      )
      return
    }
    if (opCode && opCode === 'CREATE') {
      let newOpcode = opCode as 'CREATE'
      const opts = {
        from: newFrom,
        opcode: newOpcode,
      } as GetContractAddressOptions
      setOutput(getContractAddress(opts))
      return
    }
    if (opCode && opCode === 'CREATE2') {
      let newOpcode = opCode as 'CREATE2'
      const opts = {
        from: newFrom,
        opcode: newOpcode,
        bytecode: newByteCode,
        bytecodeHash: newByteCodeHash,
        salt: newSalt,
      } as GetContractAddressOptions
      setOutput(getContractAddress(opts))
    }
  }, [from, nonce, opCode, byteCode, salt])

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
        <FormControl size='lg' sx={{ flexGrow: 1 }}>
          <FormLabel>From</FormLabel>
          <Input
            name='from'
            placeholder={'Native viem "str" parameter.'}
            onChange={handleFromChange}
            type='text'
          />
        </FormControl>
        <FormControl size='lg' sx={{ flexGrow: 1 }}>
          <FormLabel>Nonce</FormLabel>
          <Input
            name='nonce'
            placeholder={'Native viem "bigInt" parameter.'}
            onChange={(e) => setNonce(BigInt(e.target.value))}
            type='number'
          />
        </FormControl>
        <FormControl size='lg'>
          <FormLabel>Opcode</FormLabel>
          <Select placeholder={'opcode'} onChange={handleSelect}>
            <Option value={'CREATE'}>CREATE</Option>
            <Option value={'CREATE2'}>CREATE2</Option>
          </Select>
          <FormHelperText>
            <Typography level='body-xs'>Opcode</Typography>
          </FormHelperText>
        </FormControl>
        <FormControl size='lg' sx={{ flexGrow: 1 }}>
          <FormLabel>Byte Code</FormLabel>
          <Input
            name='byteCode'
            placeholder={'Native viem "str" parameter.'}
            onChange={(e) => setByteCode(e.target.value)}
            type='text'
          />
        </FormControl>
        <FormControl size='lg' sx={{ flexGrow: 1 }}>
          <FormLabel>Byte Code Hash</FormLabel>
          <Input
            name='byteCodeHash'
            placeholder={'Native viem "str" parameter.'}
            onChange={(e) => setByteCodeHash(e.target.value)}
            type='text'
          />
        </FormControl>
        <FormControl size='lg' sx={{ flexGrow: 1 }}>
          <FormLabel>Salt</FormLabel>
          <Input
            name='salt'
            placeholder={'Native viem "str" parameter.'}
            onChange={(e) => setSalt(e.target.value)}
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
