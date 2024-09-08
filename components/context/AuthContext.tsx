
"use client"
import { createContext, useContext, useState, ReactNode } from "react";
import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth } from "@/firebase/config";

interface AuthContextType {
    user: UserType | null;
    registerUser: (values: RegisterValues) => Promise<void>;
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
            const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
            const user = userCredential.user;

            setUser({
                logged: true,
                email: user.email,
                uid: user.uid
            });
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, registerUser }}>
            {children}
        </AuthContext.Provider>
    );
};
