import { useParams, useSearchParams } from "react-router-dom"

export default function Params(){
    const { id} = useParams()
    const [searchParams] = useSearchParams()
    const search = searchParams.get("search")
    return(
        <>
        <p>This is a custom page with a custom name.</p>
        <p>ID: {id}</p>
        <p>Search: {search}</p>
        </>
    )
}