import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initiliseAuthentication from "./../Page/Login/Firebase/firebase.init";

initiliseAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const auth = getAuth();
    const signinusinggoogle = () => {
        const GoogleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                setUser(result.user)
            })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])


    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }






    return {
        user,
        logOut,
        signinusinggoogle
    }

}
export default useFirebase;