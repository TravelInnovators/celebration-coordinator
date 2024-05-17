import { Button, Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AdditionalInfoCard() {
    let navigate = useNavigate()

    const handleCreate = async (): Promise<void> => {
        navigate('/guests/:guestId/dates')
    }

    return (
        <Card style={{backgroundColor: "rgb(48,48,48)"}}>
            <CardContent>
                <TableContainer component={Paper} style={{backgroundColor: "rgb(48,48,48)"}}>
                    <Table>
                        <TableHead>
                            <TableRow key={'Header'}>
                                <TableCell style={{ textAlign: 'center' }}>
                                    <Typography variant="h6" style={{color:"white"}}>{'Additional Info'}</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <DisabledButtonTableRow title={"Program Benefits"} />
                            <DisabledButtonTableRow title={"My Member Card"} />
                            <TableRow>
                                <TableCell style={{ textAlign: 'center' }}>
                                    <Button onClick={handleCreate}>Special Dates</Button>
                                </TableCell>
                            </TableRow>
                            <DisabledButtonTableRow title={"Member Support"} />
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    )
}

interface RowProps {
    title: string
}

function DisabledButtonTableRow(props: RowProps) {
    const { title } = props

    return (
        <TableRow key={title}>
            <TableCell style={{ textAlign: 'center', color: "white" }}>
                <Button disabled style={{color: "white"}}>{title}</Button>
            </TableCell>
        </TableRow>
    )
}