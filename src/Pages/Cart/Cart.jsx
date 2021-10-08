import React from 'react'
import useStyle from './style.js'

function Cart() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <h1>i am cart</h1>
        </div>
    )
}

export default Cart
