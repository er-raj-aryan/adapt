import React, { useState } from "react";
import useStyle from "./style.js";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

// language
import { useTranslation } from "react-i18next";

// redux
import { connect } from "react-redux";
import { adjustItemQty, removeFromCart } from "../../Redux/action/action";
import { Grid } from "@mui/material";

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

function Items({ item, adjustQty, removeFromCart }) {
  const classes = useStyle();
  const [input, setInput] = useState(item.qty);
  const { t } = useTranslation();

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <div className={classes.root}>
      <Card sx={{ maxWidth: 345 }} elevation={3}>
        <CardMedia
          component="img"
          height="140"
          image={item.image}
          alt={item.title}
          className={classes.img}
        />
        <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
      className={classes.rating}
    >
      <Rating name="read-only" value={item.rating.rate} readOnly />
    </Box>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={classes.title}
          >
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={classes.description}
          >
            {t("description")}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardAction}>
          <Typography variant="body2" color="text.secondary" className={classes.price}>
            ${item.price}
          </Typography>
          <Grid className={classes.qtySection}>
          <Typography variant="body2" color="text.secondary">
          Qty
          </Typography>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
            className={classes.input}
          />
          </Grid>
          <IconButton
            aria-label="Cart"
            className={classes.cart}
            onClick={() => removeFromCart(item.id)}
          >
            <Badge badgeContent={0} color="primary">
              <DeleteIcon />
            </Badge>
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(Items);
