import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // Function to create a new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Function to sign in an existing user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
        setLoading(true)
    };

    // Function to sign out the current user
    const signOutUser = () => {
        return signOut(auth);
        setLoading(true)
    };

    // Auth context value
    const authInfo = {
        loading,
        user,
        createUser,
        signInUser,
        signOutUser,
    };

    // Monitor auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });

        // Cleanup subscription on unmount
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export { AuthContext };
