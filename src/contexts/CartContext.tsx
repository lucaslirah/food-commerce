import { createContext, useState, ReactNode } from 'react'
import { SnackData } from '../interfaces/SnackData'

interface Snack extends SnackData {
  quantity: number
  subtotal: number
}

// interface removeSnackFromCart {
//   id: number
//   snack: string
// }
//
// interface updateCartProps {
//   id: number
//   snack: string
//   newQuantity: number
// }

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  // removeSnackFromCart: ({ id, snack }: removeSnackFromCart) => void
  // updateCartProps: ({ id, snack, newQuantity }: updateCartProps) => void
  // clearCart: () => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps){
  const [cart, setCart] = useState<Snack[]>([])

  function addSnackIntoCart(snack: SnackData) : void {
    const existentSnack = cart.find((item) => item.snack === snack.snack && item.id === snack.id)

    if(existentSnack) {
      const newCart = cart.map((item) => {
        if(item.id === snack.id && item.snack === snack.snack){
          const quantity = item.quantity + 1

          return {...item, quantity, subtotal: item.price * quantity}
        }

        return item
      })

      console.log("atualização", newCart)
      setCart(newCart)
      return
    }

    const newSnack = {...snack, quantity: 1, subtotal: snack.price}
    const newCart = [...cart, newSnack]

    console.log("adição", newCart)
    setCart(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addSnackIntoCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
