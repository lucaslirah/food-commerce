import { createContext, useState, ReactNode } from 'react'
import { SnackData } from '../interfaces/SnackData'
import { toast } from 'react-toastify'
import { snackEmoji } from '../helpers/snackEmoji'
import { useNavigate } from 'react-router-dom'
import { CustomerData } from '../interfaces/CustomerData'

interface Snack extends SnackData {
  quantity: number
  subtotal: number
}

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  removeSnackFromCart: (snack: Snack) => void
  snackCartIncrement: (snack: Snack ) => void
  snackCartDecrement: (snack: Snack ) => void
  confirmOrder: () => void
  payOrder: (customer: CustomerData) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

const keyStorage = "@food-commerce:cart"
export function CartProvider({ children }: CartProviderProps){
  const navigate = useNavigate()
  const [cart, setCart] = useState<Snack[]>(() => {
    //recuperar itens de localstorage
    const storedCart = localStorage.getItem(keyStorage)

    if(storedCart) return JSON.parse(storedCart)

    return []
  })

  function saveCart(items: Snack[]){
    setCart(items)
    localStorage.setItem(keyStorage, JSON.stringify(items))
  }
  function clearCart(){
    localStorage.removeItem(keyStorage)
  }

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
      saveCart(newCart)
      return
    }

    const newSnack = {...snack, quantity: 1, subtotal: snack.price}
    const newCart = [...cart, newSnack]

    // condição para snacks - se for pizza ou bebida usar 'adicionada' se for outro tipo de snack usar 'adicionado'
    const action = snack.snack === 'pizza' || snack.snack === 'drink' ? 'adicionada' : 'adicionado'
    const article = snack.snack === 'pizza' || snack.snack === 'drink' ? 'Uma' : 'Um'

    toast.success(`${article} ${snackEmoji(snack.snack)} ${snack.name} ${action} aos pedidos!`)
    saveCart(newCart)
  }

  function removeSnackFromCart(snack: Snack) : void {
    const confirmRemove = confirm(`Remover ${snackEmoji(snack.snack)} ${snack.name}?`)

    if (confirmRemove){
      const newCart = cart.filter((item) => !(item.id === snack.id && item.snack === snack.snack))

      // condição para snacks - se for pizza ou bebida usar'removida' se for outro tipo de snack usar'removida'
      const action = snack.snack === 'pizza' || snack.snack === 'drink' ? 'removida' : 'removido'

      toast.success(`${snackEmoji(snack.snack)} ${snack.name} ${action} do carrinho!`)
      saveCart(newCart)
    }
  }

  function updateSnackQuantity(snack: Snack, newQuantity: number) : void {
    // lógica para atualizar a quantidade de snack
    if(newQuantity <= 0){
      removeSnackFromCart(snack)
      return
    }

    const existentSnackInCart = cart.find(item => item.id === snack.id && item.snack === snack.snack)

    if(!existentSnackInCart) return

    const newCart = cart.map((item) => {
      if (item.id === snack.id && item.snack === snack.snack) {
        return {
          ...item, quantity: newQuantity, subtotal: item.price * newQuantity
        }
      }

      return item
    })

    saveCart(newCart)
  }

  function snackCartIncrement(snack: Snack) : void {
    updateSnackQuantity(snack, snack.quantity + 1)
  }

  function snackCartDecrement(snack: Snack) : void {
    updateSnackQuantity(snack, snack.quantity - 1)
  }

  function confirmOrder() : void {
    navigate('/payment')
  }
  function payOrder(customer: CustomerData) : void {
    // eslint-disable-next-line no-console
    console.log('payOrder', customer, cart)

    // lógica para pagamento do pedido / chamada da API

    clearCart() // deve ser executado após retorno positivo da API

    return
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addSnackIntoCart,
        removeSnackFromCart,
        snackCartIncrement,
        snackCartDecrement,
        confirmOrder,
        payOrder
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
