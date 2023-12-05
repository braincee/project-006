import {
    Box,
    Button,
    Chip,
    Divider,
    LinearProgress,
    List,
    ListDivider,
    ListItem,
    ListItemButton,
    ListItemContent,
    ListItemDecorator,
    MenuList,
    Sheet,
    Stack,
    Typography,
} from '@mui/joy'
import NextLink from 'next/link'
import {
    Aperture,
    BookOpen,
    Box as BoxIcon,
    Command,
    CreditCard,
    Paperclip,
    Settings,
} from 'react-feather'
import ModeSwitcher from './ModeSwitcher'

export default async function ToolsSidebar() {
    return (
        <MenuList
            size={'lg'}
            variant="soft"
            sx={{
                minWidth: {
                    md: 250,
                    xs: '100%',
                },
                maxWidth: {
                    md: 400,
                    xs: '100%',
                },
                height: '100%',
                borderRadius: 'sm',
                '--List-gap': '10px',
            }}
        >
            <Stack direction="column" spacing={2} justifyContent={'space-between'} height={'100%'}>
                <div>
                    <NextLink
                        href="/tools/web3js-online"
                        passHref={true}
                        style={{
                            textDecoration: 'none',
                        }}
                    >
                        <ListItem component="a">
                            <ListItemButton>
                                <ListItemDecorator>
                                    <BoxIcon />
                                </ListItemDecorator>
                                Web3JS Online
                            </ListItemButton>
                        </ListItem>
                    </NextLink>
                    <NextLink
                        href="/tools/viem-online"
                        passHref={true}
                        style={{
                            textDecoration: 'none',
                        }}
                    >
                        <ListItem component="a">
                            <ListItemButton>
                                <ListItemDecorator>
                                    <Command />
                                </ListItemDecorator>
                                Viem Online
                            </ListItemButton>
                        </ListItem>
                    </NextLink>
                </div>

                <div>
                    <ListDivider />

                    <ListItem>
                        <ModeSwitcher />
                    </ListItem>
                </div>
            </Stack>
        </MenuList>
    )
}
