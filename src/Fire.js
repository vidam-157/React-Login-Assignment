import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASBHdRlCGqgnVAEEz06miAiOTyzOBJ9nU",
  authDomain: "login-d7f9f.firebaseapp.com",
  projectId: "login-d7f9f",
  storageBucket: "login-d7f9f.appspot.com",
  messagingSenderId: "644750594544",
  appId: "1:644750594544:web:cc514cd36925d706da8d35"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;


