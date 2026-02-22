import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { ENV } from "../config/env"
import CardProduct from "../components/features/order/CardProduct";
import useAuth from "../hooks/useAuth";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface FormData {
  name: string,
  email: string
}

const dummyProduct: Product[] = [
  { id: 1, name: "Product 1", price: 10, stock: 5 },
  { id: 2, name: "Product 2", price: 20, stock: 3 },
  { id: 3, name: "Product 3", price: 30, stock: 8 },
  { id: 4, name: "Product 4", price: 40, stock: 2 },
  { id: 5, name: "Product 5", price: 50, stock: 10 }
]

export default function Home() {
  const [data, setData] = useState<string>("Hello World");
  const [product, setProduct] = useState<Product[]>([...dummyProduct]);
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' })
  const { state, login, logout } = useAuth()

  const handleClick = () => {
    setData("Data updated!")
  }

  //useCallback = mencegah fungsi di buat ulang di children component
  const handleUpdateProduct = useCallback((id: number, update: Partial<Product>) => {
    console.log("handle product render")
    setProduct(prev => prev.map(p => p.id === id ? { ...p, ...update } : p))
  }, [])

  //useMemo = mencegah fungsi menghitung ulang nilai
  const filterProduct = useMemo(() => {
    console.log('render useMemo')
    return product.filter(v => v.id >= 3)
  }, [product])

  //useRef = mengakses DOM
  const inputRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

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

        {/* UseCallback */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {product.map(p => (
            <CardProduct key={p.id} product={p} handleUpdate={handleUpdateProduct} />
          ))}
        </div>
        <div>
          {
            filterProduct.map(v => (
              <CardProduct key={v.id} product={v} handleUpdate={handleUpdateProduct} />
            ))
          }
        </div>

        {/* Auth Context & Reducer */}
        <div className="my-10">
          <div>
            <p>{state.user?.name}</p>
            <p>{state.user?.email}</p>
          </div>
          <form onSubmit={(e) => {
            e.preventDefault();
            login(formData?.name, formData?.email)
            console.log(emailRef.current?.value)
          }}>
            <p>Name :</p>
            <input ref={inputRef} type="text" name="name" className="border" onChange={(e) => setFormData(a => ({ ...a, name: e.target.value }))} />
            <p>Email :</p>
            <input ref={emailRef} type="text" name="email" className="border" onChange={(e) => setFormData(a => ({ ...a, email: e.target.value }))} />
            <button type="submit">submit</button>
          </form>
        </div>

      </div>

    </>
  )
}