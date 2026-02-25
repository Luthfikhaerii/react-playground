import { useState } from "react"
import { ENV } from "../config/env"

{/* ENV */}
export default function Home() {
  const [data, setData] = useState<string>("Hello World");

  const handleClick = () => {
    setData("Data updated!")
  }

  return (
    <>
      <h1 className="bg-yellow-600">Home Page</h1>
      <p>API URL : {ENV.API_URL}</p>
      <button onClick={handleClick} className="bg-green-500 text-white px-4 py-2 rounded">Update Data</button>
      <p>DATA STATE : {data}</p>
    </>
  )
}