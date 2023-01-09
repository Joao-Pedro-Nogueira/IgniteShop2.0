import { createContext, ReactNode, useState } from 'react'

interface CartContextProviderProps {
  children: ReactNode,
}

export interface TheProduct {
  id: string,
  name: string,
  imageUrl: string,
  price: string,
  numberPrice: number,
  description: string,
  defaultPriceId: string,
}

interface CartContextData {
  cartItems: TheProduct[],
  addToCart: (product: TheProduct) => void,
  checkIfItemAlreadyExistsInCart: (product: TheProduct) => void,
  removeCartItem: (product: TheProduct) => void,
  cartTotal: number,
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<TheProduct[]>([])

  const cartTotal = cartItems.reduce((total, product) => {
    return total + product.numberPrice
  }, 0)

  function addToCart(product: TheProduct) {
    setCartItems((state) => [...state, product])
  }
  
  function removeCartItem(product: TheProduct) {
    setCartItems((state) => state.filter(item => item.id !== product.id))
  }

  function checkIfItemAlreadyExistsInCart(product: TheProduct) {
    return cartItems.some((productInCart) => productInCart.id === product.id)
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, checkIfItemAlreadyExistsInCart, removeCartItem, cartTotal }}>
      {children}
    </CartContext.Provider>
  )
}