import { makeStyles } from "@material-ui/core";

export default makeStyles((themes) => ({
    watch: {
        width: '100vw',
        height: '100vh',
        overflowX: 'hidden'
    },

    back: {
        display: 'flex',
        position: 'absolute',
        top: '10px',
        zIndex: '99',
        color: 'white',
        alignItems: 'center',
        left: '10px'
    },

    video: {
        width: '100%',
        height: '70%'
    },

    movieName: {
        fontSize: '20px',
        fontWeight: '500',
        margin: '1vw'
    },

    movieInfo: {
        marginLeft: '1vw',
    },

    genre: {
        marginRight: '.8vw'
    },

    category: {
        marginRight: '.8vw',
        padding: '.3px',
        border: '1px solid grey'
    },

    rating: {
        backgroundColor: '#f5c518',
        border: '1px solid #f5c518',
        borderRadius: '10%',
        padding: '3px',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px'
    },

    desc: {
        marginLeft: '1vw',
        marginTop: '2vh'
    },

    relatedMovies: {
        fontSize: '19px',
        fontWeight: '500',
        marginLeft: '1vw',
        marginTop: '4vh',
    },


    wrapper: {
        marginTop: '3vh',
        marginLeft: '1vw',
        display: 'flex',
        position: 'relative',
        marginBottom: '4vh'
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



}))