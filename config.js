import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

var firebaseConfig = {
    apiKey: "AIzaSyC18-v3UE_lbxqMVGhq06k3z3wd7dBJ7DI",
    authDomain: "project-142aa.firebaseapp.com",
    projectId: "project-142aa",
    storageBucket: "project-142aa.appspot.com",
    messagingSenderId: "580809488245",
    appId: "1:580809488245:web:af381b86c3ac96ee94453c"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
