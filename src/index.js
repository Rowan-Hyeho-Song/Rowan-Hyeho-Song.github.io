import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));

// React.StrictMode > 렌더링 두번 발생 거슬리면 제거
root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
);
reportWebVitals();
