import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { darken } from 'polished'

interface Theme {
  theme: any
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  padding: 1.25rem 0.5rem;

  h2{
    max-width: 500px;
    font-size: 2rem;
  }

  svg{
    fill: ${(props: Theme) => props.theme.colors.white};
    //width: 100%;
    max-width: 20rem;
    max-height: 22rem;
    padding-left: 3rem;
  }
`
export const Button = styled(Link)`
  background-color: ${({ theme }) => theme.colors.red};
  width: 100%;
  max-width: 13rem;
  height: 3rem;
  margin: 1rem 0 3rem;

  font-size: 1.25rem;
  font-weight: 500;
  line-height: 3rem;

  border-radius: 8px;

  transition: background-color .3s ease;

  &:hover {
    background-color: ${darken(0.1, '#AA2424')};
  }
`
