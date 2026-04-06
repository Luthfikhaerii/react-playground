import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"

async function getUser() {
    const res = await fetch("users.json", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    return res.json()
}


function useUser() {
    const [data, setData] = useState<Array<{ name: string; email: string; password: string }>>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function getData() {
            setLoading(true)
            try {
                const user = await getUser()
                setData(user)
            } catch (err: any) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        getData()

    })

    return { data, loading, error }
}


export default function TestForm() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [loading, setloading] = useState(false)
    const [error, setError] = useState(null)
    const { user, setUser } = useContext(UserContext)
    const { data: userExist } = useUser()

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setloading(true)
        try {
            // const resUser = await createUser(data)
            alert("create user successfully")
            setUser(data)
        } catch (err: any) {
            setError(err.message)
        } finally {
            setloading(false)
        }
    }

    return (
        <div>
            <div>
                {
                    userExist.map(data => (<div>
                        <p>{data.name}</p>
                        <p>{data.email}</p>
                        <p>{data.password}</p>
                    </div>))
                }
            </div>
            <p>{JSON.stringify(user)}</p>
            <p>{error}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">name :</label>
                    <input type="text" name="name" id="name" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" onChange={handleChange} />
                </div>
                <button type="submit" disabled={loading}>{loading ? "loading.." : "login"}</button>
            </form>
        </div>
    )
}