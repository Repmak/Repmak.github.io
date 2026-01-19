
import React, {useEffect, useState} from 'react';
import './APIReference.css';


export default function APIReference() {
    return (
        <>
            <div className="docs-p">
                <b>sentenCPP</b> is organised into three primary namespaces to handle the following distinct stages:
                <ul>
                    <li>Tokenizer</li>
                    <li>Inference</li>
                    <li>Embedding Utils</li>
                </ul>
            </div>

            <div className="indent">
                <div className="docs-header">
                    1. Tokenizer - <span className="code-quote">sentencpp::tokenizer</span>
                </div>
                <div className="docs-p">
                    This handles the conversion of raw strings into sequences of tokens compatible with transformer models.
                </div>

                <div className="indent">
                    <div className="docs-subheader">
                        1.1 class <span className="code-quote">TokenizerInterface</span>
                    </div>
                    <div className="docs-p">
                        This is an abstract class for all tokenization algorithms.
                    </div>
                    <div className="docs-p">
                        Methods:
                        <ul>
                            <li><span className="code-quote">tokenize</span></li>
                            <li><span className="code-quote">get_vocab_size</span></li>
                        </ul>
                    </div>
                </div>

                <div className="indent">
                    <div className="docs-subheader indent-1">
                        1.2 struct <span className="code-quote">TokenizerBaseConfig</span>
                    </div>
                    <div className="docs-p indent-2">
                        Universal configuration settings shared by all subclasses of <span className="code-quote">TokenizerInterface</span>.
                    </div>
                    <div className="docs-p indent-2">
                        Members:
                        <ul>
                            <li><span className="code-quote">max_input_chars_per_word</span></li>
                            <li><span className="code-quote">max_length</span></li>
                            <li><span className="code-quote">to_lowercase</span></li>
                            <li><span className="code-quote">strip_accents</span></li>
                            <li><span className="code-quote">clean_text</span></li>
                            <li><span className="code-quote">handle_chinese_chars</span></li>
                            <li><span className="code-quote">padding_token</span></li>
                            <li><span className="code-quote">unknown_token</span></li>
                            <li><span className="code-quote">classification_token</span></li>
                            <li><span className="code-quote">separator_token</span></li>
                            <li><span className="code-quote">mask_token</span></li>
                        </ul>
                    </div>
                </div>

                <div className="indent">
                    <div className="docs-subheader">
                        1.3 class <span className="code-quote">WordPiece</span>
                    </div>
                    <div className="docs-p">
                        An implementation of the WordPiece algorithm which inherits from <span className="code-quote">TokenizerInterface</span>. It breaks words into tokens using a max match approach.
                    </div>
                    <div className="docs-p">
                        Methods:
                        <ul>
                            <li><span className="code-quote">tokenize</span></li>
                            <li><span className="code-quote">get_vocab_size</span></li>
                        </ul>
                    </div>
                </div>

                <div className="indent">
                    <div className="docs-subheader">
                        1.4 struct <span className="code-quote">WordPieceConfig</span>
                    </div>
                    <div className="docs-p">
                        Specific parameters for initialising <span className="code-quote">WordPiece</span>. This struct inherits all members from <span className="code-quote">TokenizerBaseConfig</span>.
                    </div>
                    <div className="docs-p">
                        Members:
                        <ul>
                            <li><span className="code-quote">config_path</span></li>
                            <li><span className="code-quote">vocab_key</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="indent">
                <div className="docs-header">
                    2. Inference - <span className="code-quote">sentencpp::inference</span>
                </div>
                <div className="docs-p">
                    This namespace performs the execution of ONNX models through <a className="external-link" href="https://onnxruntime.ai/" target="_blank" rel="noopener noreferrer">ONNX Runtime</a>.
                </div>

                <div className="indent">

                </div>
            </div>

            <div className="indent">
                <div className="docs-header">
                    3. Embedding Utilities - <span className="code-quote">sentencpp::embedding_utils</span>
                </div>
                <div className="docs-p">
                    Contains static methods for mathematical operations on vectors.
                </div>

                <div className="indent">

                </div>
            </div>
        </>
    );
}
