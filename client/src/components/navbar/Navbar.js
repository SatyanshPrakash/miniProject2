import { AppBar } from '@material-ui/core';
import useStyles from './styles';
import { useState } from 'react';
import { Search, Notifications, AccountCircle, ArrowDropDown } from '@material-ui/icons';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const classes = useStyles();

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset===0 ? false : true);
        return() => (window.onscroll = null);
      };    


  return (
    <>
    <AppBar className={classes.Navbar} style={isScrolled ? {backgroundColor: 'black'} : {}}>
        <img className={classes.netflixLogo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"></img>
        <span className={classes.navigations}>Homepage</span>
        <span className={classes.navigations}>Series</span>
        <span className={classes.navigations}>Movies</span>
        <span className={classes.navigations}>My List</span>
        <span className={classes.navigations} style={{marginLeft: 'auto'}}>
        <Search />
        </span>
        <span className={classes.navigations}>
        <Notifications />
        </span>
        <span className={classes.navigations}>
        <AccountCircle />
        </span>
        <ArrowDropDown style={{padding: '.5%'}}/>
    </AppBar>
    </>
  )
}

export default Navbar