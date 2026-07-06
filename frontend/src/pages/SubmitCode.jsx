import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import {
    Container,
    Paper,
    Typography,
    TextField,
    MenuItem,
    Button,
    Alert,
    CircularProgress,
} from "@mui/material";

function SubmitCode() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        userId: 1,
        title: "",
        language: "java",
        description: "",
        codeContent: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError("");

        try {
            await api.post("/submissions", form);

            alert("Submission created successfully!");

            navigate("/history");
        } catch (err) {
            console.error(err);
            setError("Failed to submit code.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Paper elevation={4} sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Submit Your Code
                </Typography>

                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}

                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Title"
                        name="title"
                        margin="normal"
                        value={form.title}
                        onChange={handleChange}
                        required
                    />

                    <TextField
                        select
                        fullWidth
                        label="Language"
                        name="language"
                        margin="normal"
                        value={form.language}
                        onChange={handleChange}
                    >
                        <MenuItem value="java">Java</MenuItem>
                        <MenuItem value="python">Python</MenuItem>
                        <MenuItem value="javascript">JavaScript</MenuItem>
                    </TextField>

                    <TextField
                        fullWidth
                        label="Description"
                        name="description"
                        margin="normal"
                        value={form.description}
                        onChange={handleChange}
                    />

                    <TextField
                        fullWidth
                        multiline
                        rows={12}
                        label="Paste your code here"
                        name="codeContent"
                        margin="normal"
                        value={form.codeContent}
                        onChange={handleChange}
                        required
                    />

                    <Button
                        variant="contained"
                        type="submit"
                        fullWidth
                        size="large"
                        sx={{ mt: 3 }}
                        disabled={loading}
                    >
                        {loading ? (
                            <CircularProgress size={24} color="inherit" />
                        ) : (
                            "Submit Code"
                        )}
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}

export default SubmitCode;