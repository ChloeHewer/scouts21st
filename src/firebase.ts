import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBBXGfzuXiRWWDTzmTmhkY_5sCYMtjgsos",
    authDomain: "scouts21stbristol.firebaseapp.com",
    databaseURL: "https://scouts21stbristol.firebaseio.com",
    projectId: "scouts21stbristol",
    storageBucket: "",
    messagingSenderId: "84278314492",
    appId: "1:84278314492:web:ea8e8e4fae125cdb"
};

firebase.initializeApp(firebaseConfig);
export const dataListen = firebase.database();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();

export default firebase;