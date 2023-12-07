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
      <Typography level='h1'>GetEventSelector</Typography>
      <Typography level='h2'>The GetEventSelector function.</Typography>

      <Typography level='body-md'>
        <strong>getEventSelector</strong> is a function that takes an event
        definition or an <strong>AbiEvent</strong> object as input and returns a
        unique selector for that event. The selector is a hex value that can be
        used to identify the event in a smart contract.
      </Typography>

      <Typography level='body-md'>
        The function can be used in a variety of ways, including:
        <ul>
          <li>
            Passing a string representing the event name and its parameters,
            such as <strong>'Transfer(address,address,uint256)'</strong>
          </li>
          <li>
            Passing an <strong>AbiEvent</strong> object that contains the event
            name and its parameters, such as{' '}
            <strong>
              &#123; name: 'Transfer', type: 'event', inputs: [...]&#125;
            </strong>
            .
          </li>
        </ul>
      </Typography>

      <Typography level='body-md'>
        The function returns a hex value that represents the event selector.
        This selector can be used to identify the event in a smart contract,
        such as in a filter or a subscription.
      </Typography>

      <Typography level='body-md'>
        The <strong>getEventSelector</strong> function is useful for developers
        who want to work with smart contract events in a more convenient and
        efficient way. It eliminates the need to manually calculate the selector
        for an event, which can be a complex and error-prone process. Instead,
        developers can simply call the function and use the returned selector to
        identify the event in their smart contract.
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
