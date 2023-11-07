import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nive from './pages/nive';
import Network from './pages/network';

function App() {
    return (
        <Routes>
            <Route exact path="/" element={ <Nive /> }/>    
            <Route exact path="/network" element={ <Network /> }/>
        </Routes>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
);