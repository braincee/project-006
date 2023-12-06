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
      <Typography level='h1'>SerializeTransaction</Typography>
      <Typography level='h2'>The SerializeTransaction function.</Typography>

      <Typography level='body-md'>
        <strong>serializeTransaction</strong> is a function that takes a
        transaction object and returns a serialized transaction in a hex format,
        which can be used for submission to the Ethereum network. The function
        supports three types of transactions: EIP-1559, EIP-2930, and Legacy
        transactions.
      </Typography>

      <Typography level='body-md'>
        The function takes a single parameter, <strong>transaction</strong>,
        which is a JavaScript object that contains the details of the
        transaction. The object must have the following properties:
        <ul>
          <li>
            <strong>chainId</strong>: The chain ID of the transaction.
          </li>
          <li>
            <strong>gas</strong>: The maximum amount of gas that can be used by
            the transaction.
          </li>
          <li>
            <strong>maxFeePerGas</strong>: The maximum fee per gas that the
            transaction is willing to pay.
          </li>
          <li>
            <strong>maxPriorityFeePerGas</strong>: The maximum priority fee per
            gas that the transaction is willing to pay.
          </li>
          <li>
            <strong>nonce</strong>: The nonce of the transaction, which is a
            counter used to prevent replay attacks.
          </li>
          <li>
            <strong>to</strong>: The address of the recipient of the
            transaction.
          </li>
          <li>
            <strong>value</strong>: The value of the transaction in wei.
          </li>
        </ul>
      </Typography>

      <Typography level='body-md'>
        The function also takes an optional second parameter,{' '}
        <strong>signature</strong>, which is a hex string representing the
        signature of the transaction. If this parameter is provided, the
        function will include the signature in the serialized transaction.
      </Typography>

      <Typography level='body-md'>
        The returned value is a hex string representing the serialized
        transaction, which can be used for submission to the Ethereum network.
        The format of the serialized transaction will depend on the type of
        transaction being serialized:
        <ul>
          <li>
            EIP-1559: <strong>TransactionSerializedEIP1559</strong>
          </li>
          <li>
            EIP-2930: <strong>TransactionSerializedEIP2930</strong>
          </li>
          <li>
            Legacy: <strong>TransactionSerializedLegacy</strong>
          </li>
        </ul>
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
