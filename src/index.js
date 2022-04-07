import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Context from "./context/Context";
import { ChakraProvider } from '@chakra-ui/react'
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ChakraProvider>
      <Context>
        <App />
      </Context>
      </ChakraProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
