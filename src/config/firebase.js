import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA3-CjNAunO_L70cz285NFnsvKqsuDPQp4",
  authDomain: "auth-dd451.firebaseapp.com",
  projectId: "auth-dd451",
  storageBucket: "auth-dd451.appspot.com",
  messagingSenderId: "454250517131",
  appId: "1:454250517131:web:a0d2e36c543d0f09d63a8e"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};