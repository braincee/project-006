import FunctionContainer from '@/components/FunctionContainer'

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
      <Typography level='h1'>GetEventSignature</Typography>
      <Typography level='h2'>The GetEventSignature function.</Typography>

      <Typography level='body-md'>
        <strong>getEventSignature</strong> is a function that takes an event
        definition or an <strong>AbiEvent</strong> object as input and returns
        the event signature as a string value. The event signature is a unique
        identifier for the event and can be used to identify the event in a
        smart contract.
      </Typography>

      <Typography level='body-md'>
        The function can be used in a variety of ways, including:
        <ul>
          <li>
            Passing a string representing the event name and its parameters,
            such as
            <strong>'Transfer(address,address,uint256)'</strong>
          </li>
          <li>
            Passing an <strong>AbiEvent</strong> object that contains the event
            name and its parameters, such as{' '}
            <strong>
              &#123; name: 'Transfer', type: 'event', inputs: [...]&#125;.
            </strong>
          </li>
        </ul>
      </Typography>

      <Typography level='body-md'>
        The <strong>getEventSignature</strong> function is useful for developers
        who want to identify events in a smart contract in a more convenient and
        efficient way. It eliminates the need to manually calculate the
        signature for an event, which can be a complex and error-prone process.
        Instead, developers can simply call the function and use the returned
        signature to identify the event in their smart contract.
      </Typography>

      <Typography level='body-md'>
        The returned signature is a string value that represents the event in a
        compact and unique way. It can be used in various contexts, such as in a
        filter or a subscription, to identify the event and trigger the
        appropriate action.
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
