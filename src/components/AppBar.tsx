import { Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';

export default function MyAppBar(): JSX.Element
{
    return (
            <AppBar position="static" >
                <Toolbar sx={{ justifyContent: "space-between" } } style={{backgroundColor: "#00358E"}}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1}} style={{fontFamily: "Arial"}}>
                        Victor • 123456789 • Silver Elite
                    </Typography>
                    <Button color="inherit" style={{fontFamily: "Arial"}}>Settings</Button>
                </Toolbar>
            </AppBar>
    )
}