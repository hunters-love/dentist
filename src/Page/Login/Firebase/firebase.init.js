import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initiliseAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initiliseAuthentication;