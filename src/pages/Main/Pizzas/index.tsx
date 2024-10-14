import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'
import { useEffect, useState } from 'react'
import { getPizzas } from '../../../services/api'

export default function Pizzas() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    (
      async()=> {
        const response = await getPizzas()
        setPizzas(response.data)
      }
    )()
  },[])

  return (
    <>
      <Head title='Pizzas' description='Nossas melhores pizzas.'/>
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}/>
    </>
  )
}
