import React, { useState } from 'react';

// Child Component (Props)
const Greeting = ({ name }) => (
    <div className="alert alert-info">
        Hello, <strong>{name}</strong>! (Passed via Props)
    </div>
);

const BasicConcepts = () => {
    // State
    const [count, setCount] = useState(0);
    const [showInfo, setShowInfo] = useState(false);

    // JSX: JavaScript XML
    return (
        <div>
            <h2>Basics: State, Props & JSX</h2>

            {/* State Usage */}
            <div className="card mb-3 p-3">
                <h4>State Management</h4>
                <p>Current Count: {count}</p>
                <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
                    Increment
                </button>
            </div>

            {/* Props Usage */}
            <div className="card mb-3 p-3">
                <h4>Props</h4>
                <Greeting name="User" />
            </div>

            {/* Conditional Rendering & Virtual DOM Info */}
            <div className="card p-3">
                <h4 onClick={() => setShowInfo(!showInfo)} style={{ cursor: 'pointer', color: 'blue' }}>
                    Click to learn about Virtual DOM {showInfo ? '▼' : '▶'}
                </h4>

                {showInfo && (
                    <div className="mt-2 text-secondary">
                        <p>
                            <strong>Virtual DOM:</strong> A lightweight JavaScript representation of the DOM.
                            React keeps a copy of the DOM in memory. When state changes, correct updates are calculated (Diffing)
                            and only the changes are rendered to the real DOM (Reconciliation).
                        </p>
                        <p>
                            <strong>JSX:</strong> Syntax extension for JavaScript. It looks like HTML but works with JS logic.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BasicConcepts;
