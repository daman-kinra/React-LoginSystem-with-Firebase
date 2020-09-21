import React from 'react'

function Login(props) {
    return (
        <div className="login-cont">
            <input type="text"
            value={props.email}
            onChange={e=> props.setEmail(e.target.value)}
            />
            <p>{props.emailError}</p>
            <input type="password"
            value={props.pass}
            onChange={e=> props.setPass(e.target.value)}
            />
            <p>{props.passError}</p>
            <div className='btn'>
                {props.pre ? (
                    <>
                    <button onClick={props.handleLogin}>SignIn</button>
                    <p>Dont have Acc <span onClick={()=> props.setPre(!props.pre)}>signup</span></p>
                    </>
                ):(
                    <>
                    <button onClick={props.signUp}>SignUp</button>
                    <p>Have An Acc <span onClick={()=>props.setPre(!props.pre)}>signin</span></p>
                    </>
                )}
            </div>
        </div>
    )
}

export default Login;
