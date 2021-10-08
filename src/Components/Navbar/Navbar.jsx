import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import useStyle from "./style.js";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import Badge from '@mui/material/Badge';

function Navbar() {
  const classes = useStyle();
  const handleOnClick = () => {};

  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="absolute" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography component={Link} to="/" variant="h6" className={classes.logo} >
            Adapat Ready
          </Typography>
          <IconButton component={Link} to="/cart" aria-label="Cart" className={classes.cart} onClick={handleOnClick}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
