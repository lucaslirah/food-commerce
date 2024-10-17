import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'
import { useContext } from 'react'
import { SnackContext } from '../../../contexts/SnackContext'

export default function Pizzas() {
  const { pizzas } = useContext(SnackContext)

  return (
    <>
      <Head title='Pizzas' description='Nossas melhores pizzas.'/>
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}/>
    </>
  )
}
