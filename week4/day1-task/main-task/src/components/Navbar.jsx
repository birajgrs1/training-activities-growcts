import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { login, logout, fetchUserProfile } from "../store/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);

  const handleLogin = () => {
    const fakeToken = "mock_token_abc123";
    dispatch(login(fakeToken));
    dispatch(fetchUserProfile(fakeToken));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            StateMgmt-task
          </Typography>
          {token ? (
            <>
              <Typography variant="body1" sx={{ mr: 2 }}>
                {user?.name || "User"}
              </Typography>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Button color="inherit" onClick={handleLogin}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
