import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import Service from "../services/Service";
import InlineTextField from "./common/InlineTextField";
import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface Props {
    open: boolean
    onClose: () => void
}

export default function AddDateDialog(props: Props) {
    const { open, onClose } = props
    const [occasion, setOccasion] = useState("Mother's Day")
    const [date, setDate] = useState(new Date())
    const [location, setLocation] = useState("Boston")

    const onCreate = async () => {
        await Service.createOccasion(occasion, date, location)
        onClose()
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle />
            <DialogContent>
                <InlineTextField defaultValue={"Mother's Day"} onCommit={(value: string): void => {
                    setOccasion(value)
                }} />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                    label="Date"
                    onChange={(newValue: any) => setDate(new Date(newValue))}
                    />
                </LocalizationProvider>
                <InlineTextField defaultValue={"Boston"} onCommit={(value: string): void => {
                    setLocation(value)
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
