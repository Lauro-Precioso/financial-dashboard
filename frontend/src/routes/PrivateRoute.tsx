import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { JSX } from "react";

// Tipagem - Opcional mas recomendado
interface PrivateRouteProps{
    children: JSX.Element;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Carregando...</div>
    }

    return user ? children : <Navigate to="/login" />;
};