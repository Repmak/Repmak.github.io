import React, {useEffect, useState} from 'react';
import './Overview.css';


export default function Overview() {
    return (
        <>
            <div>
                <div className="docs-header">Welcome!</div>
                <div className="docs-p indent-1">
                    <b>sentenCPP</b> is a C++20 library designed to replicate the ease of use of the Python library <span className="code-quote">sentence-transformers</span>. It provides a complete pipeline from <b>text tokenization</b> to <b>vector embeddings</b>, extending to <b>mathematical operations</b> for analysis.
                </div>
            </div>

            <div>
                <div className="docs-header">Why?</div>
                <div className="docs-p indent-1">
                    While NLP in C++ is entirely possible using various high-performance tools, the process of manually stitching these libraries together is often time-consuming and complex. <b>sentenCPP</b> is not intended to replace hyper-specialised libraries. It aims to eliminate the friction inherent to C++ development.
                </div>
            </div>

            <div>
                <div className="docs-header">The Vision</div>
                <div className="docs-p indent-1">
                    <b>sentenCPP</b> was envisioned as a way to bring the "it just works" simplicity of Python's NLP ecosystem to C++. It provides:
                    <ul>
                        <li>All-in-One Pipeline: Handle the entire lifecycle of a sentence embedding, including pre-processing, encoding, and post-processing.</li>
                        <li>Simplified Deployment: Export (almost!) any BERT-based models to ONNX and load them with a few lines of code.</li>
                        <li>Native Performance: Run inference directly in your C++ application, eliminating the overhead of the Python interpreter.</li>
                    </ul>
                </div>
                <div className="docs-p indent-1">
                    Show below are equivalent Python and C++ snippets of code.
                </div>
                <div className="docs-p indent-1">
                    todo put image here
                </div>
            </div>

            <div>
                <div className="docs-header">Suggestions & Feedback</div>
                <div className="docs-p indent-1">
                    Please feel free to open an issue on <a className="external-link" href="https://github.com/Repmak/sentenCPP" target="_blank" rel="noopener noreferrer">GitHub</a> or reach out on <a className="external-link" href="https://www.linkedin.com/in/justin-kamper/" target="_blank" rel="noopener noreferrer">LinkedIn</a>!
                </div>
            </div>
        </>
    );
}
