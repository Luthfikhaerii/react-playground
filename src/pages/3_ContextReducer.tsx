import { useState } from "react";
import { useAuth } from "../features/hooks/queries/useAuth";

interface FormData {
  name: string,
  email: string
}

{/* Context & Reducer */}
export default function ContextReducer() {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '' })
    const { state, login } = useAuth()

    return (
        <>
            <p>Context Reducer</p>
            <div className="my-10">
                <div>
                    <p>{state.user?.name}</p>
                    <p>{state.user?.email}</p>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    login(formData?.name, formData?.email)
                }}>
                    <p>Name :</p>
                    <input type="text" name="name" className="border" onChange={(e) => setFormData(a => ({ ...a, name: e.target.value }))} />
                    <p>Email :</p>
                    <input type="text" name="email" className="border" onChange={(e) => setFormData(a => ({ ...a, email: e.target.value }))} />
                    <button type="submit">submit</button>
                </form>
            </div>
        </>
    )
}