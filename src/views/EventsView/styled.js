import styled from 'styled-components'

export const Container = styled.div``

Container.Header = styled.div`
  display: flex;
`
Container.Body = styled.div`
  padding: 1rem;
`
Container.Content = styled.div``
Container.Footer = styled.div``

export const ColorBlock = styled.div`
  height: 20px;
  width: 20px;

  border-radius: 5px;

  background-color: ${props => props.color};
`
Container.Color_legend = styled.div``

export const colorArr = [
  'steelblue',
  'green',
  'red',
  'purple',
  'rebeccapurple',
  'orange',
  'yellow',
  'salmon',
  'chartreuse',
  'cyan',
  'gold'
]
