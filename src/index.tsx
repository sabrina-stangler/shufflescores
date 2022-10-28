import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from 'styled-components'
import nunito from "./assets/fonts/Nunito-VariableFont_wght.ttf"

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Nunito;
    font-style: normal;
    font-weight: 400;
    src: url(${nunito});
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
