import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

import {
    Container,
    Card,
    CardContent,
    Typography,
    CircularProgress,
    Alert,
    Grid,
} from "@mui/material";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function ReviewResult() {
    const { id } = useParams();

    const [review, setReview] = useState(null);
    const [submission, setSubmission] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const reviewRes = await api.get(`/reviews/${id}`);
                const submissionRes = await api.get(`/submissions/${id}`);

                setReview(reviewRes.data.data);
                setSubmission(submissionRes.data.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, [id]);

    if (loading)
        return (
            <Container sx={{ mt: 5 }}>
                <CircularProgress />
            </Container>
        );

    if (!review)
        return (
            <Container sx={{ mt: 5 }}>
                <Alert severity="error">
                    Review not found.
                </Alert>
            </Container>
        );

    return (
        <Container sx={{ mt: 5 }}>
            <Typography variant="h4" gutterBottom>
                AI Code Review
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">
                                Overall Score
                            </Typography>

                            <Typography variant="h2">
                                {review.overallScore}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">
                                Issues Found
                            </Typography>

                            <Typography variant="h2">
                                {review.issuesFound}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">
                                Suggestions
                            </Typography>

                            <Typography variant="h2">
                                {review.improvementsSuggested}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Card sx={{ mt: 4 }}>
                <CardContent>
                    <Typography variant="h5">
                        Submitted Code
                    </Typography>

                    <SyntaxHighlighter
                        language={submission.language}
                        style={oneDark}
                    >
                        {submission.codeContent}
                    </SyntaxHighlighter>
                </CardContent>
            </Card>

            <Card sx={{ mt: 4 }}>
                <CardContent>
                    <Typography variant="h5">
                        AI Feedback
                    </Typography>

                    <Typography sx={{ whiteSpace: "pre-wrap" }}>
                        {review.feedback}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}

export default ReviewResult;