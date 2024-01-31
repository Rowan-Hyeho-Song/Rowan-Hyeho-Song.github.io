import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// React.StrictMode > 렌더링 두번 발생 거슬리면 제거
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
reportWebVitals();
