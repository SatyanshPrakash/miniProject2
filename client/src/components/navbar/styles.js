import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
    Navbar: {
        backgroundColor: 'transparent',
        padding: '1%',
        maxWidth: '100%',
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
        background: 'linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%)'
    },

    netflixLogo: {
        paddingLeft: '4%',
        maxWidth: '20%'
    },

    navigations: {
        padding: '.5%',
        paddingLeft: '1.5%'
    },

    rightNavigation: {
        // marginLeft: 'auto',
        // padding: '.5%',
        
    }
}))