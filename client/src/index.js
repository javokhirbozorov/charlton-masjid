import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Posts from './pages/Posts/Posts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Posts />
);

reportWebVitals();
