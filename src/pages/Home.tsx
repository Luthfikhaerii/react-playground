import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { ENV } from "../config/env"
import CardProduct from "../components/features/order/CardProduct";
import { useAuth, useAuth2, useLoginMutation } from "../hooks/useAuth";

interface FormData {
  name: string,
  email: string
}

export default function Home() {
  const [data, setData] = useState<string>("Hello World");

  const handleClick = () => {
    setData("Data updated!")
  }

  //useEffect
  useEffect(() => {
    // inputRef.current?.focus()

    console.log("Home page loaded")
  }, [])

  return (
    <>

      <div className="min-h-screen">
        <h1 className="bg-yellow-600">Home Page</h1>

        {/* ENV */}
        <p>API URL : {ENV.API_URL}</p>
        <button onClick={handleClick} className="bg-green-500 text-white px-4 py-2 rounded">Update Data</button>
        <p>DATA STATE : {data}</p>


      </div>

    </>
  )
}