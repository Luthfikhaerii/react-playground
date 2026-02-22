import { useState, useEffect } from "react"

export default function useFetch(url: string, options: any) {
    const [data, setData] = useState()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string|null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, options)
                const data = await res.json()
                setData(data)
            } catch (err) {
                if( err instanceof Error){
                    setError(err.message)
                }else{
                    setError("Unknown Error")
                }
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    })

    return { data, loading, error }
}