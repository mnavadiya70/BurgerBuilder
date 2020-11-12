import classes from '../../../App.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
        <p>Current Price : <b>{props.price.toFixed(2)}</b></p>
            {
                controls.map(ctrl => {
                    return <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        remove={() => props.ingredientRemoved(ctrl.type)}
                        add={() => props.ingredientAdded(ctrl.type)}
                        disabled={props.disabledInfo[ctrl.type]} />
                })
            }
            <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>
        </div>
    )
}

export default buildControls;