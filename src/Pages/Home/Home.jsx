import React from "react";
import { Grid } from "@mui/material";
import Product from "../../Components/Products/Product.jsx";
import useStyle from "./style.js";
// redux
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
      products: state.shop.products,
    };
};

function Home({products}) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <img
        src="https://dsn0yv0bfu3gb.cloudfront.net/wp-content/uploads/2017/12/ecommerce-and-shopping-banner.jpg"
        alt=""
        className={classes.img}
      />
      <Grid container spacing={2} className={classes.container}>
        {products.map((e) => {
         return( 
         <Grid item className={classes.item} xs={12} sm={6} md={4} lg={3}>
            <Product product={e} />
          </Grid>
          )})}
      </Grid>
    </div>
  );
}

export default connect(mapStateToProps)(Home);
