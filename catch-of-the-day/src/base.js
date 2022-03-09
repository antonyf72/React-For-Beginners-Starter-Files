import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyAflpo4yMvJHuc51nCR1PdUA0CRvaVPYJA",
        authDomain: "catch-of-the-day-antony.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-antony-default-rtdb.europe-west1.firebasedatabase.app",       
    }
);

const base = Rebase.createClass(firebaseApp.database());

// Named export
export {firebaseApp};

// Default export
export default base;