import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/userService';

const ServicesDemo = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await getUsers();
            setUsers(response.data);
        } catch (err) {
            setError('Failed to fetch data.');
        } finally {
            setLoading(false);
        }
    };

    // Fetch on mount
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Services, Axios & Interceptors</h2>

            <div className="card p-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4>User List (from API)</h4>
                    <button className="btn btn-sm btn-primary" onClick={fetchUsers}>Refresh</button>
                </div>

                {loading && <div className="spinner-border text-primary" role="status"></div>}

                {error && <div className="alert alert-danger">{error}</div>}

                {!loading && !error && (
                    <ul className="list-group">
                        {users.slice(0, 5).map(user => (
                            <li key={user.id} className="list-group-item d-flex justify-content-between">
                                <span>{user.name}</span>
                                <span className="text-muted small">{user.email}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="mt-3 p-3 bg-light border rounded">
                <h5>Concept: Interceptors</h5>
                <p className="small">
                    Check the browser console. You will see logs from the Axios Interceptors setup in
                    <code>src/services/userService.js</code> whenever a request is made.
                </p>
            </div>
        </div>
    );
};

export default ServicesDemo;
