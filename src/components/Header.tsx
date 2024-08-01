import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar as MuiAppBar,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Toolbar, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { styled } from "@mui/material/styles";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

import { AuthContext } from "../context/auth";
import MuiLink from "./MuiLink";
import { ROUTES } from "../Router";
import theme from "../theme";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const Header = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const isRouteActive = (route: string) => {
    return route === (window.location.pathname as any);
  };

  const handlePageChange = (route: string) => {
    if (!isRouteActive(route)) {
      navigate(route);
    } else {
      handleDrawerClose();
    }
  };

  if (!user) {
    return null;
  }

  return (
    <MuiAppBar
      position="absolute"
      elevation={0}
      sx={{
        position: "relative",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontWeight: "600",
            cursor: "pointer",
          }}
          onClick={() => {
            if (window.location.pathname !== ROUTES.HOME) {
              navigate(ROUTES.HOME);
            }
          }}
        >
          <NotificationsActiveIcon
            style={{
              fontSize: 30,
              color: "white",
            }}
          />
          <Typography
            variant="h6"
            color="secondary"
            sx={{
              marginLeft: 1,
            }}
          >
            My TON Alerts
          </Typography>
        </Box>
        <Box
          style={{ width: 200, justifyContent: "flex-end", display: "flex" }}
        >
          {Boolean(user) && (
            <Button onClick={handleDrawerOpen}>
              <MenuOpenIcon
                style={{
                  fontSize: 30,
                  color: "white",
                }}
              />
            </Button>
          )}
        </Box>
      </Toolbar>
      <Box>
        <Drawer
          anchor="left"
          open={open}
          onClose={handleDrawerClose}
          className="app-main-drawer"
        >
          <Box>
            <DrawerHeader
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <MuiLink
                style={{ display: "flex" }}
                to={ROUTES.HOME}
                onClick={handleDrawerClose}
              >
                <Typography variant="h6" color="secondary">
                  My TON Alerts
                </Typography>
              </MuiLink>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon color="secondary" style={{ fontSize: 30 }} />
              </IconButton>
            </DrawerHeader>
            <Divider />
          </Box>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={handleDrawerClose}
            onKeyDown={handleDrawerClose}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  selected={isRouteActive(ROUTES.HOME)}
                  onClick={() => {
                    handlePageChange(ROUTES.HOME);
                  }}
                >
                  <ListItemIcon>
                    <NotificationsActiveIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
    </MuiAppBar>
  );
};

export default Header;
