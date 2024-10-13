import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { Container } from './styles'
import menuImg from '../../assets/menu.svg'
import { ReactComponent as BurgerIcon } from "../../assets/burger.svg"
import { ReactComponent as PizzaIcon } from "../../assets/pizza.svg"
import { ReactComponent as IceCreamIcon } from "../../assets/ice-cream.svg"
import { ReactComponent as SodaIcon } from "../../assets/soda.svg"

function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // função para fazer o menu abrir
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <Container
    // propriedade para alterar o menu
      isOpen={menuOpen}
    >
      <button onClick={handleToggleMenu}>
        <img src={menuImg} alt="abrir e fechar o menu" />
      </button>
      <nav>
        <ul>
          <li><NavLink to="/">
            <BurgerIcon/>
            <span>Hambúrgueres</span>
          </NavLink></li>
          <li><NavLink to="pizzas">
            <PizzaIcon/>
            <span>Pizzas</span>
          </NavLink></li>
          <li><NavLink to="drinks">
            <SodaIcon/>
            <span>Bebidas</span>
          </NavLink></li>
          <li><NavLink to="ice-creams">
            <IceCreamIcon/>
            <span>Sorvetes</span>
          </NavLink></li>
        </ul>
      </nav>
    </Container>
  )
}

export default Sidebar
