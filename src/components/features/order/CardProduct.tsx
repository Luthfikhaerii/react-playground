import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface HandleUpdate {
  (id: number, update: Partial<Product>): void;
}

function CardProduct({ product, handleUpdate }: { product: Product, handleUpdate: HandleUpdate }) {
    console.log(`Render product ${product.id}`)
    return (
        <div className="border p-4 rounded">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <button onClick={() => handleUpdate(product.id, { stock: product.stock - 1 })} className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
        </div>
    )
}

export default React.memo(CardProduct);