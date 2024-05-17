import { Button, Card, CardContent, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Service from "../services/Service";
import Guest, { Occasion } from "../model/Guest";
import AddIcon from '@mui/icons-material/Add';
import AddDateDialog from "./AddDateDialog";

export default function GuestDateSelectionCard() {
    const { guestId } = useParams<{ guestId?: string }>()
    const [openDialog, setOpenDialog] = useState(false)
    const guest = {}

    const addRow = () => {
        setOpenDialog(true)
    }

    return (
        <Card>
            <CardHeader title='Guest Dates' style={{ textAlign: 'center' }} />
            <CardContent>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow key={'Header'}>
                                <TableCell style={{ textAlign: 'center' }}>
                                    <Typography>{'Special Dates'}</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {guest?.dates!.map((ocassion: Occasion) => (
                                <DateRow occasion={ocassion} />
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <Button variant='contained' onClick={addRow} startIcon={<AddIcon />}>Add
                                    Special Date</Button>
                                {openDialog && <AddDateDialog open={openDialog} onClose={(): void => setOpenDialog(false)} />}
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    )
}

interface RowProps {
    occasion: Occasion
}

function DateRow(props: RowProps) {
    const { occasion } = props
    return (
        <TableRow key={occasion.name}>

        </TableRow>
    )
}