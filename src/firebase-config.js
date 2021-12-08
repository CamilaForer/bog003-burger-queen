import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP3mnC_J6rnaVYFQfOfg8beete90O7zpw",
  authDomain: "burger-queen-e788a.firebaseapp.com",
  projectId: "burger-queen-e788a",
  storageBucket: "burger-queen-e788a.appspot.com",
  messagingSenderId: "640497885828",
  appId: "1:640497885828:web:7faad669594c89129d18d1",
  measurementId: "G-B1BNHLCWBC",
  databaseURL: "https://databaseName.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

  /* 
  const setOrder = async (itemMenu, orderPrice, inputUserName, inputTableNum) => {
  await setDoc(doc(db, "Orders"), {
    client: inputUserName,
    table: inputTableNum,
    orderResume: [...itemMenu],
    totalPrice: orderPrice
  });
} */
