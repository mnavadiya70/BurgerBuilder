import classes from '../../../App.module.css';

const button = (props) => {
    return (
        <button
            className={[classes.Button, classes[props.btnType]].join(' ')}
            onClick={props.click}>
            {props.children}
        </button>
    )
}
export default button;