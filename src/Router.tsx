import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Box, Container } from "@mui/material";
import { useTonAddress } from "@tonconnect/ui-react";

import HomePage from "./pages/Home/index";
import NotFoundPage from "./pages/NotFound/index";
import WalletConnectPage from "./pages/ConnectWallet/index";

export const ROUTES = {
  HOME: "/",
  CONNECT_WALLET: "/connect-wallet",
} as const;

const RequiresWallet: React.FC<{
  children: JSX.Element;
}> = ({ children }) => {
  const address = useTonAddress();

  if (!address) {
    return <Navigate to={ROUTES.CONNECT_WALLET} />;
  }

  return children;
};

const OnlyWithoutWallet: React.FC<{
  children: JSX.Element;
}> = ({ children }) => {
  const address = useTonAddress();

  if (address) {
    return <Navigate to={ROUTES.HOME} />;
  }

  return children;
};

const Router = () => {
  const location = useLocation();
  const address = useTonAddress();

  const renderRoutes = () => {
    return (
      <Box style={{ position: "relative", flex: 1 }}>
        <Container maxWidth="sm">
          <Routes location={location}>
            <Route
              path={ROUTES.HOME}
              element={
                <RequiresWallet>
                  <HomePage />
                </RequiresWallet>
              }
            />
            <Route
              path={ROUTES.CONNECT_WALLET}
              element={
                <OnlyWithoutWallet>
                  <WalletConnectPage />
                </OnlyWithoutWallet>
              }
            />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Container>
      </Box>
    );
  };

  if (!address) {
    return renderRoutes();
  }

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        {renderRoutes()}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Router;
