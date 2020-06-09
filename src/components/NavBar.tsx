import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  IconButton,
  Hidden,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { Menu as MenuIcon } from "@material-ui/icons";
import { routes } from "../constants/routes";
//
//
const StyledBarContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  color: white;
  .links {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .title {
    font-family: "Chelsea Market", cursive;
    font-size: 40px;
    color: white;
    text-decoration: none;
  }
`;

const NavBar = () => {
  const { push } = useHistory();
  const location = useLocation();
  const handleNav = (path: string) => {
    push(path);
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <StyledBarContents>
          <Link to="/" className="title">
            Donut Shop
          </Link>
          <Hidden smDown>
            <>
              <Tabs
                value={location.pathname}
                onChange={(e, val) => handleNav(val)}
                className="links"
              >
                {routes.map(({ display, path }) => {
                  return <Tab value={path} label={display} key={path}></Tab>;
                })}
              </Tabs>
            </>
          </Hidden>
          <Hidden mdUp>
            <Typography variant="h5">
              {
                routes.find((route) => route.path === location.pathname)
                  ?.display
              }
            </Typography>

            <IconButton onClick={handleMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              {routes.map(({ display, path }) => {
                return (
                  <MenuItem
                    key={path}
                    selected={path === location.pathname}
                    onClick={() => {
                      handleNav(path);
                      handleClose();
                    }}
                  >
                    {display}
                  </MenuItem>
                );
              })}
            </Menu>
          </Hidden>
        </StyledBarContents>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
