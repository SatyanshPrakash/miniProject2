import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({

    listItem: {
        width: '230px',
        height: '22vh',
        backgroundColor: 'black',
        color: 'white',
        marginRight: '5px',
        cursor: 'pointer',
        overflow: 'hidden',
        '&:hover':{
            height: '50vh',
            width: '22vw',
            position: 'absolute',
            top: '-160px',
            webkitBoxShadow: '0px 0px 15px 0px rgba(255, 255, 255, 0.07)',
            boxShadow: '0px 0px 15px 0px rgba(255, 255, 255, 0.07)',
            borderRadius: '5px',
            '& $previewImage' :{
                height: '130px'
            }


        }
    },

    previewImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },

    trailer: {
        width: '100%',
        height: '130px',
        objectFit: 'cover',
        position: 'absolute',
        top: '0',
        left: '0'
    },

    itemInfo: {
        fontSize: '12px',
        margin: '2vh'
    },

    icon: {
        border: '2px solid white',
        padding: '5px',
        borderRadius: '50%',
        marginRight: '1vw',
        marginBottom: '.6vh',
        fontSize: '8px'
    },

    infoItemTop: {
        color: 'grey',
        fontSize: '13px',
        fontWeight: '500',
    },
     
    desc: {
        marginTop: '1vh'
    },

    genre: {
        marginTop: '1.5vh',
        fontSize: '13px',
        fontWeight: '500'
    }
}))