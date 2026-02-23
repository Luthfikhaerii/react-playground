import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getAuth, loginAuth } from "../api/auth.api"
import { useAuthStore } from "../stores/auth.store"

const AUTH_QUERY_KEY = ["auth"]

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth harus digunakan di dalam <AuthProvider>")
    }

    return context
}

export function useAuth2() {
    return useQuery({
        queryFn: getAuth,
        queryKey: AUTH_QUERY_KEY
    })
}

export function useLoginMutation(options: { onSuccess: () => void, onError: () => void }) {
    const login = useAuthStore((s)=>s.login);
    
    return useMutation({
        mutationFn: loginAuth,
        onSuccess: (data) => {
            login(data?.user, data?.token)
            options?.onSuccess?.()
        },
        onError: () => {
            options?.onError?.()
        }
    })
}

export function useLogoutMutation(options: { onSuccess: () => void, onError: () => void }){
    const logout = useAuthStore((s)=>s.logout)

    return useMutation({
        mutationFn: loginAuth,
        onSuccess: () => {
            logout()
            options?.onSuccess?.()
        },
        onError: () => {
            options?.onError?.()
        }
    })
}