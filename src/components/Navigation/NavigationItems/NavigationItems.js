import classes from '../../../App.module.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <li className={classes.NavigationItem}>
            <a href="/" className={classes.active}>Buger Builder</a>
            <a href="/">Checkout</a>
        </li>
    </ul>
)

export default navigationItems;