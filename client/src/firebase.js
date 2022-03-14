import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPwXWd_Qk6L7s17gs_TC-obiF1BatdqaA",
    authDomain: "covi-heal.firebaseapp.com",
    projectId: "covi-heal",
    storageBucket: "covi-heal.appspot.com",
    messagingSenderId: "63147889903",
    appId: "1:63147889903:web:5aaafb9101b343b0f0371a"
};


firebase.initializeApp(firebaseConfig);

export default firebase;