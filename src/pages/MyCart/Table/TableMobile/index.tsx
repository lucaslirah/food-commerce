import { Container } from './styles'
import { useCart } from '../../../../hooks/useCart'
import { currencyFormat } from '../../../../helpers/currencyFormat'
import plusImg from '../../../../assets/circle-plus.svg'
import minusImg from '../../../../assets/circle-minus.svg'
import { FaTrashAlt } from 'react-icons/fa'
import { ConfirmOrder } from '../../../../components/OrderCloseAction/ConfirmOrder'

export function TableMobile() {
  const { cart, removeSnackFromCart, snackCartIncrement, snackCartDecrement } = useCart()

  return (
    <Container>
      {
        cart.map(item => (
          <div key={`${item.snack}-${item.id}`} className="order-item">
            <div>
              <img src={item.image} alt={item.name}/>
            </div>
            <div>
              <h4>{item.name}</h4>
              <span>{currencyFormat(item.price)}</span>
              <div>
                <div>
                  <button type="button" onClick={() => snackCartDecrement(item)}>
                    <img src={minusImg} alt="Diminuir quantidade" />
                  </button>
                  <span>{`${item.quantity}`.padStart(2, '0')}</span>
                  <button type="button" onClick={() => snackCartIncrement(item)}>
                    <img src={plusImg} alt="Aumentar quantidade" />
                  </button>
                </div>
              <button type="button" title="remover lanche do carrinho" onClick={() => removeSnackFromCart(item)}>
                <FaTrashAlt />
              </button>
              </div>
            <h5>
              <span>Subtotal {currencyFormat(item.subtotal)}</span>
            </h5>
            </div>
          </div>
        ))
      }
      <ConfirmOrder/>
    </Container>
  )
}
