import { Container } from './styles'
import LogoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { ReactComponent as CartIcon} from '../../assets/shopping-cart.svg'
import { useCart } from '../../hooks/useCart'

export function OrderHeader() {
  const { cart } = useCart()
  return (
    <Container>
      <Link to="/">
        <img src={LogoImg} alt="Logo Food Commerce" />
      </Link>
      <div>
        <div>
          <span>
            <h3>Meus pedidos</h3>
            <strong>{`${ cart.length }`.padStart(2, '0')} lanche(s)</strong>
          </span>
        </div>
        <CartIcon/>
      </div>
    </Container>
  )
}
