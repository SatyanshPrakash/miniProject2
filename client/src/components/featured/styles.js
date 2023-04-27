import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({

    featured: {
        height: '90vh',
        position: 'relative'
    },

    category: {
        position: 'absolute',
        top: '13vh',
        left: '4vw',
        fontSize: '30px',
        fontWeight: '500',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    select: {
        marginLeft: '2vw',
        padding: '1vh',
        backgroundColor: 'black',
        color: 'white',
        border: '1px solid white',
        cursor: 'pointer'
    },

    featuredImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },

    info: {
        width: '35%',
        position: 'absolute',
        left: '50px',
        bottom: '8vh',
        color: 'white'
    },

    infoImg: {
        width: '400px'
    },

    desc: {
        marginTop: '20px' ,
        marginBottom: '20px'
    },

    buttons: {
        display: 'flex'
    },

    play: {
        padding: '8px 16px',
        marginRight: '1.6vw',
        marginTop: '2vh',
        border: 'none',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '17px',
        fontWeight: '500',
        backgroundColor: 'white',
        cursor: 'pointer'
    },

    more: {
     padding: '8px 16px',
     marginTop: '2vh',
     border: 'none',
     borderRadius: '5px',
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
     fontSize: '17px',
     fontWeight: '500',
     backgroundColor: 'gray',
     color: 'white',
     cursor: 'pointer'
    },

    buttonSpan: {
        marginLeft: '5px'
    }
}))