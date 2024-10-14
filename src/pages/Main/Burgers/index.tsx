import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'
import { useState, useEffect } from 'react'
import { getBurgers } from '../../../services/api'

export default function Burgers() {
  const [burgers, setBurgers] = useState([])

  useEffect(() => {
    (
      async()=> {
        const response = await getBurgers()
        setBurgers(response.data)
      }
    )()
  }, [])

  return (
    <>
      <Head title='Hambúrgueres' description='Nossos melhores burgers.'/>
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers}/>
    </>
  )
}
