import {
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Menu,
  MenuItem,
  Typography,
  Button,
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
  a {
    text-decoration: none;
  }
  .links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    button {
      margin-left: 1rem;
    }
  }
  .title {
    font-family: "Chelsea Market", cursive;
    font-size: 25px;
    color: white;
    text-decoration: none;
    @media screen and (min-width: 960px) {
      font-size: 40px;
    }
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
    <AppBar position="sticky">
      <Toolbar>
        <StyledBarContents>
          <Link to="/">
            <Typography className="title" noWrap>
              Donut Shop
            </Typography>
          </Link>
          <div className="links">
            <Hidden smDown>
              {routes.map(({ display, path }) => {
                return (
                  <Button
                    color="inherit"
                    onClick={() => handleNav(path)}
                    key={path}
                    variant={path === location.pathname ? "outlined" : "text"}
                  >
                    {display}
                  </Button>
                );
              })}
            </Hidden>
            <Hidden mdUp>
              <Typography variant="body1">
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
          </div>
        </StyledBarContents>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
