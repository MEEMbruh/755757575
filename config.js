import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyD-SF8ten7CXCbi94T_F6UXrj2AOb-6M0w",
  authDomain: "thing-61943.firebaseapp.com",
  databaseURL: "https://thing-61943-default-rtdb.firebaseio.com",
  projectId: "thing-61943",
  storageBucket: "thing-61943.appspot.com",
  messagingSenderId: "73297577155",
  appId: "1:73297577155:web:27935946ff31d659b9ce76",
  measurementId: "G-J5822ZQ1C5"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
