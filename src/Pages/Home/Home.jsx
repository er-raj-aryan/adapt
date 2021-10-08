import React from 'react'
import useStyle from './style.js'

function Home() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <h1>i am home page </h1>
        </div>
    )
}

export default Home
