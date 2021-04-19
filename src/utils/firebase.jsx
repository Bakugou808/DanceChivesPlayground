import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB76vGpRStXkCct_eMhjaFbsyL0I5DBN_g",
  authDomain: "my-awesome-project-b06fd.firebaseapp.com",
  projectId: "my-awesome-project-b06fd",
  storageBucket: "my-awesome-project-b06fd.appspot.com",
  messagingSenderId: "730081376840",
  appId: "1:730081376840:web:0b7e25cbc0e3f5328af67d",
  measurementId: "G-XD2V62M42F",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;
