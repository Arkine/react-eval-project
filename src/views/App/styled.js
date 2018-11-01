import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  max-width: 78rem;
  margin: 0 auto;

  height: 100%;

  background-color: ${props => props.theme.colors.charcoal};
`

Container.Content = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 100%;

  padding: 0.5rem;
`

export const Stage = styled.div`
  flex-grow: 1;
  padding: 1rem;
  background-color: white;
  border-radius: 10px;
`
