import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'
import { useContext } from 'react'
import { SnackContext } from '../../../contexts/SnackContext'

export default function Drinks() {
  const { drinks } = useContext(SnackContext)

  return (
    <>
      <Head title='Bebidas' description='Nossos melhores bebidas.'/>
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}/>
    </>
  )
}
