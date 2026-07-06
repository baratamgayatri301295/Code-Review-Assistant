import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import {
    Container,
    Typography,
    Card,
    CardContent,
    Button,
    Chip,
    Grid,
    CircularProgress,
} from "@mui/material";

function History() {
    const [submissions, setSubmissions] = useState([]);
    const [loadingId, setLoadingId] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        api.get("/submissions/user/1")
            .then((res) => setSubmissions(res.data.data))
            .catch(console.error);
    }, []);

    const analyzeSubmission = async (id) => {
        try {
            setLoadingId(id);

            await api.post(`/reviews/analyze/${id}`);

            navigate(`/review/${id}`);
        } catch (err) {
            console.error(err);

            // Already reviewed? Open the review page.
            navigate(`/review/${id}`);
        } finally {
            setLoadingId(null);
        }
    };

    return (
        <Container sx={{ mt: 5 }}>
            <Typography variant="h4" gutterBottom>
                Submission History
            </Typography>

            <Grid container spacing={3}>
                {submissions.map((submission) => (
                    <Grid item xs={12} md={6} key={submission.id}>
                        <Card elevation={4}>
                            <CardContent>
                                <Typography variant="h6">
                                    {submission.title}
                                </Typography>

                                <Typography>
                                    Language: {submission.language}
                                </Typography>

                                <Typography sx={{ mb: 2 }}>
                                    {submission.description || "No description"}
                                </Typography>

                                <Chip
                                    label="Ready"
                                    color="success"
                                    sx={{ mb: 2 }}
                                />

                                <Button
                                    variant="contained"
                                    fullWidth
                                    onClick={() => analyzeSubmission(submission.id)}
                                    disabled={loadingId === submission.id}
                                >
                                    {loadingId === submission.id ? (
                                        <CircularProgress size={22} color="inherit" />
                                    ) : (
                                        "Analyze / View Review"
                                    )}
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default History;