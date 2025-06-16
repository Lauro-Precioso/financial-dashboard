import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { JSX } from "react";

// Tipagem - opcional mas recomendado
interface PublicRouteProps {
    children: JSX.Element;
}

export function PublicRoute({ children }: PublicRouteProps) {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Carregando...</div>
    }

    return !user ? children : null
}