import { FiPlus } from 'react-icons/fi'

import { Container } from './styles'
import { currencyFormat } from '../../helpers/currencyFormat'
import { SkeletonSnack } from './SkeletonSnack'
import { SnackData } from '../../interfaces/SnackData'

interface SnacksProps {
  snacks: SnackData[]
}

export function Snacks({ snacks } : SnacksProps) {
  return (
    <Container >
      {//falso arquétipo de loading
        !snacks.length ? (
          // falso arquétipo
          [1,2,3,4,5,6].map(n=> <SkeletonSnack key={n}/>)
          ) : (
        snacks.map((snack) => (
          <div key={snack.id} className="snack">
            <h2>{snack.name}</h2>
            <div className="image-wrapper">
              <img src={snack.image} alt={snack.name} />
            </div>
            <p>{snack.description}</p>
            <div>
              <strong>{currencyFormat(snack.price)}</strong>
              <button type="button">
                <FiPlus />
              </button>
            </div>
          </div>
        ))
        )
      }
    </Container>
  )
}
