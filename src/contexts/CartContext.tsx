import { createContext, useState, ReactNode } from 'react'
import { SnackData } from '../interfaces/SnackData'
import { toast } from 'react-toastify'
import { snackEmoji } from '../helpers/snackEmoji'

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
        if (item.id === snack.id && item.snack === snack.snack) {
          const quantity = item.quantity + 1

          return { ...item, quantity, subtotal: item.price * quantity }
        }

        return item
      })

      // condição para snacks - se for pizza ou bebida usar 'adicionada' se for outro tipo de snack usar 'adicionado'
      const action = snack.snack === 'pizza' || snack.snack === 'drink' ? 'adicionada' : 'adicionado'
      const pronoun = snack.snack === 'pizza' || snack.snack === 'drink' ? 'Outra' : 'Outro'

      toast.success(`${pronoun} ${snackEmoji(snack.snack)} ${snack.name} ${action} aos pedidos!`)
      setCart(newCart)
      return
    }

    const newSnack = {...snack, quantity: 1, subtotal: snack.price}
    const newCart = [...cart, newSnack]

    // condição para snacks - se for pizza ou bebida usar 'adicionada' se for outro tipo de snack usar 'adicionado'
    const action = snack.snack === 'pizza' || snack.snack === 'drink' ? 'adicionada' : 'adicionado'
    const article = snack.snack === 'pizza' || snack.snack === 'drink' ? 'Uma' : 'Um'

    toast.success(`${article} ${snackEmoji(snack.snack)} ${snack.name} ${action} aos pedidos!`)
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
