import "./locales/i18n";
import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import customTheme from "./theme/theme";
import Seo from "./components/Seo";

// ------------------------------------------------------------

const container = document.getElementById('root');
const root = createRoot(container!)

root.render(
  <ChakraProvider theme={customTheme}>
    <HelmetProvider>
      <CSSReset />
      <Seo />
      <App />
    </HelmetProvider>
  </ChakraProvider>
);
