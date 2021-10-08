import {  Card } from "@mui/material";
import React from "react";
import useStyle from "./style";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import Badge from "@mui/material/Badge";
import DialogBox from './Dialogs/Dialogs'

function CART_SUMMARY(props) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Card sx={{ minWidth: 345 }} elevation={3} className={classes.card}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={classes.title}
          >
            Cart Summary
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={classes.description}
          >
            TOTAL: ({props.total_Items} items)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${props.total_Price}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardAction}>      
          <DialogBox />
        </CardActions>
      </Card>
    </div>
  );
}

export default CART_SUMMARY;
