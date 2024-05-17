import { Button, Card, CardContent, CardHeader, CardMedia, Container, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductSelectionPage() {

    return (
        <Container style={{backgroundColor:"rgb(48,48,48"}}>
            <Card sx={{ p: 1, mb: 1 }}>
                <CardMedia
                    sx={{ height: 240 }}
                    image={require("../static/images/nycmq-double-guestroom.jpg")}
                    title="hotel"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" style={{fontFamily: "Arial"}}>
                        The Ritz-Carlton New York
                    </Typography>
                    <Typography gutterBottom variant="body2" style={{fontFamily: "Arial"}}>
                        New York, New York
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ p: 1, mb: 1 }}>
                <CardMedia
                    sx={{ height: 240 }}
                    image={require("../static/images/spa.jpg")}
                    title="hotel"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" style={{fontFamily: "Arial"}}>
                        Ritz-Carlton Spa
                    </Typography>
                    <Typography gutterBottom variant="body2" style={{fontFamily: "Arial"}}>
                        New York, New York
                    </Typography>
                </CardContent>
            </Card>
        </Container>
        
    )
}