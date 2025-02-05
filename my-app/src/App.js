import logo from './logo.svg';
import './App.css';
import { motion } from "framer-motion";

function App() {
    return (
        <div className="content">
            <div className="flex items-center justify-center h-screen bg-black">
                <motion.div
                    className="absolute top-0 bg-black rounded-b-[30px] flex items-center justify-center text-white text-lg font-semibold"
                    initial={{width: 100, height: 30, borderRadius: "30px 30px 0 0"}}
                    animate={{width: 300, height: 60, borderRadius: "30px 30px 0 0"}}
                    transition={{duration: 0.8, ease: [0.4, 0, 0.2, 1]}}
                >
                    Justin Kamper
                </motion.div>
            </div>
        </div>
    );
}

export default App;
