import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDf9wg7hel8FkrX9nRpAo72Z0XmOOq2vLY",
  authDomain: "e-commerce-pet.firebaseapp.com",
  projectId: "e-commerce-pet",
  storageBucket: "e-commerce-pet.appspot.com",
  messagingSenderId: "601231647655",
  appId: "1:601231647655:web:118b8cf7fae5cb9e874c82",
  measurementId: "G-8Y7N6PQ6WW",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
