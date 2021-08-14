import React from 'react'
import classes from './Backdrop.module.css';


const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked} style={{
        transform: props.show ? 'translateX(0)' : 'translateX(-101vh)',
        opacity: props.show ? '1' : '0'
    }}></div> : null
)
export default backdrop