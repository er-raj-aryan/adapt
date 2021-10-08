import React, { useEffect, useState } from "react";
import useStyle from "./style.js";
import Items from "../../Components/Cart-Item/Items";
import { connect } from "react-redux";
import { Grid } from "@mui/material";
import CART_SUMMARY from "../../Components/Cart-Summary/Cart-Summary.jsx";

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

function Cart({ cart }) {
  const classes = useStyle();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className={classes.root}>
      <img
        src="https://www.devitpl.com/wp-content/uploads/ecommerce-banner.jpg"
        alt=""
        className={classes.img}
      />

    <Grid container className={classes.container}>
      {/* -- payment details page -- */}
    <Grid item className={classes.item}> 
        <CART_SUMMARY total_Items={totalItems} total_Price={totalPrice}  />
    </Grid>

      {/* -- Checkout Product -- */}
    <Grid item className={classes.item}>
      <Grid container spacing={2} className={classes.cart__container}>
        {cart.map((item) => (
          <Grid className={classes.cart__items} item xs={12} key={item.id} sm={6} md={4} lg={3}>
            <Items item={item} />
          </Grid>
        ))}
      </Grid>
    </Grid>
    </Grid>
    </div>
  );
}

export default connect(mapStateToProps)(Cart);
