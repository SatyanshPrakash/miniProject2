import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    register: {
        backgroundImage: `url(${'https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg'})`,
        width: '100%',
        height:' 100%',
    },

    top: {
        padding: '4vh',
        display: 'flex'
    },

    logo: {
        width: '10vw'
    },

    signIn: {
        marginLeft: 'auto',
        backgroundColor: 'red',
        color: 'white',
        padding: '1vh',
        border: '2px solid red',
        borderRadius: '12%',
        fontSize: '15px',
        paddingLeft: '1vw',
        paddingRight: '1vw'
    },

    mid: {
        marginTop: '22vh',
        color: 'white',
        marginLeft: '18vw'
    },

    input: {
        marginTop: '3vh',
        display: 'flex',
        paddingBottom: '29vh',
        marginLeft: '8vw'
    },

    textarea: {
        width: '35vw',
        height: '2.6vh',
        resize: 'none',
        padding: '2vh'
    },

    getStarted: {
        backgroundColor: 'red',
        color: 'white',
        fontWeight: '500',
        padding: '1.3vh',
    }


}))