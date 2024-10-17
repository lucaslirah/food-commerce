import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'
import { useContext } from 'react'
import { SnackContext } from '../../../App'

export default function Burgers() {
  const { burgers } = useContext(SnackContext)

  return (
    <>
      <Head title='Hambúrgueres' description='Nossos melhores burgers.'/>
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers}/>
    </>
  )
}
