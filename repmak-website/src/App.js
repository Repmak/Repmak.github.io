import { HashRouter as Router, Routes, Route } from  'react-router-dom';
import Portfolio from "./Portfolio/Portfolio";
import sentenCPP from "./sentenCPP/sentenCPP";
import './App.css';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/sentencpp-docs" element={<sentenCPP />} />
            </Routes>
        </Router>
    );
}
