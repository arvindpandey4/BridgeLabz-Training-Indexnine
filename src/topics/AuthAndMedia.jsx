import React, { useState, useEffect } from 'react';

const AuthAndMedia = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    // Session Management Simulation
    useEffect(() => {
        const storedUser = sessionStorage.getItem('app_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = () => {
        const fakeUser = { name: 'BridgeLabz Student', role: 'Dev' };
        sessionStorage.setItem('app_user', JSON.stringify(fakeUser));
        setUser(fakeUser);
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('app_user');
        setUser(null);
        setIsLoggedIn(false);
    };

    return (
        <div className="fade-in-animation">
            <h2>Auth, Session & Media</h2>

            <div className="row">
                {/* Authentication & Session */}
                <div className="col-md-6 mb-3">
                    <div className="card p-3 h-100">
                        <h4>Authentication Simulation</h4>
                        <p className="small text-muted">Persists via <code>sessionStorage</code>.</p>

                        {isLoggedIn ? (
                            <div className="alert alert-success">
                                <p>Welcome back, <strong>{user.name}</strong>!</p>
                                <button className="btn btn-sm btn-danger" onClick={handleLogout}>Logout</button>
                            </div>
                        ) : (
                            <div className="alert alert-secondary">
                                <p>You are Guest.</p>
                                <button className="btn btn-sm btn-success" onClick={handleLogin}>Login</button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Media Content & Animations */}
                <div className="col-md-6 mb-3">
                    <div className="card p-3 h-100">
                        <h4>Media & Animation</h4>

                        <div className="responsive-box">
                            Resize window to see color change (Media Query)
                        </div>

                        <div className="mt-3">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Placeholder"
                                className="img-thumbnail rotate-on-hover"
                            />
                            <p className="small text-center mt-1">Hover to Rotate (CSS Animation)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthAndMedia;
