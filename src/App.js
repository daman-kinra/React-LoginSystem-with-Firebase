import React, {useState, useEffect} from 'react';
import './App.css';
import Fire from './Fire';
import Login from './Login';
import Hero from './Hero';

function App() {
const [user, setUser] = useState('');
const [email, setEmail] = useState('');
const [pass, setPass] = useState('');
const [emailError, setEmailError] = useState('');
const [passError, setPassError] = useState('');
const [pre, setPre] = useState(false);

const clearInput = () =>{
    setEmail('')
    setPass('')
}

const clearErr = () =>{
    setEmailError('')
    setPassError('');
}

const handleLogin = () =>{
    clearErr();
    Fire
    .auth()
    .signInWithEmailAndPassword(email,pass)
    .catch(err=>{
        switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
                setEmailError(err.message);
                break;
            case "auth/wrong-password":
                setPassError(err.message);
                break;

        }
    })
}

const signUp = () =>{
    clearErr();
    Fire
    .auth()
    .createUserWithEmailAndPassword(email,pass)
    .catch(err=>{
        switch(err.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
                setEmailError(err.message);
                break;
            case "auth/weak-password":
                setPassError(err.message);
                break;

        }
    })
}

const handleLogout = () =>{
  console.log('Done');
    Fire
    .auth()
    .signOut();
}

const authListener = () =>{
    Fire
    .auth()
    .onAuthStateChanged(use=>{
        if(use){
            clearInput();
            setUser(use);
        }
        else{
            setUser('');
        }
    })
}

useEffect(()=>{
    authListener();
},[]);

  return (
    <div className="App">
      {user ? (
        <Hero handleLogout={handleLogout} />
      ): (
        <Login 
    email={email} 
    pass={pass} 
    setEmail={setEmail} 
    setPass={setPass}
    handleLogin={handleLogin}
    signUp={signUp}
    setPre={setPre}
    passError={passError}
    emailError={emailError}
    pre={pre}
    />
      )}
    </div>
  );
}

export default App;
