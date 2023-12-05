'use client'

import { Button, ToggleButtonGroup, useColorScheme } from '@mui/joy'

export default function ModeSwitcher() {
    const { mode, setMode } = useColorScheme()

    return (
        <ToggleButtonGroup
            value={mode}
            onChange={(event, newValue) => {
                if (newValue) {
                    setMode(newValue)
                }
            }}
        >
            <Button value="light">Light</Button>
            <Button value="dark">Dark</Button>
            <Button value="system">System</Button>
        </ToggleButtonGroup>
    )
}