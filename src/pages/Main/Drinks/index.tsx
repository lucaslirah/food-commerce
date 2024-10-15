import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'
import { useEffect, useState } from 'react'
import { getDrinks } from '../../../services/api'
import { SnackData } from '../../../interfaces/SnackData'

export default function Drinks() {
  const [drinks, setDrinks] = useState<SnackData[]>([])

  useEffect(() => {
    (
      async() => {
        const response = await getDrinks()
        setDrinks(response.data)
      }
      )()
  }, [])

  return (
    <>
      <Head title='Bebidas' description='Nossos melhores bebidas.'/>
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}/>
    </>
  )
}
