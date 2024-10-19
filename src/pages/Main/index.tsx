import { Container, HeaderContent } from './styles'
import { Outlet } from 'react-router-dom'

import Sidebar from '../../components/Sidebar'
import logoImg from '../../assets/logo.svg'
import { MyOrder } from '../../components/MyOrder'

export default function Main() {
  return (
    <Container>
      <Sidebar/>
      <HeaderContent>
        <img src={logoImg} alt="logo food-commerce" />
        <Outlet />
        <MyOrder />
      </HeaderContent>
    </Container>
  )
}
