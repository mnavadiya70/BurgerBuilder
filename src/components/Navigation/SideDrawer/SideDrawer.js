import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from '../../../App.module.css';

const sideDrawer = (props) => {
    let attchedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attchedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop
                show={props.open}
                clicked={props.closed} />
            <div className={attchedClasses.join(' ')}>
                <div className={classes.SideDrawerLogo}>
                    <Logo />
                </div>
                <nav><NavigationItems /></nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;