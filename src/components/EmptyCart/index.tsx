import { Button, Container } from './styles'
import { ReactComponent as PedindoComSmartphone } from '../../assets/food-delivery-app-phone-smartphone-svgrepo-com.svg'

interface  EmptyCartProps {
  title: string  // Title for the empty cart page
}

export function EmptyCart({title}: EmptyCartProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <Button to='/'>Checar o cardápio</Button>
      <PedindoComSmartphone />
      {/*<img src={PedindoComSmartphone} alt="pedindo com Smartphone" />*/}
    </Container>
  )
}
