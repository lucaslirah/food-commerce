import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'
import { useEffect, useState } from 'react'
import { getPizzas } from '../../../services/api'
import { SnackData } from '../../../interfaces/SnackData'

export default function Pizzas() {
  const [pizzas, setPizzas] = useState<SnackData[]>([])

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
