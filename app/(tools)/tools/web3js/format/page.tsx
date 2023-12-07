import FunctionContainer from '@/components/FunctionContainer'
import Format from '@/components/web3js/utils/Format'
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
            <Typography level="h1">Format</Typography>
            <Typography level="h2">The Format function.</Typography>
            <Typography level="body-md">
                The <strong>format</strong> function takes a schema, data, and return format as input and returns a formatted version of 
                the data that adheres to the specified schema and return format. 
                The function is a part of the web3-utils library and is designed to be used with the Ethereum blockchain.
            </Typography>
            <Typography level="body-md">
                The <strong>schema</strong> parameter is a ValidationSchemaInput or Schema object that defines the structure of the data to 
                be formatted. The <strong>data</strong> parameter is the data to be formatted, which can be any type of data, including 
                strings, integers, and objects. The <strong>returnFormat</strong> parameter is a 
                DataFormat value that specifies the format in which the data should be returned, such as JSON, YAML, or CSV.
            </Typography>
            <Typography level="body-md">
                The <strong>format</strong> function uses the schema to validate the data and ensure that it conforms to the specified structure. If the data does not 
                validate, the 
                function will throw an error. Otherwise, the function will format the data according to the specified return format and return it as a string.
            </Typography>
            <Typography level="body-md">
                The <strong>format</strong> function is useful for formatting data in a consistent and predictable way, which can be important when working with the Ethereum 
                blockchain. It can be used to format data for submission to the blockchain, or to format data that has been retrieved from the blockchain.
            </Typography>
            <Typography level="body-md">
               Here's an example of how the <strong>format</strong> function can be used: 
               
               <pre>{`const web3 = require('web3')
                    <pre>const schema = {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        age: { type: 'integer' },
                    },
                    };</pre>

                    const data = { name: 'John', age: 30 };

                    const formattedData = web3.utils.format(schema, data, 'JSON');
                    console.log(formattedData);
                    // Output: {"name":"John","age":30}`}</pre>
            </Typography>
            <Typography level="body-md">
                In this example, the <strong>format</strong> function takes in a schema, data, and return format, and returns a formatted version of the data as a JSON 
                string. The schema defines the structure of the data, which must include a <strong>name</strong> property of type string and an <strong>age</strong>
                property of type integer. The data is validated against the schema, and if it validates, it is formatted as JSON and returned as a string.
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
                <FunctionContainer title="web3.format" description="">
                    <Format />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
