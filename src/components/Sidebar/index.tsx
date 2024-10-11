import React, { useState } from 'react'
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
          <li><a href="#" className="active">
            <BurgerIcon/>
            <span>Hambúrgueres</span>
          </a></li>
          <li><a href="#">
            <PizzaIcon/>
            <span>Pizzas</span>
          </a></li>
          <li><a href="#">
            <SodaIcon/>
            <span>Bebidas</span>
          </a></li>
          <li><a href="#">
            <IceCreamIcon/>
            <span>Sobremesas</span>
          </a></li>
        </ul>
      </nav>
    </Container>
  )
}

export default Sidebar
