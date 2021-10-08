import React from 'react'
import useStyle from './style.js'

function Items() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <h1>i am best</h1>
        </div>
    )
}

export default Items
