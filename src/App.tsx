import React, { useContext, useEffect, useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import { AuthContext } from "./context/auth";
import SplashScreen from "./components/Splash";
import Router from "./Router";
import apiClient from "./apiClient";

import "./App.css";

function App() {
  const timer = useRef<number | null>(null);
  const { loaded, login } = useContext(AuthContext);
  const [appLoaded, setAppLoaded] = useState(false);
  const [userFetched, setUserFetched] = useState(false);

  useEffect(() => {
    if (loaded) {
      timer.current = window.setTimeout(() => {
        setAppLoaded(true);
      }, 500);
    }

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [loaded]);

  useEffect(() => {
    async function fetchUser() {
      if (!userFetched) {
        const res = await apiClient("/auth/me");
        console.log("res", res);
        login(res.data);
        setUserFetched(true);
      }
    }

    fetchUser();
  }, [login, userFetched]);

  if (!appLoaded) {
    return <SplashScreen />;
  }

  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
