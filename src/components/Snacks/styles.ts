import { darken } from 'polished'

import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.75rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  .snack {
    position: relative;
    background: ${({ theme }) => theme.colors.black};
    padding: 1.75rem 1.5rem;
    border-radius: 4px;

    // alinhar as informações no box
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      position: absolute;
      top: -.5rem;
      left: -.5rem;

      background-color: ${({ theme }) => theme.colors.red};
      width: 2rem;
      height: 2rem;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 50%;

      font-size: 1.125rem;
      font-weight: 500;
    }

    h2 {
      margin-bottom: 0.75rem;
      font-weight: 700;
      font-size: 1.5rem;
      text-align: center;
    }

    .image-wrapper {
      position: relative;
      width: 100%;
      height: 12rem;
      border-radius: 4px;
      margin-bottom: 0.375rem;

      img {
        object-fit: cover;
        width: 100%;
        height: 12rem;
        border-radius: 4px;
        margin-bottom: 0.375rem;
      }

      &::after {
        content: '';
        position: absolute;
        top: -3px;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(250, 0, 0, 0.08); /* Cor clara avermelhada */
        border-radius: 4px;
        z-index: 1;
      }
    }

    p {
      font-size: 0.875rem;
    }

    div {
      margin-top: 0.875rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      strong {
        font-size: 2rem;
        font-weight: 500;
      }

      button {
        background: ${({ theme }) => theme.colors.red};
        width: 3rem;
        height: 3rem;
        border: none;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          stroke: ${({ theme }) => theme.colors.white};
          width: 1.5rem;
          height: 1.5rem;
        }

        &:hover {
          background: ${darken(0.1, '#AA2424')};
        }
      }
    }
`
