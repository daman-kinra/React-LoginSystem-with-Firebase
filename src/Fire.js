import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAVm7oGCIAqkFNv5E7c1ehGac3ZEYlysnk",
    authDomain: "react-login-system-6606d.firebaseapp.com",
    databaseURL: "https://react-login-system-6606d.firebaseio.com",
    projectId: "react-login-system-6606d",
    storageBucket: "react-login-system-6606d.appspot.com",
    messagingSenderId: "388120118301",
    appId: "1:388120118301:web:1a64d0391b84fae3cfb2f4"
  };
  const Fire = firebase.initializeApp(firebaseConfig);

  export default Fire;