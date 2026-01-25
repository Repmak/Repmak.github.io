import React, {useEffect, useState} from 'react';
import './Overview.css';
import SentenCPPLogo from '../assets/sentenCPPLogo.png';

export default function Overview() {
    return (
        <>
            <div className="indent">
                <div className="docs-header">Welcome!</div>
                <div className="docs-p">
                    <b>sentenCPP</b> is a C++20 library designed to replicate the functionality and ease of use of the Python library <code>sentence-transformers</code>. It provides a complete pipeline from <b>text tokenization</b> to <b>vector embeddings</b>, extending to <b>mathematical operations</b> for analysis.
                </div>
                <img src={SentenCPPLogo} className="docs-img" alt="sentenCPP Logo"/>
            </div>

            <div className="indent">
                <div className="docs-header">Why?</div>
                <div className="docs-p">
                    While NLP in C++ is entirely possible using various high-performance tools, the process of manually integrating these libraries together is often time-consuming and complex. <b>sentenCPP</b> aims to eliminate the friction inherent to this workflow. However, it is not intended to replace hyper-specialised libraries.
                </div>
            </div>

            <div className="indent">
                <div className="docs-header">The Vision</div>
                <div className="docs-p">
                    <b>sentenCPP</b> was envisioned as a way to bring the "it just works" simplicity of Python's NLP ecosystem to C++. It streamlines the development process by offering:
                    <ul>
                        <li>End-to-End Pipeline: Manage the entire lifecycle of a sentence embedding within a single framework.</li>
                        <li>Seamless Deployment: Export (almost!) any BERT-based model to ONNX and load it with just a few lines of code.</li>
                        <li>Native Performance: Run inference directly in your C++ application, eliminating the memory and latency overhead of the Python interpreter.</li>
                    </ul>
                </div>
                {/*<div className="docs-p">*/}
                {/*    Here is a snippet */}
                {/*</div>*/}
                {/*<div className="docs-p">*/}
                {/*    todo put image here*/}
                {/*</div>*/}
            </div>

            <div className="indent">
                <div className="docs-header">Suggestions & Feedback</div>
                <div className="docs-p">
                    Please feel free to open an issue on <a className="external-link" href="https://github.com/Repmak/sentenCPP" target="_blank" rel="noopener noreferrer">GitHub</a> or reach out on <a className="external-link" href="https://www.linkedin.com/in/justin-kamper/" target="_blank" rel="noopener noreferrer">LinkedIn</a>!
                </div>
            </div>
        </>
    );
}
