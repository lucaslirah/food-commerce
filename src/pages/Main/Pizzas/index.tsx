import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function Pizzas() {
  const data = [
    {
      id: 1,
      snack: 'pizza',
      name: 'Pepperoni',
      description:
        'Pizza com pepperoni, cogumelos, tomate e pimentões verde, amarelo e vermelho.',
      price: 35.5,
      image: 'https://images.unsplash.com/photo-1670757781705-9b6cb1ad0ca6?q=80&w=1451&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      snack: 'pizza',
      name: 'Carne com cogumelos',
      description:
        'Pizza de carne com cogumelos, tomate cereja e cebola.',
      price: 32.5,
      image: 'https://images.unsplash.com/photo-1671106681075-5a7233268cbd?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },    {
      id: 3,
      snack: 'pizza',
      name: 'Frango com requeijão',
      description:
        'Pizza de frango com requeijão, tomates picados e manjericão.',
      price: 28.5,
      image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]

  return (
    <>
      <Head title='Pizzas' description='Nossas melhores pizzas.'/>
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={data}/>
    </>
  )
}
