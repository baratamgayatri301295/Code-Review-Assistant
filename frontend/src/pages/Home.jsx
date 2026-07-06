import { Link } from "react-router-dom";
import {
    Box,
    Typography,
    Button,
    Container,
    Paper,
    Grid,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import HistoryIcon from "@mui/icons-material/History";
import SmartToyIcon from "@mui/icons-material/SmartToy";

function Home() {
    return (
        <Container maxWidth="md" sx={{ mt: 8 }}>
            <Paper elevation={5} sx={{ p: 5, textAlign: "center" }}>
                <SmartToyIcon color="primary" sx={{ fontSize: 70 }} />

                <Typography
                    variant="h3"
                    fontWeight="bold"
                    gutterBottom
                >
                    AI Code Review Assistant
                </Typography>

                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mb: 4 }}
                >
                    Analyze your code using AI and receive intelligent
                    suggestions, bug detection, and quality improvements.
                </Typography>

                <Box sx={{ mb: 5 }}>
                    <Button
                        component={Link}
                        to="/submit"
                        variant="contained"
                        size="large"
                        startIcon={<CodeIcon />}
                        sx={{ mr: 2 }}
                    >
                        Submit Code
                    </Button>

                    <Button
                        component={Link}
                        to="/history"
                        variant="outlined"
                        size="large"
                        startIcon={<HistoryIcon />}
                    >
                        View History
                    </Button>
                </Box>

                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Paper sx={{ p: 3 }}>
                            <Typography variant="h6">
                                🤖 AI Powered
                            </Typography>

                            <Typography>
                                Uses OpenAI to analyze your code.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Paper sx={{ p: 3 }}>
                            <Typography variant="h6">
                                🐞 Bug Detection
                            </Typography>

                            <Typography>
                                Detects bugs and coding mistakes.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Paper sx={{ p: 3 }}>
                            <Typography variant="h6">
                                📈 Code Quality
                            </Typography>

                            <Typography>
                                Provides improvement suggestions and score.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default Home;