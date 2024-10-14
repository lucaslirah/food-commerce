import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function Drinks() {
  const data = [
    {
      id: 1,
      snack: 'drink',
      name: 'Sucos',
      description:
        'Sucos nos sabores de morango, kiwi, abacaxi, laranja e limão.',
      price: 8.5,
      image: 'https://images.unsplash.com/photo-1647275486864-1b29efb0d570?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      snack: 'drink',
      name: 'Refrigerantes',
      description:
        'Refrigerantes nos sabores de coca-cola, sprite e fanta.',
      price: 5.5,
      image: 'https://images.unsplash.com/photo-1629059042675-ce386c84cebf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },    {
      id: 3,
      snack: 'drink',
      name: 'Vitaminas',
      description:
        'Vitaminas nos sabores de açai, goiaba, banana e camapu.',
      price: 15.5,
      image: 'https://images.unsplash.com/photo-1662130187270-a4d52c700eb6?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]

  return (
    <>
      <Head title='Bebidas' description='Nossos melhores bebidas.'/>
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={data}/>
    </>
  )
}
