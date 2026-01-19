import React from 'react';
import './APIReference.css';


export default function DocsTable({ header=[], rows=[] }) {
    return (
        <div className="docs-table-container">
            <table className="docs-table">
                <thead>
                    <tr>
                        {header.map((colName) => (
                            /* todo keys need to be unique across the app */
                            <th key={"field-" + colName}>{colName}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((vals) => (
                        <tr>
                            {vals.map((val) => (
                                <td><span className="code-member">{val}</span></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
