import BurgerLogo from '../../assets/images/burger-logo.png';
import classes from '../../App.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={BurgerLogo} alt="MyBurger" />
    </div>
);

export default logo;