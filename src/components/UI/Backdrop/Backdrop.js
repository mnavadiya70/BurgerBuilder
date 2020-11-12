import classes from '../../../App.module.css'

const backdrop = (props) => {
return props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
}

export default backdrop;