import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App.tsx';

import './index.css';
import '@fontsource/outfit';
import '@fontsource/roboto';

function printCoolMessageToConsole(): void {
    const msg = '%c Hello 🕵️! Welcome to my site';
    const styles = [
        'font-size: 12px',
        'font-family: monospace',
        'background: white',
        'display: inline-block',
        'color: black',
        'padding: 8px 19px',
        'border: 1px dashed;'
    ].join(';');
    console.log(msg, styles);
}

printCoolMessageToConsole();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
