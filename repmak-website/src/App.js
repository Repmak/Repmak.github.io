import { HashRouter as Router, Routes, Route } from  'react-router-dom';
import Portfolio from './Portfolio/Portfolio';
import SentenCPP from './SentenCPP/SentenCPP';
import './App.css';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/sentencpp-docs" element={<SentenCPP />} />
            </Routes>
        </Router>
    );
}
