import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

export const app=firebase.initializeApp({
    "projectId": "panel-mabriss",
    "appId": "1:195720380977:web:53b46a354ac09f72f58b10",
    "storageBucket": "panel-mabriss.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyCKc4KymslluMfSFkJ9qAmfGJhDtossNbU",
    "authDomain": "panel-mabriss.firebaseapp.com",
    "messagingSenderId": "195720380977"
});
