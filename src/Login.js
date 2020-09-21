import React from 'react'
import './Login.css'

function Login(props) {
    return (
        <div className="login-cont">
            <div className="Inner-cont">
                <div className='heading'>
                    {props.pre? (
                        <h1><strong>Sign-In</strong></h1>
                    ):(
                        <h1><strong>Sign-Up</strong></h1>
                    )}
                </div>
            <p className='errors'>{props.emailError}</p>
            <input type="text"
            value={props.email}
            onChange={e=> props.setEmail(e.target.value)}
            className='input'
            placeholder='Email...'
            />
            <p className='errors'>{props.passError}</p>
            <input type="password"
            value={props.pass}
            onChange={e=> props.setPass(e.target.value)}
            className='input'
            placeholder='Password...'
            />
            
            <div className='buttons'>
                {props.pre ? (
                    <>
                    <button onClick={props.handleLogin} className='btn'>Sign-in</button>
                    <p>Register?<span onClick={()=> props.setPre(!props.pre)}>Sign-up</span></p>
                    </>
                ):(
                    <>
                    <button onClick={props.signUp} className='btn'>Sign-up</button>
                    <p>Have an account?<span onClick={()=>props.setPre(!props.pre)}>Sign-in</span></p>
                    </>
                )}
            </div>
            </div>
        </div>
    )
}

export default Login;
