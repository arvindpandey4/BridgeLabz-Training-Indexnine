import React, { useState, useRef } from 'react';

const FormsAndEvents = () => {
    // 1. Controlled Form ("Reactive-style" - State holds values)
    const [formData, setFormData] = useState({ username: '', email: '' });

    // 2. Uncontrolled Form ("Template-style" - DOM holds values)
    const nameRef = useRef();

    // Event Handling
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleControlledSubmit = (e) => {
        e.preventDefault();
        alert(`Controlled Submit: ${JSON.stringify(formData)}`);
    };

    const handleUncontrolledSubmit = (e) => {
        e.preventDefault();
        alert(`Uncontrolled Submit: ${nameRef.current.value}`);
    };

    return (
        <div>
            <h2>Forms & Events</h2>

            <div className="row">
                {/* Controlled Form */}
                <div className="col-md-6">
                    <div className="card p-3">
                        <h4>Controlled (Reactive)</h4>
                        <p className="small text-muted">React State is the "Single Source of Truth".</p>
                        <form onSubmit={handleControlledSubmit}>
                            <div className="mb-2">
                                <label>Username:</label>
                                <input
                                    className="form-control"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-2">
                                <label>Email:</label>
                                <input
                                    className="form-control"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <button className="btn btn-success" type="submit">Submit Reactive</button>
                        </form>
                        <div className="mt-2 code-block">
                            State: {JSON.stringify(formData)}
                        </div>
                    </div>
                </div>

                {/* Uncontrolled Form */}
                <div className="col-md-6">
                    <div className="card p-3">
                        <h4>Uncontrolled (Template)</h4>
                        <p className="small text-muted">DOM stores the value. Accessed via Refs.</p>
                        <form onSubmit={handleUncontrolledSubmit}>
                            <div className="mb-2">
                                <label>Nickname (Ref):</label>
                                <input
                                    className="form-control"
                                    ref={nameRef}
                                    type="text"
                                />
                            </div>
                            <button className="btn btn-warning" type="submit">Submit Template</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormsAndEvents;
