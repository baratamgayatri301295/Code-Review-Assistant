import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function ReviewResult() {
    const { id } = useParams();

    const [review, setReview] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchReview();
    }, []);

    async function fetchReview() {
        try {
            const response = await api.get(`/reviews/${id}`);
            setReview(response.data.data);
        } catch (err) {
            console.error(err);
            setError("Unable to load review.");
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <h2>Loading review...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <div style={{ maxWidth: "900px", margin: "40px auto" }}>
            <h1>AI Code Review</h1>

            <hr />

            <h3>Overall Score</h3>
            <p>{review.overallScore}</p>

            <h3>Issues Found</h3>
            <p>{review.issuesFound}</p>

            <h3>Improvements Suggested</h3>
            <p>{review.improvementsSuggested}</p>

            <h3>Feedback</h3>

            <pre
                style={{
                    background: "#f5f5f5",
                    padding: "20px",
                    borderRadius: "8px",
                    whiteSpace: "pre-wrap"
                }}
            >
                {review.feedback}
            </pre>
        </div>
    );
}

export default ReviewResult;