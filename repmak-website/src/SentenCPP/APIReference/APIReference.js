
import React from 'react';
import './APIReference.css';
import Tokenizer from './Tokenizer';
import Inference from "./Inference";
import EmbeddingUtils from "./EmbeddingUtils";


export default function APIReference() {
    return (
        <>
            <div className="docs-outline">
                <b>sentenCPP</b> is organised into three primary namespaces to handle the following distinct stages:
                <ul className="numbered-list">
                    <li><a href="#/sentencpp-docs/api-reference#tokenizer">Tokenizer</a></li>
                    <li><a href="#/sentencpp-docs/api-reference#inference">Inference</a></li>
                    <li><a href="#/sentencpp-docs/api-reference#embedding-utils">Embedding Utilities</a></li>
                </ul>
            </div>

            todo

            {/*<div id="tokenizer">*/}
            {/*    <Tokenizer />*/}
            {/*</div>*/}

            {/*<div id="inference">*/}
            {/*    <Inference />*/}
            {/*</div>*/}

            {/*<div id="embedding-utils">*/}
            {/*    <EmbeddingUtils />*/}
            {/*</div>*/}
        </>
    );
}
