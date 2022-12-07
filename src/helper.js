import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB4reMH852gc7S8fAvBEFsPfPIH_2C7pXA",
  authDomain: "e-commerce-57b1d.firebaseapp.com",
  databaseURL: "https://e-commerce-57b1d-default-rtdb.firebaseio.com",
  projectId: "e-commerce-57b1d",
  storageBucket: "e-commerce-57b1d.appspot.com",
  messagingSenderId: "1023581582761",
  appId: "1:1023581582761:web:f91b992dd2bdcfdcfa00b8",
};

firebase.initializeApp(firebaseConfig);
export const database = firebase.database().ref("/eCommerce");
export const users = firebase.database().ref("/users");
export const addProduct = firebase.database().ref("/product");
