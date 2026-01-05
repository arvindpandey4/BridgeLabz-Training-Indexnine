import React, { useState } from 'react';

// 1. HOC (Higher Order Component) - Similar to Decorators
// Function that takes a component and returns a new component
const withLogger = (WrappedComponent) => {
    return (props) => {
        console.log(`[HOC Logger] Rendering ${WrappedComponent.name}`);
        return (
            <div style={{ border: '2px dashed orange', padding: '10px' }}>
                <p className="text-warning small mb-0">Wrapped by HOC</p>
                <WrappedComponent {...props} />
            </div>
        );
    };
};

const SimpleComponent = ({ message }) => <h5>{message}</h5>;
const EnhancedComponent = withLogger(SimpleComponent);


// 2. Render Props Pattern
// A component with a prop (often called 'render') that is a function returning JSX
const MouseTracker = ({ render }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };

    return (
        <div style={{ height: '100px', background: '#eee' }} onMouseMove={handleMouseMove}>
            {render(position)}
        </div>
    );
};


const HPatterns = () => {
    return (
        <div>
            <h2>Design Patterns: HOC & Render Props</h2>

            <div className="row">
                {/* HOC Demo */}
                <div className="col-md-6">
                    <div className="card p-3 mb-3">
                        <h4>HOC (Higher Order Component)</h4>
                        <p>Reusing component logic (like decorators).</p>
                        <EnhancedComponent message="I am the core component content." />
                    </div>
                </div>

                {/* Render Props Demo */}
                <div className="col-md-6">
                    <div className="card p-3 mb-3">
                        <h4>Render Props</h4>
                        <p>Sharing code using a prop whose value is a function.</p>
                        <p>Move mouse below:</p>
                        <MouseTracker render={({ x, y }) => (
                            <span>Mouse Position: <b>({x}, {y})</b></span>
                        )} />
                    </div>
                </div>
            </div>

            <div className="alert alert-secondary">
                <strong>Environment Variables:</strong>
                <p>Access via `process.env.NODE_ENV`. Currently: {process.env.NODE_ENV || 'development'}</p>
            </div>
        </div>
    );
};

export default HPatterns;
