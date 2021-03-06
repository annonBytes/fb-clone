import React from 'react'
import './Login.css'
import logo from '../assets/facebook.svg'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'

function Login() {

    const signIn = () => {
       auth.signInWithPopup(provider)
       .then(result => {
           console.infolog("it works")
       })
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src={logo} alt=""/>
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt=""/>
            </div>
 
            <Button type="submit" onClick={signIn}>
                Sign in
            </Button>
        </div>
    )
}

export default Login
