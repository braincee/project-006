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
      <Typography level='h1'>Extract Chain</Typography>
      <Typography level='h2'>The extractChain function.</Typography>

      <Typography level='body-md'>
        The <strong>extractChain</strong> function is a utility function that
        allows you to extract a type-safe chain from a set of chains, given its
        ID. It takes in a set of chains and an ID, and returns the chain that
        matches the given ID.
      </Typography>

      <Typography level='body-md'>
        The function is flexible and allows you to specify the set of chains to
        search through, making it easy to use with different sets of chains. You
        can also use all chains from the <strong>viem/chains</strong> module by
        importing all chains and using them as the <strong>chains</strong>{' '}
        parameter.
      </Typography>

      <Typography level='body-md'>
        Here's an example usage of the function:
        <pre>typescript</pre>
        <pre>import &#123; extractChain &#125; from 'viem';</pre>
        <pre>
          import &#123; mainnet, base, optimism, zora &#125; from 'viem/chains';
        </pre>
        <pre>const optimism = extractChain(&#123;</pre>
        <pre>&nbsp; chains: [mainnet, base, optimism, zora],</pre>
        <pre>&nbsp; id: 10,</pre>
        <pre>&#125;);</pre>
        <pre>console.log(optimism.id); // Output: 10</pre>
        <pre>console.log(optimism.name); // Output: "OP Mainnet"</pre>
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
