
"use client"
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { 
    createUserWithEmailAndPassword, 
    signOut,
    onAuthStateChanged,
    signInWithPopup,
    signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "@/firebase/config";

interface AuthContextType {
    user: UserType | null;
    registerUser: (values: RegisterValues) => Promise<void>;
    loginUser: (values: RegisterValues) => Promise<void>;
    logout: () => Promise<void>;
    googleLogin: () => Promise<void>;
}

interface UserType {
    logged: boolean;
    email: string | null;
    uid: string | null;
}

interface RegisterValues {
    email: string;
    password: string;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserType>({
        logged: false,
        email: null,
        uid: null
    });

    const registerUser = async (values: RegisterValues): Promise<void> => {
        try {
            await createUserWithEmailAndPassword(auth, values.email, values.password);
        } catch (error) {
            throw new Error("Error registering user");
        }
    };

    const loginUser = async (values: RegisterValues): Promise<void> => {
        try {
             await signInWithEmailAndPassword(auth, values.email, values.password);
        } catch (error) {
            throw new Error("Error logging in user");
        }
    };

    const logout = async (): Promise<void> => {
        try {
            await signOut(auth);
        } catch (error) {
           throw new Error("Error logging out user");
        }
    }

    const googleLogin = async (): Promise<void> => {    
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
           throw new Error("Error logging in with Google");
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    logged: true,
                    email: user.email,
                    uid: user.uid
                });
            } else {
                setUser({
                    logged: false,
                    email: null,
                    uid: null
                });
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, registerUser, loginUser, logout, googleLogin }}>
            {children}
        </AuthContext.Provider>
    );
};
