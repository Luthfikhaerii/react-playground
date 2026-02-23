import { useCallback, useMemo, useRef, useState } from "react"
import CardProduct from "../components/features/order/CardProduct";

interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
}

const dummyProduct: Product[] = [
    { id: 1, name: "Product 1", price: 10, stock: 5 },
    { id: 2, name: "Product 2", price: 20, stock: 3 },
    { id: 3, name: "Product 3", price: 30, stock: 8 },
    { id: 4, name: "Product 4", price: 40, stock: 2 },
    { id: 5, name: "Product 5", price: 50, stock: 10 }
]

export default function ReactHook() {
    const [increment, setIncrement] = useState<number>(0);
    const [product, setProduct] = useState<Product[]>([...dummyProduct]);

    //onClick
    const handleClick = () => {
        setIncrement(prev => prev++)
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
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)

    return (
        <>
            <p>React Hook</p>

            {/* useCallback */}
            <div className="grid grid-cols-3 gap-4 mt-4">
                {
                    product.map(p => (
                        <CardProduct key={p.id} product={p} handleUpdate={handleUpdateProduct} />
                    ))
                }
            </div>

            {/* useMemo */}
            <div>
                {
                    filterProduct.map(v => (
                        <CardProduct key={v.id} product={v} handleUpdate={handleUpdateProduct} />
                    ))
                }
            </div>

            {/* useRef */}
            <div className="my-10">
                <div>
                    <p>{nameRef.current?.value}</p>
                    <p>{emailRef.current?.value}</p>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    console.log(nameRef.current?.value)
                    console.log(emailRef.current?.value)
                }}>
                    <p>Name :</p>
                    <input ref={nameRef} type="text" name="name" className="border" />
                    <p>Email :</p>
                    <input ref={emailRef} type="text" name="email" className="border" />
                    <button type="submit">submit</button>
                </form>
            </div>
        </>
    )
}