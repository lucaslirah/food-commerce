import { Container } from './styles'
import { useCart } from '../../hooks/useCart'
import { ReactComponent as CartShop } from '../../assets/shopping-cart.svg'

export function MyOrder() {
  const { cart } = useCart()
  return (
    <Container to="cart">
      <span>Meu pedido</span>
      <CartShop/>
      {cart.length > 0 &&
        <span>{cart.length}</span>
      }
    </Container>
  )
}
