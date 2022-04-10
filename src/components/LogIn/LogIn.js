import './LogIn.css'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }
    if (user) {
        navigate('/shop')
    }
    const handleUserSignIn = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='from-title'>LogIn</h2>
                <form action="" onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handleEmailBlur} type='email' name="email" required></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">password</label>
                        <input onBlur={handlePasswordBlur} type='password' name='password' required></input>
                    </div>
                    <p>
                        {error?.message}
                    </p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type='submit' value="LogIn" />
                </form>
                <p>New to Ema-Jhon? <Link className='form-link' to="/signup">Ctrate an Account</Link></p>
            </div>
        </div>
    );
};

export default LogIn;