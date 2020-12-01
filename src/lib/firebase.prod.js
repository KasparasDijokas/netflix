import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import {seedDatabase} from '../seed';

const config = {
    apiKey: "AIzaSyDQTValgZmkJ6351FGVks9v7Zzu45edz3M",
    authDomain: "netflix-f9c47.firebaseapp.com",
    databaseURL: "https://netflix-f9c47.firebaseio.com",
    projectId: "netflix-f9c47",
    storageBucket: "netflix-f9c47.appspot.com",
    messagingSenderId: "341419980552",
    appId: "1:341419980552:web:0bb68527790b6aa5031ebd"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export {firebase};