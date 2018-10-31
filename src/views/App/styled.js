import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  background-color: ${props => props.theme.colors.charcoal};
`

Container.Content = styled.div`
  flex-grow: 1;
  padding: 0.5rem;
`

export const Stage = styled.div`
  padding: 1rem;
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 10px;
`
