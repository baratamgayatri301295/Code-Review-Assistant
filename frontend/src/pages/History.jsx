import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function History() {
    const [submissions, setSubmissions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadSubmissions();
    }, []);

    async function loadSubmissions() {
        try {
            const response = await api.get("/submissions/user/1");
            setSubmissions(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function analyzeSubmission(id) {
        try {
            await api.post(`/reviews/analyze/${id}`);
            navigate(`/review/${id}`);
        } catch (error) {
            console.error(error);

            // If already analyzed, just open the existing review
            if (
                error.response?.data?.error ===
                "Review already exists for this submission"
            ) {
                navigate(`/review/${id}`);
            } else {
                alert("Failed to analyze submission.");
            }
        }
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>Submission History</h1>

            {submissions.length === 0 ? (
                <p>No submissions found.</p>
            ) : (
                submissions.map((submission) => (
                    <div
                        key={submission.id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "15px",
                            marginBottom: "15px",
                            borderRadius: "8px",
                        }}
                    >
                        <h3>{submission.title}</h3>

                        <p>
                            <b>Language:</b> {submission.language}
                        </p>

                        <p>
                            <b>Description:</b> {submission.description}
                        </p>

                        <pre>{submission.codeContent}</pre>

                        <button
                            onClick={() => analyzeSubmission(submission.id)}
                            style={{
                                marginTop: "10px",
                                padding: "8px 16px",
                                cursor: "pointer",
                            }}
                        >
                            Analyze
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default History;