import React from 'react';
import burgerLogo from '../../assets/imgs/burger.png';
import classes from './Logo.module.css';


const logo = (props) => (
    <div className={classes.Logo} style={{width: props.width}}>
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
)

export default logo;