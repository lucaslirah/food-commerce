import styled from 'styled-components'

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors.red};

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 7.75rem;

  padding: 2rem 0;
  overflow: hidden;

  button{
    background: none;
    border: none;
    width: 100%;
  }

  nav{
    width: 100%;
    height: 100%;
    flex: 1;

    ul{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;
      height: 100%;
    }
    li{
      a {
        width: fit-content;
        position: relative;
        padding:0 1.875rem 0 1.875rem;

        display: flex;
        align-items: center;
        gap: 2rem;

        svg{
          fill: ${({theme}) => theme.colors.white};
          width: 4rem;
          height: 4rem;
          transition: fill 0.3s ease;
        }

        span{
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        &.active{
          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            top: 50%;
            transform: translateY(-50%);

            width: 5px;
            height: calc(100% + 10px);
            background: ${({ theme }) => theme.colors.yellow};

            border-radius: 0 5px 5px 0;
          }

          svg{
            fill: ${({ theme }) => theme.colors.yellow};
          }
          span{
            color: ${({ theme }) => theme.colors.yellow};
          }
        }
      }
    }
  }
`
