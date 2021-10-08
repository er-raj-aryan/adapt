import React from "react";
import useStyle from "./style.js";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../Redux/action/action";
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

function Product({ product, addToCart, loadCurrentItem }) {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Card sx={{ maxWidth: 345 }} elevation={3}>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.title}
          className={classes.img}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={classes.title}
          >
            {product.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={classes.description}
          >
            {product.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardAction}>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
          <IconButton
            aria-label="Cart"
            className={classes.cart}
            onClick={() => addToCart(product.id)}
          >
            <Badge badgeContent={0} color="primary">
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(Product);
