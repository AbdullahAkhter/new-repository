// Import the functions you need from the SDKs you need
import { GoogleAuthProvider } from "firebase/auth";
import{getAuth} from "firebase/auth"
import{initializeApp}from "firebase/app"




const firebaseConfig = {
  apiKey: "AIzaSyAtZj0brtOvyH-b3z32_QgHabOnznBRfHE",
  authDomain: "authentication-c85ea.firebaseapp.com",
  projectId: "authentication-c85ea",
  storageBucket: "authentication-c85ea.firebasestorage.app",
  messagingSenderId: "26096334991",
  appId: "1:26096334991:web:ca43773494c7d8c92b58fa"
};
const app=  initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const Provider=new GoogleAuthProvider()