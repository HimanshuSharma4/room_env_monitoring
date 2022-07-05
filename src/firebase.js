// apiKey: "AIzaSyDxu0YWvepkPK8wPPKbdj7qHOv60OVYAAM",
import firebase from 'firebase'; 

// https://room-env-mon-default-rtdb.firebaseio.com
const firebaseConfig = {
  apiKey: "AIzaSyAxHor-2ufsFKrwFReDlLfM7bAQmlvc2gg",
  authDomain: "room-env-mon.firebaseapp.com",
  databaseURL: "https://room-env-mon-default-rtdb.firebaseio.com",
  projectId: "room-env-mon",
  storageBucket: "room-env-mon.appspot.com",
  messagingSenderId: "722362590856",
  appId: "1:722362590856:web:716de5ee89f63656dee13d"
};


const firebaseapp =  firebase.initializeApp(firebaseConfig);

export default firebaseapp;



/* const firebaseConfig = {
  authDomain: "testing-api-6758b.firebaseapp.com",
  databaseURL: "https://testing-api-6758b-default-rtdb.firebaseio.com",
  projectId: "testing-api-6758b",
  storageBucket: "testing-api-6758b.appspot.com",
  messagingSenderId: "702306414400",
  appId: "1:702306414400:web:640577585b04b70d44d4a5",
  measurementId: "G-HWTD5M6WRT"
}; */