import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
`

export const HeaderContent = styled.div`
  flex: 1;
  width: 100%;
  height: 100vh;
  padding: 2rem 1.875rem;
  overflow-y: auto;

  img{
    width: 10rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 8rem;

    img{
      align-self: center;
    }
  }
`
