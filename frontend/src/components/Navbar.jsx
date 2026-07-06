import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <CodeIcon sx={{ mr: 1 }} />

                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1, fontWeight: "bold" }}
                >
                    Code Review Assistant
                </Typography>

                <Button color="inherit" component={Link} to="/">
                    Home
                </Button>

                <Button color="inherit" component={Link} to="/submit">
                    Submit Code
                </Button>

                <Button color="inherit" component={Link} to="/history">
                    History
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;