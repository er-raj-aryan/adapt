import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import useStyle from './style'

function Loading() {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="column" className={classes.stack}>
            <CircularProgress color="success" />
            <Typography variant="subtitle1" color="initial">Assigment Loading...</Typography>
            </Stack>
        </div>
    )
}

export default Loading
