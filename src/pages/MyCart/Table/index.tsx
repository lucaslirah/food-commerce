import { useCart } from '../../../hooks/useCart'
import { TableDesktop } from './TableDesktop'
import { TableMobile } from './TableMobile'
import { useEffect, useState } from 'react'
import { EmptyCart } from '../../../components/EmptyCart'

export function Table() {
  const { cart } = useCart()
  const [ windowWidth, setWindowWidth ] = useState(document.documentElement.clientWidth)

  useEffect(() => {
    function updateWindowDimensions() {
      const currentWidth = document.documentElement.clientWidth
      setWindowWidth(currentWidth)
    }
    window.addEventListener('resize', updateWindowDimensions)

    return () => {
      window.removeEventListener('resize', updateWindowDimensions)
    }
  }, [])

  if(cart.length === 0) return <EmptyCart title="Ops, não há pedidos no carrinho, peça já!"/>

  return (
    windowWidth > 768 ? <TableDesktop /> : <TableMobile />
  )
}
