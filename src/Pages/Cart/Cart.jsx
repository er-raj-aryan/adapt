import React from 'react'
import useStyle from './style.js'

function Cart() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <img src="https://www.devitpl.com/wp-content/uploads/ecommerce-banner.jpg" alt=""  className={classes.img} />
        </div>
    )
}

export default Cart
