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
      <Typography level='h1'>GetFunctionSignature</Typography>
      <Typography level='h2'>The GetFunctionSignature function.</Typography>

      <Typography level='body-md'>
        <strong>getFunctionSignature</strong> is a function that takes a
        function definition or an <strong>AbiFunction</strong> object as input
        and returns the function signature, which is a string representation of
        the function's parameters and return types. The function signature can
        be used to identify the function and its parameters in a smart contract.
      </Typography>

      <Typography level='body-md'>
        The function can be used in various ways, including:
        <ul>
          <li>
            Passing a string representing the function name and its parameters,
            such as <strong>'function ownerOf(uint256 tokenId)'</strong>
          </li>
          <li>
            Passing an AbiFunction object that contains the function name,
            parameters, and other information, such as{' '}
            <strong>
              &#123; name: 'ownerOf', type: 'function', inputs: [...], outputs:
              [], stateMutability: 'view' &#125;.
            </strong>
          </li>
        </ul>
      </Typography>

      <Typography level='body-md'>
        The <strong>getFunctionSignature</strong> function is useful for
        developers who want to work with smart contract functions in a more
        convenient and efficient way. It eliminates the need to manually create
        a signature for a function, which can be a complex and error-prone
        process. Instead, developers can simply call the function and use the
        returned signature to identify the function and its parameters in their
        smart contract.
      </Typography>

      <Typography level='body-md'>
        The returned signature is a string value that represents the function in
        a human-readable format. It includes the function name, the parameter
        names and types, and the return types. The signature can be used in
        various contexts, such as in a filter or a subscription, to identify the
        function and its parameters and trigger the appropriate action.
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
