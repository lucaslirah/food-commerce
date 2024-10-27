import { Container } from '../styles'
import { currencyFormat } from '../../../helpers/currencyFormat'
import { useCart } from '../../../hooks/useCart'

export function PayOrder() {
  const { cart } = useCart()
  // total dos pedidos

  // let totalAmount = 0
  // cart.forEach((snack) => {
  //   totalAmount += snack.subtotal
  // })
  const totalAmount = cart.reduce((acc, snack) => (acc += snack.subtotal), 0)

  return (
    <Container>
      <button type="submit">
        Pagar
      </button>
      <span>
          Total: <strong>{currencyFormat(totalAmount)}</strong>
        </span>
    </Container>
  )
}
