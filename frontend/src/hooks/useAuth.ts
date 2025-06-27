import { useState, useEffect } from "react";
import { auth, googleProvider } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    type User
} from 'firebase/auth';


export function useAuth() {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const login = async (email: string, password: string) => {
        try {
            setLoading(true);
            const result = await signInWithEmailAndPassword(auth, email, password);
            setUser(result.user);
            
            navigate('/home');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const register = async (email: string, password: string, confirmPassword: string, username: string) => {
        setLoading(true);

        if (password !== confirmPassword) {
            setError("Password don't match.");
            setLoading(false);
            return;
        }

        try{
            const result = await createUserWithEmailAndPassword(auth, email, password);
            setUser(result.user);

            // Chamada para o backend salvar os dados no banco
            await axios.post("http://localhost:3000/users", {
                uid: user!.uid,
                email: user!.email,
                username: username,
            });

            navigate('/home');

        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const loginWithGoogle = async () => {
        try {
            setLoading(true);
            const result = await signInWithPopup(auth, googleProvider);
            setUser(result.user);

            navigate('/home');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        await signOut(auth);
        setUser(null);
    };

    return {
        user,
        loading,
        error,
        login,
        register,
        loginWithGoogle,
        logout,
    };
}