import { Container } from './styles'
import { useCart } from '../../../../hooks/useCart'
import { currencyFormat } from '../../../../helpers/currencyFormat'
import plusImg from '../../../../assets/circle-plus.svg'
import minusImg from '../../../../assets/circle-minus.svg'

export function TableDesktop() {
  const { cart } = useCart()

  return (
    <Container>
      <table>
        <thead>
        <tr>
          <th></th>
          <th>Lanche</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {
          cart.map((item) => (
            <tr key={`${item.snack}-${item.id}`}>
              <td>
                <img src={item.image} alt={item.name} />
              </td>
              <td>
                <h4>{item.name}</h4>
                <span>{currencyFormat(item.price)}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={()=> console.log('decrementar', item)}>
                    <img src={minusImg}/>
                  </button>
                  <span>{`${ item.quantity }`.padStart(2, '0')}</span>
                  <button type="button" onClick={()=> console.log('incrementar', item)}>
                    <img src={plusImg}/>
                  </button>
                </div>
              </td>
              <td>
                <h5>{currencyFormat(item.subtotal)}</h5>
              </td>
              <td>
                <button>Remover</button>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </Container>
  )
}
