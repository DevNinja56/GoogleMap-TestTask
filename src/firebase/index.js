import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAcQuYChAEpDkStwmAF8BgoFlj9ZOIe9g",
  authDomain: "testtask-lex-69517.firebaseapp.com",
  projectId: "testtask-lex-69517",
  storageBucket: "sidelink-4d816.appspot.com",
  messagingSenderId: "778614396375",
  appId: "1:778614396375:web:996f96a879a93ff2552792",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export default firebaseApp;
