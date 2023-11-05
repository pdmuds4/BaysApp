import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nive from './pages/nive';

function App() {
    return (
        <Routes>
            <Route exact path="/" element={ <Nive /> }/>    
        </Routes>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
);