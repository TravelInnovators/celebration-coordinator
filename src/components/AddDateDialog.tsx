import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

interface Props {
    open: boolean
    onClose: () => void
}

export default function AddDateDialog(props:Props) {
    const {open, onClose} = props

    const onCreate = () => {
        
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle />
            <DialogContent>
                
            </DialogContent>
            <DialogActions>
                <Button color='primary' variant='contained' onClick={onCreate}>ADD</Button>
                <Button color='secondary' variant='contained' onClick={onClose}>CANCEL</Button>
            </DialogActions>
        </Dialog>
    )
}