import React, { useState } from 'react';
import './loginscreen.css';
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const LoginScreen = () => {
    
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            history('/');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log({errorCode, errorMessage})
          });
    }

    const register = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          history('/');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log({errorCode, errorMessage})
        });
    }
    
  return (
        <div className='login'> 
            <Link to='/login' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <i className="fa-solid fa-store login__logoImage"></i>
                    <h2 className="login__logoTitle">eSHOP</h2>
                </div>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' onClick={register}>Create your eShop Account</button>
            </div>
        </div>
  )
}

export default LoginScreen
