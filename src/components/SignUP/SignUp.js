import './SignUp.css'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmpassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }
    const handleConfirmPasswordBlur = e => {
        setConfirmpassword(e.target.value)
    }
    if (user) {
        navigate('/shop')
    }
    const handleCreateUser = e => {
        e.preventDefault()
        if (password !== ConfirmPassword) {
            setError('Password did not match')
            return
        }
        if (password.length < 8) {

            setError('AtList 8 char must')
            return
        }
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='from-title'>Sign Up</h2>
                <form action="" onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handleEmailBlur} type='email' name="email" required></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">password</label>
                        <input onBlur={handlePasswordBlur} type='password' name='password' required></input>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type='password' name='confirm-password' required></input>
                    </div>
                    <p style={{ color: 'red' }}>
                        {error}
                    </p>
                    <input className='form-submit' type='submit' value="SignUp" />
                </form>
                <p>Already Have An Account? <Link className='form-link' to="/login">LogIn</Link></p>
            </div>
        </div>
    );
};

export default SignUp;