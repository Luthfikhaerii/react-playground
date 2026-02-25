import { useState } from "react"
import { loginSchema } from "../features/schema/auth.schema"

export default function Zod() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleSubmit = (e: any) => {
        e.preventDefault()
        try {
            // result = { success: true; data: T } | { success: false; error: ZodError }
            const result: any = loginSchema.parse(formData)

            if (!result.success) {
                console.log(result)
                return
            }

            alert("Validation Success")
            console.log(result.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <p>Zod Validation</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}