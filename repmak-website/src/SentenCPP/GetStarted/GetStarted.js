import React, {useEffect, useState} from 'react';
import './GetStarted.css';
import CodeSnippet from '../CodeSnippet/CodeSnippet';
import {code} from './code';

export default function GetStarted() {
    return (
        <>
            <div className="docs-outline">
                This guide will help you integrate <b>sentenCPP</b> into your first project.
                <ul className="numbered-list">
                    <li><a href="#/sentencpp-docs/get-started#prerequisites">Prerequisites</a></li>
                    <li><a href="#/sentencpp-docs/get-started#cmake-setup">CMake Setup</a></li>
                    <li><a href="#/sentencpp-docs/get-started#config-and-build">Configuring & Building</a></li>
                    <li><a href="#/sentencpp-docs/get-started#exporting-models-to-onnx">Exporting Models to ONNX</a></li>
                    <li><a href="#/sentencpp-docs/get-started#example-usage">Example Usage</a></li>
                </ul>
            </div>

            <div className="indent" id="prerequisites">
                <div className="docs-header">1. Prerequisites</div>
                <div className="docs-p">
                    Before installing <b>sentenCPP</b>, you need to set up two core dependencies:
                    <ul>
                        <li><b>ICU (International Components for Unicode):</b> Required for text normalisation. This can be installed via your package manager for macOS and Linux. For Windows, download the binary directly from the <a href="https://github.com/unicode-org/icu/releases" target="_blank" rel="noopener noreferrer" className="external-link">ICU Releases</a>.</li>
                        <li><b>ONNX Runtime:</b> This is the engine used to run the machine learning models. This can be download directly from the <a href="https://github.com/microsoft/onnxruntime/releases" target="_blank" rel="noopener noreferrer" className="external-link">ONNX Runtime Releases</a>. Extract it to a known directory.</li>
                    </ul>
                </div>

            </div>

            <div className="indent" id="cmake-setup">
                <div className="docs-header">2. CMake Setup</div>
                <div className="docs-p">
                    The easiest way to include <b>sentenCPP</b> in your project is by using CMake's <code>FetchContent</code> module. This will also automatically handle the <code>nlohmann_json</code> dependency.
                    <CodeSnippet lang="cmake" code={code[0]} />
                </div>
            </div>

            <div className="indent" id="config-and-build">
                <div className="docs-header">3. Configuring & Building</div>
                <div className="docs-p">
                    When building, you must provide the paths to your ICU and ONNX Runtime installations. Run the following commands from your project root:
                    <CodeSnippet lang="bash" code={code[1]} />
                    <b>Note:</b> If you have already configured <code>ICU_ROOT</code> and <code>ONNXRUNTIME_ROOT</code> as CMake options within your IDE, you do not need to pass them via the command line.
                </div>

            </div>

            <div className="indent" id="exporting-models-to-onnx">
                <div className="docs-header">4. Exporting Models to ONNX</div>
                <div className="docs-p">
                    The Hugging Face <code>optimum</code> library can be used to export your chosen model to the ONNX format. First, install the required packages:
                    <CodeSnippet lang="bash" code={code[2]} />
                    Then, run the export command, replacing <code>MODEL_NAME</code> with your preferred model (eg: <code>sentence-transformers/all-MiniLM-L6-v2</code>):
                    <CodeSnippet lang="bash" code={code[3]} />
                </div>

            </div>

            <div className="indent" id="example-usage">
                <div className="docs-header">5. Example Usage</div>
                <div className="docs-p">
                    The following snippet demonstrates how to tokenize text, generate embeddings, and calculate the cosine similarity between two sentences. Ensure the paths to <code>tokenizer.json</code> and <code>model.onnx</code> have been updated.
                    <CodeSnippet lang="cpp" code={code[4]} />
                </div>

            </div>
        </>
    );
}
