import classes from '../../../App.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggler}/>
        <div className={classes.ToolbarLogo}>
        <Logo />
        </div>
        <nav className={classes.DesktopOnly}><NavigationItems /></nav>
    </header>

);

export default toolbar;