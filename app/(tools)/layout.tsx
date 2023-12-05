import ContentContainer from '@/components/ContentContainer'
import ToolsSidebar from '@/components/ToolsSidebar'
import {
    Box,
    Button,
    List,
    ListItem,
    ListItemButton,
    ListItemDecorator,
    Sheet,
    Stack,
    Typography,
} from '@mui/joy'
import { Metadata } from 'next'


export default function Layout(props: { children: React.ReactNode }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100dvh',
                width: '100dvw',
                // padding: {
                //     md: '15px 15px',
                //     xs: '0px 0px',
                // },
            }}
        >
            <Sheet
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    width: '100%',
                    // maxWidth: '1520px',
                    // maxHeight: {
                    //     md: '690px',
                    //     xs: '100%',
                    // },
                    variant: 'soft',
                    padding: '20px',
                    // borderRadius: {
                    //     md: 'md',
                    //     xs: '0px',
                    // },
                    // outline: '2px solid #545454',
                }}
            >
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    sx={{
                        height: '100%',
                        width: '100%',
                    }}
                    spacing={2}
                >
                    <ToolsSidebar />
                    <ContentContainer>{props.children}</ContentContainer>
                </Stack>
            </Sheet>
        </Box>
    )
}
