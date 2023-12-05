# REMEMBER
1. Make sure you use the correct Input types (text, number).
2. Make sure you use the correct input components (Input, Select, Textarea).
3. Make sure you set the correct name for the web3 function.
4. Make sure you set the correct description for the web3 function.
5. Make sure you add relevant info to the fields, if needed. Think what would be useful for you as a user. For example, the function `parseEther` (https://viem.sh/docs/utilities/formatEther.html) from viem expects the `value` to be in WEI, so you should put that info as a `FormHelperText` (as I did in `ConvertScalarValue`) or as the input placeholder.
6. Make sure you handle what parameters are required, and make sure their in the right format, before calling the web3js/viem function. This is done in the `useEffect` of the component.
7. Make sure you set `required` on the inputs that are required (most of the are), and not on the ones that are not required (there are some, pay attention).


# INFO
- The web3js functions are listed here: https://docs.web3js.org/api/web3-utils
- The viem functions are listed here: https://viem.sh/docs/utilities/isAddressEqual.html. The ones in the ENS, ABI and Utilities sections are the ones to implement, start from bottom to top. The ENS section will need you to instantiate a client, make sure you have a global/main client, and not instantiate one in each component.
- If the IDE (codium) doesn't see a function (doesn't import it when you type it), then just modify the `import { ... } from web3-utils` statement at the top of the file manually. The function is there.
