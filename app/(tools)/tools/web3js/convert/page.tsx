import FunctionContainer from '@/components/FunctionContainer'
import Convert from '@/components/web3js/utils/Convert'
import { Stack, Typography, Sheet } from '@mui/joy'

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
            <Typography level="h1">Convert</Typography>
            <Typography level="h2">The Convert function.</Typography>
            <Typography level="body-md">
               The <strong>convert</strong> function is a utility method provided by the <strong>web3.utils</strong> 
               module that converts data from one format to another. It takes in several parameters that specify 
               the data to convert, the JSON schema that describes the structure of the data, and the format to 
               convert the data to.
            </Typography>
            <Typography level="body-md">
               Here are the parameters of the convert function:
               <ul>
                <li><strong>data:</strong> This is the data that you want to convert. It can be any type of data, such as a JSON object or an array.</li>
                <li><strong>schema:</strong> This is the JSON schema that describes the structure of the data. It specifies the format of the data and the relationships 
                    between the different elements.</li>
                <li><strong>dataPath:</strong> This is a string array that specifies the path to the data within the JSON schema. It tells the function which part of 
                    the schema the data corresponds to.</li>
                <li><strong>format:</strong> This is the format that you want to convert the data to. It can be a value such as <strong>'json', 'yaml', or 'csv'.</strong></li>
                <li><strong>oneOfPath:</strong> This is an optional parameter that specifies the "oneOf" option to choose, if the schema has 
                    oneOf and the data path can match multiple subschemas. It is an array of two-element tuples, where each tuple contains the path to a subschema and the corresponding value.</li>
               </ul>
            </Typography>
            <Typography level="body-md">
                The <strong>convert</strong> function returns the converted data in the specified format. If the data cannot be converted, it returns an error.
            </Typography>
            <Typography level="body-md">
               Here's an example of how you can use the convert function:

                    <pre>{`const web3 = require('web3');

                    const data = {
                    name: 'John Doe',
                    age: 30,
                    address: {
                        street: '123 Main St',
                        city: 'New York',
                        state: 'NY',
                        zip: '10001'
                    }
                    };

                    const schema = {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        age: { type: 'integer' },
                        address: {
                        type: 'object',
                        properties: {
                            street: { type: 'string' },
                            city: { type: 'string' },
                            state: { type: 'string' },
                            zip: { type: 'string' }
                        }
                        }
                    }
                    };

                    const dataPath = ['address', 'street'];
                    const format = 'csv';

                    web3.utils.convert(data, schema, dataPath, format).then((convertedData) => {
                    console.log(convertedData);
                    });`}</pre>
            </Typography>
            <Typography level="body-md">
               In this example, the <strong>convert</strong> function is called with the data, schema, data path, and format. 
               The function returns the converted data in the specified format, which is a CSV string in this
                case. The <strong>then</strong> method is used to handle the resolved promise and log the converted data to 
                the console.
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
                <FunctionContainer title="web3.convert" description="">
                    <Convert />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
