import { createContext, useState } from "react";

type User = {
    name: string
    email: string
    password: string
}

export const UserContext = createContext<any>(null)

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User>()

    return (
        <UserContext.Provider value={{ user, setUser }} >
            {children}
        </UserContext.Provider>
    )
}