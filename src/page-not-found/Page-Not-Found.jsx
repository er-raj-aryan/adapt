import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import useStyle from "./style";


function PAGE_NOT_FOUND() {
  const classes = useStyle();
  

  return (
    <div className={classes.root}>   
      <Typography variant="h5" color="initial">
        404 Page not Found
      </Typography>
      <Link variant="contained" color="default" to='/' className={classes.link}>
        Back to Home
      </Link>
    </div>
  );
}

export default PAGE_NOT_FOUND;
