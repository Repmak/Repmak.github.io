
import React, {useEffect, useState} from 'react';
import './APIReference.css';
import Tokenizer from './Tokenizer';
import Inference from "./Inference";
import EmbeddingUtils from "./EmbeddingUtils";


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

            <Tokenizer />
            <Inference />
            <EmbeddingUtils />
        </>
    );
}
