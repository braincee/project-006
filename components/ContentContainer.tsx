'use client'
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemDecorator,
    Sheet,
    Stack,
    getInitColorSchemeScript,
} from '@mui/joy'
import { Aperture, BookOpen, Box as BoxIcon, Command, CreditCard, Settings } from 'react-feather'

export default function ContentContainer({ children }: { children: React.ReactNode }) {
    return (
        <>
            {getInitColorSchemeScript()}
            <Sheet
                sx={{
                    height: '100%',
                    width: '100%',
                    // variant: 'plain',
                    borderRadius: 'sm',
                    padding: '0px 10px',
                    // background: 'transparent',
                    overflow: { xs: 'auto', sm: 'scroll' },
                }}
                component={'div'}
            >
                {children}
            </Sheet>
        </>
    )
}
