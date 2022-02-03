import './locales/i18n';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import customTheme from './theme/theme';
import Seo from './components/Seo';
import './index.css'

// eslint-disable-next-line
const newTheme = {
  ...customTheme,
};

ReactDOM.render(
  <ChakraProvider theme={newTheme}>
    <CSSReset />
      <Seo />
      <App />
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
