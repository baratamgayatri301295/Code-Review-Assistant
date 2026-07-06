import { useState } from "react";
import api from "../services/api";

function SubmitCode() {
    const [formData, setFormData] = useState({
        userId: 1,
        title: "",
        language: "java",
        codeContent: "",
        description: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/submissions", formData);
            setMessage("✅ Code submitted successfully!");
            console.log(response.data);
        } catch (error) {
            console.error(error);
            setMessage("❌ Submission failed.");
        }
    };

    return (
        <div style={{ maxWidth: "900px", margin: "40px auto" }}>
            <h2>Submit Your Code</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
                />

                <select
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
                >
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                    <option value="javascript">JavaScript</option>
                    <option value="cpp">C++</option>
                </select>

                <textarea
                    name="codeContent"
                    rows="12"
                    placeholder="Paste your code here..."
                    value={formData.codeContent}
                    onChange={handleChange}
                    style={{ width: "100%", marginBottom: "15px" }}
                />

                <textarea
                    name="description"
                    rows="4"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    style={{ width: "100%", marginBottom: "15px" }}
                />

                <button type="submit">
                    Submit Code
                </button>
            </form>

            <h3>{message}</h3>
        </div>
    );
}

export default SubmitCode;