import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const widgetDiv = document.getElementById('feedbacky-widget')
const root = ReactDOM.createRoot(
  widgetDiv as HTMLElement
);
let companyName = widgetDiv?.getAttribute("data-subreddit")
root.render(
  <React.StrictMode>
    <App companyName={companyName} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
