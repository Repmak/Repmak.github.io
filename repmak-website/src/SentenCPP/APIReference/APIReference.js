
import React, {useEffect, useState} from 'react';
import './APIReference.css';


export default function APIReference() {
    return (
        <div>


            ## 4. API Reference
            sentenCPP is organised into three primary namespaces to handle the following distinct stages:
            - [**4.1 Tokenizer**](#41-sentencpptokenizer)
            - [**4.2 Inference**](#42-sentencppinference)
            - [**4.3 Embedding Utils**](#43-sentencppembedding_utils)

            ### 4.1 `sentencpp::tokenizer`
            This handles the conversion of raw strings into sequences of tokens compatible with transformer models.

            #### 4.1.1 `class WordPiece`
            This is a subclass of `TokenizerInterface`. This class performs WordPiece tokenization.

            **`WordPiece(const WordPieceConfig& config)`**: Initialises the tokenizer using [4.1.2 WordPieceConfig](#412-struct-wordpiececonfig).

            **`std::vector tokenize(const std::string& text)`**: Normalises the string, converts it into a vector of tokens, and post-processes it.

            #### 4.1.2 `struct WordPieceConfig`
            This is a sub-struct of `TokenizerBaseConfig`. The members of this struct determine the behaviour and operations of the WordPiece tokenizer.

            **`std::size_t max_input_chars_per_word = 100`**: This value should match your selected model's configuration settings. Sets a limit on the number of characters of a word. A word with length exceeding this limit will automatically be represented as an `UNK` token.

            **`std::size_t max_length = 128`**: This value should match your selected model's configuration settings. Sets a limit on the number of tokens for a sequence. Tokens beyond this limit will be truncated. Note that 2 indices are reserved for special tokens; index 0 stores a `CLS` token, adn index 127 stores a `SEP` token.

            **`bool to_lowercase = true`**: This value should match your selected model's configuration settings.

            **`bool strip_accents = true`**: This value should match your selected model's configuration settings.

            **`bool clean_text = true`**: This value should match your selected model's configuration settings.

            **`bool handle_chinese_chars = true`**: This value should match your selected model's configuration settings.

            **`std::string padding_token = "[PAD]"`**: This value should match your selected model's special token vocabulary.

            **`std::string unknown_token = "[UNK]"`**: This value should match your selected model's special token vocabulary.

            **`std::string classification_token = "[CLS]"`**: This value should match your selected model's special token vocabulary.

            **`std::string separator_token = "[SEP]"`**: This value should match your selected model's special token vocabulary.

            **`std::string mask_token = "[MASK]"`**: This value should match your selected model's special token vocabulary.

            ### 4.2 `sentencpp::inference`
            This namespace performs the execution of ONNX models through ONNX Runtime.


            ### 4.3 `sentencpp::embedding_utils`
            Contains static methods for mathematical operations on vectors.


        </div>
    );
}
