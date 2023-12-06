import FunctionContainer from '@/components/FunctionContainer'
import MergeDeep from '@/components/web3js/utils/MergeDeep'
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
            <Typography level="h1">MergeDeep</Typography>
            <Typography level="h2">The MergeDeep function.</Typography>
            <Typography level="body-md">
                The <strong>mergeDeep</strong> function is a utility method provided by the <strong>web3.utils</strong> module that performs a 
                deep merge of two or more objects. The function takes a single required parameter, <strong>destination,</strong>
                 which is the object that will receive the merged properties, and an optional parameter, 
                 <strong>sources,</strong> which is an array of objects that will be merged into the <strong>destination</strong> object.
            </Typography>
            <Typography level="body-md">
               The <strong>mergeDeep</strong> function performs a recursive merge of the <strong>destination and sources</strong> objects, 
               deeply merging the properties of each object into the <strong>destination</strong> object. This means that if 
               any of the <strong>sources</strong> objects contain properties that are also present in the destination object,
                those properties will be overwritten with the values from the <strong>sources</strong> objects
            </Typography>
            <Typography level="body-md">
                Here's an example usage of the mergeDeep function:

                <pre>const web3 = require('web3');</pre>

                <pre>{`const destination = {
                name: 'John',
                age: 30,
                address: {
                    street: '123 Main St',
                    city: 'New York',
                    state: 'NY',
                    zip: '10001'
                }
                };

                const source1 = {
                name: 'Jane',
                age: 25,
                address: {
                    street: '456 Elm St',
                    city: 'Los Angeles',
                    state: 'CA',
                    zip: '90001'
                }
                };

                const source2 = {
                name: 'Bob',
                age: 40,
                address: {
                    street: '789 Oak St',
                    city: 'Chicago',
                    state: 'IL',
                    zip: '60601'
                }
                }; `}</pre>

                <pre>const merged = web3.utils.mergeDeep(destination, source1, source2);</pre>

                <pre>console.log(merged);</pre>
            </Typography>
            <Typography level="body-md">
                 In this example, the <strong>destination</strong> object has properties <strong>name, age, and address.</strong> The <strong>source1 
                 and source2</strong> objects also have properties <strong>name, age, and address,</strong> as well as some additional 
                 properties. The <strong>mergeDeep</strong> function is called with <strong>destination</strong> as the first argument, and
                  <strong>source1 and source2</strong> as additional arguments.
            </Typography>
            <Typography level="body-md">
                 The function returns a new object that contains all the properties from <strong>destination,</strong>
                  <strong>source1, and source2.</strong> The resulting object has properties <strong>name, age, address, street, city, 
                  state, and zip,</strong> with the values from <strong>source1 and source2</strong> overwriting the corresponding 
                  values in <strong>destination.</strong>
            </Typography>
            <Typography level="body-md">
                  The <strong>mergeDeep</strong> function is useful for combining data from multiple sources into a single 
                  object, or for overriding properties in an object with values from another object. 
                  It can be used in a variety of contexts, such as when working with JSON data, 
                  constructing objects from database queries, or merging configuration files.
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
                <FunctionContainer title="web3.mergeDeep" description="">
                    <MergeDeep />
                </FunctionContainer>
            </Stack>
        </Stack>
    )
}
