import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Colors from './assets/color'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
body {
  background-color: ${Colors.Background}
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
