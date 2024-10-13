import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function Burgers() {
  const data = [
    {
      id: 1,
      snack: 'burger',
      name: 'Mega',
      description:
        'O artesanal tamanho família recheado com três carnes suculentas, queijo, picles bacon, cebola caramelizada e molho especial.',
      price: 26.5,
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=2568&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      snack: 'burger',
      name: 'Duplo cheddar',
      description:
        'Duas camadas generosas de cheddar com carne suculenta, picles, cebola caramelizada e molho especial.',
      price: 23.5,
      image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=2615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },    {
      id: 3,
      snack: 'burger',
      name: 'Smash',
      description:
        'Simples, mas delicioso. Carne com cebola, alface, palmito, queijo e molho especial.',
      price: 18.5,
      image: 'https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]

  console.log('data', data)
  return (
    <>
      <Head title='Hambúrgueres' description='Nossos melhores burgers.'/>
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={data}/>
    </>
  )
}
