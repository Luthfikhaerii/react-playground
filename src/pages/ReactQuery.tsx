import { useState } from "react"
import { useAuth2, useLoginMutation } from "../hooks/useAuth"

interface FormData {
    name: string,
    email: string
}

//React Query = API State Management
export default function ReactQuery() {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '' })
    const { data: authData, isLoading, isError } = useAuth2()
    const { mutate } = useLoginMutation({
        onSuccess: () => {
            alert("Login Success")
        },
        onError: () => {
            alert("Login Failed")
        }
    })

    return (
        <>
            <p>React Query</p>

            {/* Reeact Query & Zustand */}
            <div className="my-10">
                <div>
                    {isLoading ? <p>loading</p> : isError ? <p>error</p> : <div>
                        <p>{authData.name}</p>
                        <p>{authData.email}</p>
                    </div>}
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    mutate({
                        name: formData.name,
                        email: formData.email
                    })
                }}>
                    <div>
                        <p>Name :</p>
                        <input type="text" name="name" className="border" onChange={(e) => setFormData(a => ({ ...a, name: e.target.value }))} />
                    </div>
                    <div>
                        <p>Email :</p>
                        <input type="text" name="email" className="border" onChange={(e) => setFormData(a => ({ ...a, email: e.target.value }))} />
                    </div>
                    <button type="submit">submit</button>
                </form>
            </div>
        </>
    )
}