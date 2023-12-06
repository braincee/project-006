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
      <Typography level='h1'>GetFunctionSelector</Typography>
      <Typography level='h2'>The GetFunctionSelector function.</Typography>

      <Typography level='body-md'>
        <strong>getFunctionSelector</strong> is a function that takes a function
        definition or an <strong>AbiFunction</strong> object as input and
        returns the function selector, which is a unique 4-byte identifier that
        represents the function. The function selector can be used to identify
        the function in a smart contract and trigger the appropriate action.
      </Typography>

      <Typography level='body-md'>
        The function can be used in various ways, including:
        <ul>
          <li>
            Passing a string representing the function name and its parameters,
            such as <strong>'function ownerOf(uint256 tokenId)'</strong>
          </li>
          <li>
            Passing an <strong>AbiFunction</strong> object that contains the
            function name, parameters, and other information, such as{' '}
            <strong>
              &#123; name: 'ownerOf', type: 'function', inputs: [...], outputs:
              [], stateMutability: 'view' &#125;.
            </strong>
          </li>
        </ul>
      </Typography>

      <Typography level='body-md'>
        The <strong>getFunctionSelector</strong> function is useful for
        developers who want to work with smart contract functions in a more
        convenient and efficient way. It eliminates the need to manually
        calculate the selector for a function, which can be a complex and
        error-prone process. Instead, developers can simply call the function
        and use the returned selector to identify the function in their smart
        contract.
      </Typography>

      <Typography level='body-md'>
        The returned selector is a hex value that represents the function in a
        compact and unique way. It can be used in various contexts, such as in a
        filter or a subscription, to identify the function and trigger the
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
