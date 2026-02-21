import { createContext, useReducer } from "react"

//Types
interface User {
    id: number,
    name: string,
    email: string
}

interface State {
    user: User | null,
    isAuthenticated: boolean
}

type Action = 
{ type: "LOGIN", payload: User } | 
{ type: "LOGOUT", payload: { email: string } }

interface AuthContextValue {
    state: State,
    login: (name: string, email: string) => void,
    logout: (email: string) => void
}

//Reducer
const initialState: State = {
    user: null,
    isAuthenticated: false
}

function authReducer(state: State, action: Action): State {
    switch (action.type) {
        case "LOGIN":
            return { user: action.payload, isAuthenticated: true }
        case "LOGOUT":
            return { user: null, isAuthenticated: false }
        default:
            return state;
    }
}

//Context
export const AuthContext = createContext<AuthContextValue | null>(null)

//Provider Context
export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(authReducer, initialState)

    const login = (name: string, email: string) => {
        dispatch({
            type: "LOGIN", payload: {
                name, email,
                id: 1
            }
        })
    }

    const logout = (email: string) => {
        dispatch({
            type: "LOGOUT",
            payload: {
                email: email
            }
        })
    }

    return (
        <AuthContext.Provider value={{ state, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


