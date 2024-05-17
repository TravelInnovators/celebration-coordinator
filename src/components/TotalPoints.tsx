import { Card, CardContent, CardHeader, Typography } from "@mui/material"

export default function TotalPoints() {
    return (
        <Card variant="outlined" style={{backgroundColor: "rgb(48,48,48)"}}>
            <CardHeader title='Total Points' style={{ textAlign: 'center', fontFamily: "Arial", color: "white" }} />
            <CardContent>
                <Typography variant="h4" style={{ textAlign: 'center', fontFamily: "Arial", fontWeight: "bold", color: "white" }} >
                    150,000
                </Typography>
            </CardContent>
        </Card>
    )
}