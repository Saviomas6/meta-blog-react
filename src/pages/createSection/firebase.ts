import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDmaNW3BoXHOnTxvgf4csJLAdY36GEq-3U",
  authDomain: "file-upload-28926.firebaseapp.com",
  projectId: "file-upload-28926",
  storageBucket: "file-upload-28926.appspot.com",
  messagingSenderId: "421157206393",
  appId: "1:421157206393:web:bfbc23b85c920ec65b97a8",
  measurementId: "G-JPM1C8GPB9",
};

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export default firebase;
