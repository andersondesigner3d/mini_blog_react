import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA987BLBZn17nDW7BbeWNwvN29f5XK8FHs",
  authDomain: "miniblogreact-a2d3e.firebaseapp.com",
  projectId: "miniblogreact-a2d3e",
  storageBucket: "miniblogreact-a2d3e.appspot.com",
  messagingSenderId: "1057473903116",
  appId: "1:1057473903116:web:df882bfd3c4b5775704c29"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};