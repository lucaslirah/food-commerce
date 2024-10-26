import { Container } from '../styles'
import { currencyFormat } from '../../../helpers/currencyFormat'
import { useCart } from '../../../hooks/useCart'

export function ConfirmOrder() {
  const { cart, confirmOrder } = useCart()
  // total dos pedidos

  // let totalAmount = 0
  // cart.forEach((snack) => {
  //   totalAmount += snack.subtotal
  // })
  const totalAmount = cart.reduce((acc, snack) => (acc += snack.subtotal), 0)

  return (
    <Container>
      <button onClick={confirmOrder}>
        Finalizar pedido
      </button>
        <span>
          Total: <strong>{currencyFormat(totalAmount)}</strong>
        </span>
    </Container>
  )
}
