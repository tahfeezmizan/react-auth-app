// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-rfhuhu2lae0C3-HwlNF1FgpdUPTKZ2M",
  authDomain: "authenticate-practices.firebaseapp.com",
  projectId: "authenticate-practices",
  storageBucket: "authenticate-practices.appspot.com",
  messagingSenderId: "300096168251",
  appId: "1:300096168251:web:0ebaff9f5fe8d53fe8571e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)