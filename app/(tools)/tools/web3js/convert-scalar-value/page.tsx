import FunctionContainer from '@/components/FunctionContainer'
import ConvertScalarValue from '@/components/web3js/utils/ConvertScalarValue'
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
            <Typography level="h1">ConvertScalarValue</Typography>
            <Typography level="h2">The ConvertScalarValue function.</Typography>
             <Typography level="body-md">
                The <strong>convertScalarValue</strong> function takes in a value, an Ethereum type, and a format, and converts the 
                value to the specified format. The function is designed to handle scalar values, which are simple 
                values that cannot be 
                further divided, such as integers, strings, and booleans.
             </Typography>
             <Typography level="body-md">
                The <strong>value</strong> parameter is the value to be converted, and can be any type of scalar value, including integers, 
                strings, and booleans. The <strong>ethType</strong> parameter is a string that represents the Ethereum type of the value, 
                such as "uint256" for an unsigned integer or "string" for a string. The <strong>format</strong> parameter is a 
                <strong>DataFormat</strong> value that specifies the format to which the value should be converted, such as "JSON" or "CSV".
             </Typography>
             <Typography level="body-md">
                The function returns the converted value in the specified format. If the value cannot be 
                converted to the specified format, the function will throw an error.
             </Typography>
             <Typography level="body-md">
              Here are some examples of how the convertScalarValue function can be used:
              <ul>
                <li><pre><strong>web3.utils.convertScalarValue(123, 'uint256', 'JSON'):</strong> This would return the JSON string '123'.</pre></li>
                <li><pre><strong>web3.utils.convertScalarValue('hello', 'string', 'CSV'):</strong> This would return the CSV string 'hello'.</pre></li>
                <li><pre><strong>web3.utils.convertScalarValue(true, 'bool', 'JSON'):</strong> This would return the JSON string 'true'.</pre></li>
              </ul>
             </Typography>
             <Typography level="body-md">
             Overall, the <strong>convertScalarValue</strong> function is a useful tool for converting scalar values between 
             different formats, and can be useful in a variety of contexts, such as data processing, 
             data transformation, and data serialization.
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
                <FunctionContainer title="web3.convertScalarValue" description="">
                    <ConvertScalarValue />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
