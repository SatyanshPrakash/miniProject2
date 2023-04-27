import React, { useState } from 'react';
import useStyles from './styles';

const Register = () => {

    const classes = useStyles();
    const [email, setEmail] = useState("");



  return (
    <div className={classes.register}>
        <div className={classes.top}>
            <img className={classes.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"/>
            <div className={classes.signIn}>Sign In</div>
        </div>

        <div className={classes.mid}>
            <div style={{fontSize: '44px', fontWeight: '500' }}>Unlimited movies, TV shows, and more.</div>
            <div style={{fontWeight: '500', fontSize: '20px', marginLeft: '17vw', marginTop: '3vh'}}>Watch anywhere. cancel anytime.</div>
            <div style={{fontSize: '18px', marginLeft: '8vw', marginTop: '3vh'}}>Ready to watch? Enter your email to create or restart your membership.</div>
            <div className={classes.input}>
                <textarea className={classes.textarea} placeholder='email address'/>
                <div className={classes.getStarted}>Get Started</div>
            </div>
        </div>
    </div>
  )
}

export default Register