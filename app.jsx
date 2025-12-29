import React, { useEffect, useState } from "react";

/*
  Simple service function
  -----------------------
  In real apps, this lives in a separate service file.
*/
function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Arvind" });
        }, 1000);
    });
}

/*
  Child Component
  ---------------
  Demonstrates props usage and unidirectional data flow.
*/
function UserProfile({ user }) {
    if (!user) {
        return <p>Loading user...</p>;
    }

    return (
        <div>
            <h3>User Profile</h3>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
        </div>
    );
}

/*
  Root Component
  --------------
  Demonstrates state, lifecycle, events, and forms.
*/
export default function App() {
    const [user, setUser] = useState(null);
    const [inputName, setInputName] = useState("");
    const [submittedName, setSubmittedName] = useState("");

    /*
      Lifecycle: componentDidMount equivalent
      ---------------------------------------
      Runs once when the component mounts.
    */
    useEffect(() => {
        fetchUser().then((data) => {
            setUser(data);
        });
    }, []);

    /*
      Event handler
      -------------
      Controlled form submission.
    */
    function handleSubmit(event) {
        event.preventDefault();
        setSubmittedName(inputName);
        setInputName("");
    }

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>React Fundamentals Demo</h2>

            {/* Props demonstration */}
            <UserProfile user={user} />

            <hr />

            {/* Controlled Form */}
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Name:
                    <input
                        type="text"
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                        style={{ marginLeft: "8px" }}
                    />
                </label>

                <button type="submit" style={{ marginLeft: "8px" }}>
                    Submit
                </button>
            </form>

            {/* Conditional Rendering */}
            {submittedName && (
                <p>
                    Submitted Name: <strong>{submittedName}</strong>
                </p>
            )}
        </div>
    );
}
