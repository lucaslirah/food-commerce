import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 58.75rem;
  padding: 2rem 1.4rem;
  margin: 0 auto;
`
export const Inner = styled.div`
  padding: 2rem 2.5rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.black};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h4{
    margin: 2.5rem 0 2rem;

    &:first-child{
      margin-top: 1rem;
    }
  }

  .grouped{
    display: block;

    display: flex;
    flex-direction: row;
    gap: 1rem;

    width: 100%;
  }

  .field{
    flex-grow: 1;
    margin-bottom: 1rem;

    p{
      color: ${({ theme }) => theme.colors.red};
      margin-bottom: 0.5rem;
    }
  }

  label {
    display: block;
    color: ${({ theme }) => theme.colors.white})};
    margin-bottom: 0.5rem;
  }

  input, select {
    width: 100%;
    height: 42px;
    padding: 0.7rem;
    margin: 0 0 1rem;

    background-color: ${({ theme }) => theme.colors.gray800};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    border: none;

    transition: all 0.2s;
  }

  @media(max-width: 540px){
    .grouped{
      flex-direction: column;
    }
`
