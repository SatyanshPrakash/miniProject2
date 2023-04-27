import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    list: {
        width: '100%',
        marginTop: '4vh',
    },

    listTitle: {
        marginLeft:  '2vw',
        fontSize: '22px',
        fontWeight: '450'
    },

    wrapper: {
        marginTop: '3vh',
        marginLeft: '1vw',
        display: 'flex',
        position: 'relative'
    },

    container: {
        marginLeft: '0vw',
        display: 'flex',
        width: 'maxContent',
        transform: 'translateX(0px)',
        transition: 'all 1s ease'
    },

    sliderArrowLeft: {
        position: 'absolute',
        left: '0',
        zIndex: '99',
        top: '0',
        bottom: '0',
        margin: 'auto',
        cursor: 'pointer'
    },

    sliderArrowRight: {
        position: 'absolute',
        right: '0',
        zIndex: '99',
        top: '0',
        bottom: '0',
        margin: 'auto',
        cursor: 'pointer'
    }

}));