import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "15px 40px",
                background: "#222",
            }}
        >
            <h2 style={{ color: "white" }}>Code Review Assistant</h2>

            <div>
                <Link
                    to="/"
                    style={{ color: "white", marginRight: "20px", textDecoration: "none" }}
                >
                    Home
                </Link>

                <Link
                    to="/submit"
                    style={{ color: "white", marginRight: "20px", textDecoration: "none" }}
                >
                    Submit Code
                </Link>

                <Link
                    to="/history"
                    style={{ color: "white", textDecoration: "none" }}
                >
                    History
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;