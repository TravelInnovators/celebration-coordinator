import { Button, Card, CardContent, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Service from "../services/Service";
import Guest, { Occasion } from "../model/Guest";
import AddIcon from '@mui/icons-material/Add';
import AddDateDialog from "./AddDateDialog";
import AddGuestDialog from "./AddGuestDialog";

export default function GuestDateSelectionCard() {
    const { guestId } = useParams<{ guestId?: string }>()
    const [openOccasionDialog, setOpenOccasionDialog] = useState(false)
    const [openGuestDialog, setOpenGuestDialog] = useState(false)
    const guest = {} as Guest
    guest.dates = [] as Occasion[]

    const addOccasionRow = () => {
        setOpenOccasionDialog(true)
    }
    const addGuestRow = () => {
        setOpenGuestDialog(true)
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
                                <Button variant='contained' onClick={addOccasionRow} startIcon={<AddIcon />}>Add
                                    Special Date</Button>
                                {openOccasionDialog && <AddDateDialog open={openOccasionDialog} onClose={(): void => setOpenOccasionDialog(false)} />}
                            </TableRow>
                            
                        </TableFooter>
                    </Table>
                </TableContainer>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow key={'Header'}>
                                <TableCell style={{ textAlign: 'center' }}>
                                    <Typography>{'Special Guests'}</Typography>
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
                                <Button variant='contained' onClick={addGuestRow} startIcon={<AddIcon />}>Add
                                    Special Guests</Button>
                                {openGuestDialog && <AddGuestDialog open={openGuestDialog} onClose={(): void => setOpenGuestDialog(false)} />}
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