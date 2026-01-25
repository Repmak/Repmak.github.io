import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import cpp from 'react-syntax-highlighter/dist/esm/languages/prism/cpp';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import cmake from 'react-syntax-highlighter/dist/esm/languages/prism/cmake';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('cpp', cpp);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('cmake', cmake);

export default function CodeSnippet({ lang, code }) {
    return (
        <div style={{ maxWidth: '850px', margin: '0.25rem auto' }}>
            <SyntaxHighlighter
                language={lang}
                style={oneLight}
                customStyle={{
                    backgroundColor: '#fafafa',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    border: '1px solid #CDD1D3',
                    fontFamily: "JetBrains Mono"
                }}
            >
                {code.trim()}
            </SyntaxHighlighter>
        </div>
    );
};
