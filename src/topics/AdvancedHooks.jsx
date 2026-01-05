import React, { useState, useEffect, useContext, createContext, useMemo } from 'react';
import { createPortal } from 'react-dom';

// 1. Context Creation (Global State)
const ThemeContext = createContext('light');

// 2. Portal Component (Renders outside main DOM hierarchy)
const Modal = ({ children, onClose }) => {
    return createPortal(
        <div style={{
            position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            background: 'white', padding: '20px', border: '1px solid black', zIndex: 1000,
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
            {children}
            <button className="btn btn-sm btn-danger mt-2" onClick={onClose}>Close Portal</button>
        </div>,
        document.body
    );
};

const AdvancedHooks = () => {
    const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);
    const [showModal, setShowModal] = useState(false);
    const [count, setCount] = useState(0);

    // 3. useEffect (Lifecycle: ComponentDidMount/Update)
    useEffect(() => {
        console.log('Component Rendered/Updated');
        document.title = `Count: ${count}`;

        return () => console.log('Cleanup on Unmount/Update');
    }, [count]);

    // 4. useMemo (Profiler/Optimization) - only recalculates when dependencies change
    const expensiveCalculation = useMemo(() => {
        console.log('Calculating expensive value...');
        return count * 1000;
    }, [count]);

    return (
        <ThemeContext.Provider value="dark">
            <div>
                <h2>Advanced Hooks, Lists & Portals</h2>

                {/* Lists & Keys */}
                <div className="card p-3 mb-3">
                    <h4>Lists & Keys</h4>
                    <ul className="list-group">
                        {items.map((item, index) => (
                            <li key={index} className="list-group-item">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Hooks: useMemo & Context */}
                <div className="card p-3 mb-3">
                    <h4>Hooks: useMemo & Context</h4>
                    <p>Count: {count}</p>
                    <p>Computed w/ useMemo: {expensiveCalculation}</p>
                    <button className="btn btn-primary" onClick={() => setCount(c => c + 1)}>Increment</button>

                    <ConsumerChild />
                </div>

                {/* Portal */}
                <div className="card p-3">
                    <h4>Portals</h4>
                    <button className="btn btn-outline-dark" onClick={() => setShowModal(true)}>
                        Open Portal Modal
                    </button>
                </div>

                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <h5>I am outside the root div!</h5>
                        <p>This is rendered via React Portal.</p>
                    </Modal>
                )}
            </div>
        </ThemeContext.Provider>
    );
};

// Child consuming context
const ConsumerChild = () => {
    const theme = useContext(ThemeContext);
    return <div className="mt-2 badge bg-secondary">Current Theme Context: {theme}</div>;
};

export default AdvancedHooks;
