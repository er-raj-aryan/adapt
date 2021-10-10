import {  Card } from "@mui/material";
import React from "react";
import useStyle from "./style";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import DialogBox from './Dialogs/Dialogs'

function CART_SUMMARY(props) {
  const classes = useStyle();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Card  elevation={3} className={classes.card}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={classes.title}
          >
            {t("Cart_Summary")}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className={classes.description}
          >
            {t("TOTAL")}: ({props.total_Items} {t("items")})
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
