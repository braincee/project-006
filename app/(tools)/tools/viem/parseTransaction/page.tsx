import { Stack, Typography } from '@mui/joy'

export default async function Web3JsFunctionPage() {
  return (
    <Stack
      direction={{ xs: 'column', md: 'column' }}
      sx={{
        height: '100%',
        width: '100%',
      }}
      spacing={2}
    >
      <Typography level='h1'>ParseTransaction</Typography>
      <Typography level='h2'>The ParseTransaction function.</Typography>

      <Typography level='body-md'>
        <strong>parseTransaction</strong> is a function that takes a serialized
        RLP-encoded transaction as input and returns a parsed transaction
        object. The function supports a variety of transaction types, including
        signed and unsigned EIP-1559, EIP-2930, and Legacy Transactions.
      </Typography>

      <Typography level='body-md'>
        The function takes a single parameter,{' '}
        <strong>serializedTransaction</strong>, which is a hex string
        representing the serialized transaction data. The function uses RLP
        (Recursive Length Prefix) decoding to parse the transaction data and
        return a JavaScript object representing the transaction.
      </Typography>

      <Typography level='body-md'>
        The returned transaction object has a format similar to the following:
        <br />
        <pre>
          &#123; <br />
          &nbsp;"type": "Transaction", <br />
          &nbsp;"data": &#123; <br />
          &nbsp;&nbsp; "from": "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",{' '}
          <br />
          &nbsp;&nbsp; "to":
          "0x02ef0182031184773594008477359400809470997970c51812dc3a010c7d01b50e0d17dc79c8880de0b6b3a764000080c0",{' '}
          <br />
          &nbsp;&nbsp; "value": "1000000000", <br />
          &nbsp;&nbsp; "gas": "21000", <br />
          &nbsp;&nbsp; "gasPrice": "2000000000", <br />
          &nbsp;&nbsp; "nonce": "1234567890", <br />
          &nbsp;&nbsp; "signature": "0x1234567890abcdef" <br />
          &nbsp;&#125; <br />
          &#125;
        </pre>
      </Typography>

      <Stack
        direction={{ xs: 'column', md: 'column' }}
        sx={{
          height: '100%',
          width: '100%',
        }}
        overflow={'scroll'}
        spacing={2}
      ></Stack>
    </Stack>
  )
}
