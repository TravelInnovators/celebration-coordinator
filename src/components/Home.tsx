import AdditionalInfoCard from "./AdditionalInfoCard";
import TotalPoints from "./TotalPoints";
import { Card, CardContent, CardHeader, CardMedia, Paper } from "@mui/material";

export default function Home() {
    return (
        <Card style={{ backgroundColor: "rgb(48,48,48)" }}>
            <Paper style={{ backgroundImage: `url(${"../static/images/home_top.jpeg"})` }}>
                <CardHeader title='Account Information' style={{ textAlign: 'center', color: "white" }} />
                <CardContent>
                    <CardMedia
                        sx={{ height: 320 }}
                        image={require("../static/images/home_top.jpeg")}
                        title="hotel"
                    />
                    <TotalPoints />
                    <AdditionalInfoCard />
                    <CardMedia
                        sx={{ height: 90 }}
                        image={require("../static/images/home_bottom.jpeg")}
                        title="hotel"
                    />
                </CardContent>
            </Paper>
        </Card>
    )
}