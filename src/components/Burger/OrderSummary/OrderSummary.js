import React from 'react';
import Aux from '../../../hoc/Aux1';
import Button from '../../Burger/UI/Button/Button';
import classes from './OrderSummary.module.css'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span>{igKey}</span>: {props.ingredients[igKey]}
                </li>)
        })
    return (
        <Aux>
            <div className={classes.OrderSummary}>
                <h3>Your Order</h3>
                <p>A delicious buger with the follow</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <h3 className={classes.Strong}>Total Price: <strong> {props.price.toFixed(2)} </strong></h3>
                <p>Continue to chackOut?</p>
                <Button btnType='Danger' clicked={props.purchasableCancel}>Cancel</Button>
            </div>
        </Aux>
    )
}
export default orderSummary;