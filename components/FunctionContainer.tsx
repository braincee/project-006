import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/joy'

export default function FunctionContainer({
    title,
    description,
    children,
}: { title: string; description: string; children: React.ReactNode }) {
    return (
        <Accordion>
            <AccordionSummary>
                <Typography level="h4" padding={'10px'}>
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Stack direction={'column'} paddingLeft={'10px'} spacing={3} height={'100%'}>
                    <Typography level="body-sm">{description}</Typography>
                    {children}
                </Stack>
            </AccordionDetails>
        </Accordion>
    )
}