import { create } from "zustand";

type Cart = {
    title: string
    price: number
}

type CartStore = {
    cart: Cart[]
    addCart: (item: Cart) => void
    deleteCart: (title: string) => void
    clearCart: () => void
}

export const useCartStore = create<CartStore>((set) => ({
    cart: [],
    addCart: (item) => { set((state) => ({ cart: [...state.cart, item] })) },
    deleteCart: (title) => { set((state) => ({ cart: state.cart.filter(value => value.title !== title) })) },
    clearCart: () => { set({ cart: [] }) }
}))