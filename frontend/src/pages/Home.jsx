import { Link } from "react-router-dom";

function Home() {
    return (
        <div
            style={{
                maxWidth: "900px",
                margin: "60px auto",
                textAlign: "center",
            }}
        >
            <h1>🤖 AI Code Review Assistant</h1>

            <p>
                Submit your code, get AI-powered feedback, and keep track of all
                your previous submissions.
            </p>

            <div style={{ marginTop: "40px" }}>
                <Link to="/submit">
                    <button style={{ marginRight: "20px", padding: "12px 24px" }}>
                        Submit Code
                    </button>
                </Link>

                <Link to="/history">
                    <button style={{ padding: "12px 24px" }}>
                        View History
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;