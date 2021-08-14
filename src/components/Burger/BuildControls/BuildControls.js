import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls =[
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheeese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
    
]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price:  <strong>{props.price.toFixed(2)} </strong> so'm </p> 
            {controls.map(ctrl =>
                <BuildControl 
                    key={ctrl.label} 
                    added={() => props.AddIngredients(ctrl.type)}
                    removed={() => props.RemoveIngredients(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                    label={ctrl.type} 
                /> 
            )}
            <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered} >ORDER NOW</button>
        </div>
    )
}

export default buildControls