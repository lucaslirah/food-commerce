import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'
import { useContext } from 'react'
import { SnackContext } from '../../../contexts/SnackContext'

export default function IceCreams() {
  const { iceCreams } = useContext(SnackContext)

  return (
    <>
      <Head title='Sorvetes' description='Nossos melhores sorvetes.'/>
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={iceCreams}/>
    </>
  )
}
