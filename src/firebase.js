import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDeyHP-mE2QvFQaN5nZb-jgYb12-hBCf_k",
  authDomain: "university-final-project-2.firebaseapp.com",
  projectId: "university-final-project-2",
  storageBucket: "university-final-project-2.appspot.com",
  messagingSenderId: "166364231349",
  appId: "1:166364231349:web:1a7b3d0fd371ca530eb0fc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();


export default auth;