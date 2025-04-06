import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbGI6Pc7PmMSO6YJY9gHje31spHsy7N9s",
  authDomain: "content-moderation-proje-cb3dc.firebaseapp.com",
  projectId: "content-moderation-proje-cb3dc",
  storageBucket: "content-moderation-proje-cb3dc.appspot.com",
  messagingSenderId: "196962131115",
  appId: "1:196962131115:web:d325cc05a8ee5277f46bee",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };
