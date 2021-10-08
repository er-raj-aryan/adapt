import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import {Link} from 'react-router-dom';
import useStyle from './style.js'

function Navbar() {
    const classes = useStyle()

    return (
        <div className={classes.root}>
         <AppBar position="fixed" color="primary">
           <Toolbar>
             <Typography component={Link} to="/" variant="h6">
               Adapat Ready
             </Typography>
           </Toolbar>
         </AppBar> 
        </div>
    )
}

export default Navbar
