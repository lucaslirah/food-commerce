import { FiPlus } from 'react-icons/fi'

import { Container } from './styles'
import { currencyFormat } from '../../helpers/currencyFormat'
import { SkeletonSnack } from './SkeletonSnack'
import { SnackData } from '../../interfaces/SnackData'
import { useCart } from '../../hooks/useCart'

interface SnacksProps {
  snacks: SnackData[]
}

export function Snacks({ snacks } : SnacksProps) {
  const { cart, addSnackIntoCart } = useCart()

  return (
    <Container >
      {//falso arquétipo de loading
        !snacks.length ? (
          // falso arquétipo
          [1,2,3,4,5,6].map(n=> <SkeletonSnack key={n}/>)
          ) : (
        snacks.map((snack) => {
          const existentSnack = cart.find(item => item.snack === snack.snack && item.id === snack.id)
          return (
            <div key={snack.id} className="snack">
            {existentSnack &&
              <span>{existentSnack.quantity}</span>
            }
            <h2>{snack.name}</h2>
            <div className="image-wrapper">
              <img src={snack.image} alt={snack.name} />
            </div>
            <p>{snack.description}</p>
            <div>
              <strong>{currencyFormat(snack.price)}</strong>
              <button type="button" title="adicionar lanche" onClick={() => addSnackIntoCart(snack)}>
                <FiPlus />
              </button>
            </div>
          </div>
          )})
        )
      }
    </Container>
  )
}
