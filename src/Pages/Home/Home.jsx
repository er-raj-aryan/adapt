import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Product from "../../Components/Products/Product.jsx";
import useStyle from "./style.js";
import axios from "axios";
// redux
import { useSelector, useDispatch } from "react-redux";
import { setProduct } from "../../Redux/action/action.jsx";

function Home() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const products = useSelector((state) => state);
  const [prod, setProd] = useState([]);
  const fetchData = async () => {
    const response = await axios
      .get("./Data.json")
      .then((res) => setProd(res.data.product))
      .catch((err) => {
        console.log("error ---->>>", err);
      });
    console.log('i came from inside',response);
    //   dispatch(setProduct(response.data.product))
  };

  useEffect(() => {
    fetchData();
  },[ ]);

console.log('i came from state',prod);
  return (
    <div className={classes.root}>
      <img
        src="https://dsn0yv0bfu3gb.cloudfront.net/wp-content/uploads/2017/12/ecommerce-and-shopping-banner.jpg"
        alt=""
        className={classes.img}
      />
      <Grid container spacing={2} className={classes.container}>
        {prod.map((e) => {
         return( 
         <Grid item className={classes.item} xs={12} sm={6} md={4} lg={3}>
            <Product product={e} />
          </Grid>
          )})}
      </Grid>
    </div>
  );
}

export default Home;
