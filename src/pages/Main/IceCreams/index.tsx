import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function IceCreams() {
  const data = [
    {
      id: 1,
      snack: 'ice-cream',
      name: 'Milk-shake',
      description:
        'Milk-shakes nos sabores de morango e chocolate.',
      price: 12.5,
      image: 'https://images.unsplash.com/photo-1619158403521-ed9795026d47?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      snack: 'ice-cream',
      name: 'Casquinha',
      description:
        'Casquinhas nos sabores de chocolate, morango e baunilha.',
      price: 5.5,
      image: 'https://images.unsplash.com/photo-1642646689566-60c53a8c1ef4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },    {
      id: 3,
      snack: 'ice-cream',
      name: 'Sundae',
      description:
        'Sundaes nos sabores de chocolate, morango e baunilha.',
      price: 10.5,
      image: 'https://images.unsplash.com/photo-1648857529887-28d03f6774ea?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]

  return (
    <>
      <Head title='Sorvetes' description='Nossos melhores sorvetes.'/>
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={data}/>
    </>
  )
}
