import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SubmitCode from "./pages/SubmitCode";
import ReviewResult from "./pages/ReviewResult";
import History from "./pages/History";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/submit" element={<SubmitCode />} />
                <Route path="/history" element={<History />} />
                <Route path="/review/:id" element={<ReviewResult />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;