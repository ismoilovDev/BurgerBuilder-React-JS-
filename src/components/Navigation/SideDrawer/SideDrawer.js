import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../NavigationItems/NavigationItems';
import Backdrop from '../../Burger/UI/Backdrop/Backdrop'
import classes from './SideDrawer.module.css';
import Aux from '../../../hoc/Aux1'

const sideDrawer = (props) => {
    let addClasses = [classes.SideDrawer, classes.Close];
    if(props.open) {
        addClasses = [classes.SideDrawer, classes.Open];
    }        

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={addClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}

export default sideDrawer;