import React from "react";
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../../hoc/Aux1'
const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalCloser}/>
        <div className={classes.Modal} 
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-101vh)',
                opacity: props.show ? '1' : '0'
            }}
        >
            {props.children}
        </div>
    </Aux>
)
export default modal;