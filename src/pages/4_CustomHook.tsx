import { useEffect, useState } from "react"
import useDebounce from "../features/hooks/general/useDebounce"

export default function CustomHook(){
    const [value, setValue] = useState(0)
    const debouncedValue = useDebounce(value,1000)

    useEffect(() => {
        if(!debouncedValue) return
        console.log("API Call with value : ",debouncedValue)
    },[value])
    
return(
    <>
    <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} />
    <p>Debounced Value : {useDebounce(value,1000)}</p>
    </>
)

}