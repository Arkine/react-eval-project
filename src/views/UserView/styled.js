import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
Container.Content = styled.div`
  background-color: #fff;
  border-radius: 10px;

  padding: 1rem;
`
Container.Username = styled.h1`
  font-size: ${props => props.theme.fonts.h1.desktop};
`
Container.Bio = styled.div`
  margin-top: 1rem;
`
