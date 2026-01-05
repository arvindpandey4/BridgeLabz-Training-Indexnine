import React, { useState } from 'react';
import BasicConcepts from './topics/BasicConcepts';
import FormsAndEvents from './topics/FormsAndEvents';
import AdvancedHooks from './topics/AdvancedHooks';
import HPatterns from './topics/HPatterns';
import ServicesDemo from './topics/ServicesDemo';
import AuthAndMedia from './topics/AuthAndMedia';

const App = () => {
    const [activeTab, setActiveTab] = useState('basics');

    const renderContent = () => {
        switch (activeTab) {
            case 'basics': return <BasicConcepts />;
            case 'forms': return <FormsAndEvents />;
            case 'hooks': return <AdvancedHooks />;
            case 'patterns': return <HPatterns />;
            case 'services': return <ServicesDemo />;
            case 'auth': return <AuthAndMedia />;
            default: return <BasicConcepts />;
        }
    };

    return (
        <div className="container mt-4">
            <header className="mb-4">
                <h1>React Practice & Templates</h1>
                <p className="text-muted">BridgeLabz Training Topics</p>
            </header>

            <ul className="nav nav-tabs mb-4">
                <li className="nav-item">
                    <button className={`nav-link ${activeTab === 'basics' ? 'active' : ''}`} onClick={() => setActiveTab('basics')}>
                        Basics & State
                    </button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link ${activeTab === 'forms' ? 'active' : ''}`} onClick={() => setActiveTab('forms')}>
                        Forms & Events
                    </button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link ${activeTab === 'auth' ? 'active' : ''}`} onClick={() => setActiveTab('auth')}>
                        Auth & Media (Responsive)
                    </button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link ${activeTab === 'hooks' ? 'active' : ''}`} onClick={() => setActiveTab('hooks')}>
                        Hooks & Render
                    </button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link ${activeTab === 'patterns' ? 'active' : ''}`} onClick={() => setActiveTab('patterns')}>
                        Patterns (HOC/Portals)
                    </button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link ${activeTab === 'services' ? 'active' : ''}`} onClick={() => setActiveTab('services')}>
                        Services & Axios
                    </button>
                </li>
            </ul>

            <div className="practice-container">
                {renderContent()}
            </div>
        </div>
    );
};

export default App;
