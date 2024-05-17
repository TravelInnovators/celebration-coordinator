import { Button, Card, CardContent, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Service from "../services/Service";
import { Occasion } from "../model/Guest";
import AddIcon from '@mui/icons-material/Add';
import AddDateDialog from "./AddDateDialog";
import AddGuestDialog from "./AddGuestDialog";
import ActionCell from "./common/ActionCell";

export default function GuestDateSelectionCard() {
    const [openOccasionDialog, setOpenOccasionDialog] = useState(false)
    const [openGuestDialog, setOpenGuestDialog] = useState(false)
    const [occasions, setOccacions] = useState([] as Occasion[])

    useEffect(() => {
        (async (): Promise<void> => {
            const list = await Service.getOcassion()
            if (!list) {
                return
            }
            setOccacions(list)
        })()
    }, [])

    const addOccasionRow = () => {
        setOpenOccasionDialog(true)
    }
    const addGuestRow = () => {
        setOpenGuestDialog(true)
    }

    const renderRows = () => {
        occasions.forEach((occasion: Occasion) => {
            <TableRow>
                <TableCell>{occasion.occasion}</TableCell>
                <TableCell>{String(occasion.date)}</TableCell>
                <TableCell>{occasion.location}</TableCell>
                <ActionCell path={"/product"} />
            </TableRow>
        })
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
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Location</TableCell>
                                <TableCell>View Products</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {occasions.map((occasion: Occasion) => (
                                <TableRow>
                                    <TableCell>{occasion.occasion}</TableCell>
                                    <TableCell>{String(occasion.date)}</TableCell>
                                    <TableCell>{occasion.location}</TableCell>
                                    <ActionCell path={"/product"} />
                                </TableRow>
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
                                <TableCell style={{ textAlign: 'center' }} colSpan={3}>
                                    <Typography>{'Special Guests'}</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{"Greg"}</TableCell>
                                <TableCell>{"Willy"}</TableCell>
                                <TableCell>{"travelinnovators.gmail.com"}</TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <Button variant='contained' onClick={addGuestRow} startIcon={<AddIcon />}>Add
                                    Special Guests</Button>
                            </TableRow>
                            {openGuestDialog && <AddGuestDialog open={openGuestDialog} onClose={(): void => setOpenGuestDialog(false)} />}
                        </TableFooter>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    )
}