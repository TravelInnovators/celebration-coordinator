import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import Service from "../services/Service";
import InlineTextField from "./common/InlineTextField";
import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface Props {
    open: boolean
    onClose: () => void
}

export default function AddGuestDialog(props: Props) {
    const { open, onClose } = props
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const onCreate = async () => {
        await Service.createGuest(firstName, lastName, email)
        onClose()
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle />
            <DialogContent>
                <InlineTextField defaultValue={""} onCommit={(value: string): void => {
                    setFirstName(value)
                }} />
                <InlineTextField defaultValue={""} onCommit={(value: string): void => {
                    setLastName(value)
                }} />
                <InlineTextField defaultValue={""} onCommit={(value: string): void => {
                    setEmail(value)
                }} />
                
            </DialogContent>
            <DialogActions>
                <Button color='primary' variant='contained' onClick={onCreate}>ADD</Button>
                <Button color='secondary' variant='contained' onClick={onClose}>CANCEL</Button>
            </DialogActions>
        </Dialog>
    )
}

function aysnc() {
    throw new Error("Function not implemented.");
}
