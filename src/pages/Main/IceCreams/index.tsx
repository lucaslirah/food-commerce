import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'
import { useEffect, useState } from 'react'
import { getIceCreams } from '../../../services/api'

export default function IceCreams() {
  const [iceCream, setIceCream] = useState([])

  useEffect(() => {
    (
      async()=> {
        const response = await getIceCreams()
        setIceCream(response.data)
      }
    )()
  },[])

  return (
    <>
      <Head title='Sorvetes' description='Nossos melhores sorvetes.'/>
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={iceCream}/>
    </>
  )
}
