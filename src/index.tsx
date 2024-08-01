import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@mui/material";
import AuthProvider from "./context/auth";
import reportWebVitals from "./reportWebVitals";

import theme from "./theme";

const manifestUrl = `${process.env.REACT_APP_HOST_URL}/tonconnect-manifest.json`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <TonConnectUIProvider manifestUrl={manifestUrl}>
          <App />
          <Toaster />
        </TonConnectUIProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
