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
            <Typography level="h1">EncodePacked</Typography>
            <Typography level="h2">The EncodePacked function.</Typography>
            <Typography level="body-md">
              The <strong>encodePacked</strong> function takes two arguments: <strong>types and values.</strong> It returns a hex-encoded packed 
              data.
            </Typography>
            <Typography level="body-md">
              <strong>types</strong> is an array of <strong>PackedAbiType</strong> objects, which define the
               ABI types to be packed encoded. The <strong>PackedAbiType</strong> objects are created using the <strong>abi.PackedAbiType</strong> constructor.

            </Typography>
            <Typography level="body-md">
               <strong>values</strong> is an array of primitive values that correspond to the ABI <strong>types</strong> defined in types. The values are passed as arguments to the function and are used to populate the packed data.
            </Typography>
            <Typography level="body-md">
               The function uses the <strong>abi.pack</strong> method to pack the data into a hex-encoded string. The resulting packed data is then returned as a hex string.

            </Typography>
            <Typography level="body-md">
               The function is useful for generating packed data that can be used in solidity contracts. 
               It allows developers to create packed data that conforms to the ABI standards and can be
                easily integrated into their contracts.

            </Typography>
            <Typography level="body-md">
               Here's an example usage of the function:

              <pre>{`const types = ['address', 'string', 'bytes16[]'];
                const values = [
                '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
                'hello world',
                ['0xdeadbeefdeadbeefdeadbeefdeadbeef', '0xcafebabecafebabecafebabecafebabe']
                ];
                const packedData = encodePacked(types, values);
                console.log(packedData); // Output: 0xd8da6bf26964af9d7eed9e03e53415d37aa9604568656c6c6f20776f726c64deadbeefdeadbeefdeadbeefdeadbeef00000000000000000000000000000000cafebabecafebabecafebabecafebabe00000000000000000000000000000000`}</pre>
            </Typography>
            <Typography level="body-md">
              In this example, the <strong>types</strong> array defines three ABI types: <strong>address, string, and bytes16[].</strong>
              The <strong>values</strong> array contains the corresponding primitive values that will be packed into the 
              packed data. The resulting packed data is a hex-encoded string that can be used in a solidity 
              contract.
            </Typography>
            <Stack
                direction={{ xs: 'column', md: 'column' }}
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                overflow={'scroll'}
                spacing={2}
            >
                <FunctionContainer title="web3.encodePacked" description="">
                    {/* <FormatEhter /> */}
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
