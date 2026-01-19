
import React, {useEffect, useState} from 'react';
import './APIReference.css';
import DocsTable from "./DocsTable";


export default function Tokenizer() {
    return (
        <div className="indent">
            <div className="docs-header">1. Tokenizer - <code>sentencpp::tokenizer</code></div>
            <div className="docs-p">This handles the conversion of raw strings into sequences of tokens compatible with transformer models.</div>

            <div className="indent">
                <div className="docs-header">1.1 Class <code>VocabList</code></div>
                <div className="docs-p">Manages the bidirectional mapping between string tokens and unique integer IDs, including support for special token roles.</div>

                <div className="indent">
                    <div className="docs-header">1.1.1 Enum <code>TokenRole</code></div>
                    <div className="docs-p">
                        Defines specific roles for special tokens within the vocabulary.
                        <DocsTable
                            header={["Value", "Description"]}
                            rows={[
                                ["Padding", "Used to pad sequences to a fixed length."],
                                ["Unknown", "Represent out-of-vocabulary tokens."],
                                ["Classification", "Special token for sequence-level tasks."],
                                ["Separator", "Separates segments or ends a sequence."],
                                ["Mask", "Used for masked language modeling tasks."]
                            ]}
                        />
                    </div>

                    <div className="docs-header">1.1.2 Constructor</div>
                    <div className="docs-p">
                        <code>VocabList() = default;</code>
                        <br />
                        Initialises an empty vocabulary container.
                    </div>

                    <div className="docs-header">1.1.3 Attributes</div>
                    <div className="docs-p">
                        <DocsTable
                            header={["Attribute", "Access Specifier", "Type", "Description"]}
                            rows={[
                                ["string_to_id_map_", "Private", "std::unordered_map<std::string, int64_t>", "Maps string tokens to their integer IDs."],
                                ["id_to_string_map_", "Private", "std::vector<std::string>", "Maps integer IDs back to string tokens using vector indexing."],
                                ["special_tokens_map_", "Private", "std::unordered_map<TokenRole, std::string>", "Stores strings associated with specific TokenRoles."]
                            ]}
                        />
                    </div>

                    <div className="docs-header">1.1.4 Modification Methods</div>
                    <div className="docs-p">
                        <DocsTable
                            header={["Method", "Parameters", "Return", "Description"]}
                            rows={[
                                ["set_token", "const std::string& token_str, int64_t token_id", "bool", "Inserts a token-ID pair into the bidirectional maps."],
                                ["set_special_token", "const std::string& token_str, TokenRole token_role", "bool", "Assigns a specific string to a special token role."]
                            ]}
                        />
                    </div>

                    <div className="docs-header">1.1.5 Accessor Methods</div>
                    <div className="docs-p">
                        <DocsTable
                            header={["Method", "Return Type", "Description"]}
                            rows={[
                                ["get_string_to_id_map()", "const std::unordered_map<std::string, int64_t>&", "Returns the full token-to-ID mapping."],
                                ["get_id_to_string_map()", "const std::vector<std::string>&", "Returns the full ID-to-token mapping."],
                                ["get_special_tokens_map_()", "const std::unordered_map<TokenRole, std::string>&", "Returns the map of all special tokens."],
                                ["get_special_token_val(TokenRole role)", "std::string", "Returns the string value associated with a specific role."]
                            ]}
                        />
                    </div>

                    <div className="docs-header">1.1.6 Lookup Methods</div>
                    <div className="docs-p">
                        <DocsTable
                            header={["Method", "Parameter", "Return Type", "Description"]}
                            rows={[
                                ["token_to_id", "const std::string& token_str", "std::optional<int64_t>", "Retrieves the ID for a token. Returns nullopt if not found."],
                                ["id_to_token", "int64_t token_id", "std::optional<std::string>", "Retrieves the string for an ID. Returns nullopt if out of range."]
                            ]}
                        />
                    </div>

                    <div className="docs-header">1.1.7 Utilities</div>
                    <div className="docs-p">
                        <DocsTable
                            header={["Method", "Signature", "Description"]}
                            rows={[
                                ["size", "size_t size() const", "Returns the total number of tokens in the vocabulary."],
                                ["operator<<", "friend std::ostream& operator<<", "Serializes the VocabList to an output stream."]
                            ]}
                        />
                    </div>
                </div>
            </div>

            <div className="indent">
                <div className="docs-header">1.2 Class <code>TokenizerInterface</code></div>
                <div className="docs-p">This is an abstract class for all tokenization algorithms.</div>

                <div className="indent">
                    <div className="docs-header">1.2.1 Constructor</div>
                    <div className="docs-p">
                        todo
                        <DocsTable
                            header={["Members", "Type", "Default Value", "Description"]}
                            rows={[
                                ["", "", "", "The maximum sequence length. Inputs exceeding this are truncated."]
                            ]}
                        />
                    </div>

                    <div className="docs-header">1.2.2 Method <code>tokenize</code></div>
                    <div className="docs-p">
                        This method
                        <DocsTable
                            header={["Parameter", "Type", "Default Value", "Description"]}
                            rows={[
                                ["", "", "", "The maximum sequence length. Inputs exceeding this are truncated."]
                            ]}
                        />
                    </div>

                    <div className="docs-header">1.2.3 Method <code>get_vocab_size</code></div>
                    <div className="docs-p">
                        This method returns the size from the vocab list instance.
                        <DocsTable
                            header={["Parameter", "Type", "Default Value", "Description"]}
                            rows={[
                                ["", "", "", "The maximum sequence length. Inputs exceeding this are truncated."]
                            ]}
                        />
                    </div>
                </div>

                <div className="indent">
                    <div className="docs-header">1.3 Class <code>TokenizerBaseConfig</code></div>
                </div>
            </div>

                        {/*<li><span className="code-quote">max_input_chars_per_word</span></li>*/}
                        {/*<li><span className="code-quote">max_length</span></li>*/}
                        {/*<li><span className="code-quote">to_lowercase</span></li>*/}
                        {/*<li><span className="code-quote">strip_accents</span></li>*/}
                        {/*<li><span className="code-quote">clean_text</span></li>*/}
                        {/*<li><span className="code-quote">handle_chinese_chars</span></li>*/}
                        {/*<li><span className="code-quote">padding_token</span></li>*/}
                        {/*<li><span className="code-quote">unknown_token</span></li>*/}
                        {/*<li><span className="code-quote">classification_token</span></li>*/}
                        {/*<li><span className="code-quote">separator_token</span></li>*/}
                        {/*<li><span className="code-quote">mask_token</span></li>*/}




            <div className="indent">
                <div className="docs-subheader">
                    1.2 class <code>WordPiece</code>
                </div>
                <div className="docs-p">
                    An implementation of the WordPiece algorithm which inherits from <code>TokenizerInterface</code>. It breaks words into tokens using a max match approach.
                </div>
                <div className="docs-p">
                    Methods:
                    <ul>
                        <li><code>tokenize</code></li>
                        <li><code>get_vocab_size</code></li>
                    </ul>
                </div>
            </div>

            <div className="indent">
                <div className="docs-subheader">
                    1.4 struct <code>WordPieceConfig</code>
                </div>
                <div className="docs-p">
                    Specific parameters for initialising <code>WordPiece</code>. This struct inherits all members from <code>TokenizerBaseConfig</code>.
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
    );
}
