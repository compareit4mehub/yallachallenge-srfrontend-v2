import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './User-List/UserList';
import UserDetails from './User-Details/UserDetails';
import '@fortawesome/fontawesome-free/css/all.css';
import i18n from './i18n';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<UserList />} />
                    <Route path="/user/:username" element={<UserDetails />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
