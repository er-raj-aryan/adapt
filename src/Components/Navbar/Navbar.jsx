import React ,{useEffect , useState} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import useStyle from "./style.js";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import Badge from '@mui/material/Badge';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

function Navbar({ cart }) {
  const classes = useStyle();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="absolute" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography component={Link} to="/" variant="h6" className={classes.logo} >
            Adapat Ready
          </Typography>
          <IconButton component={Link} to="/cart" aria-label="Cart" className={classes.cart} >
            <Badge badgeContent={cartCount} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default connect(mapStateToProps)(Navbar);
