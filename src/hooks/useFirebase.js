import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/Firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log(userCredential.user);
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                console.log("Successfully Logedin");
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            console.log('Logout Successfully')
            setUser({})
        }).catch((error) => {
            console.log(error.message)
        });
    }
    return {
        user,
        createUser,
        loginUser,
        logOut
    }
}
export default useFirebase;