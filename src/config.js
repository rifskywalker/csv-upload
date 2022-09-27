import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig =firebase.initializeApp ({
    apiKey: "AIzaSyDPuQfl3trmHI5k2gR_8z5J3Ew59CbjYrQ",
    authDomain: "react-csv.firebaseapp.com",
    projectId: "react-csv",
    storageBucket: "react-csv.appspot.com",
    messagingSenderId: "583033586732",
    appId: "1:583033586732:web:37a716b9945af1b4effd89",
    measurementId: "G-EX7W3H8W80"
  });

  export default firebaseConfig;