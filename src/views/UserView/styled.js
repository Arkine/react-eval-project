import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

Container.Content = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  border-radius: 10px;

  padding: 1rem 1rem 2rem;
`

Container.Username = styled(Link)`
  display: block;
  font-size: ${props => props.theme.fonts.h1.desktop};
  color: ${props => props.theme.colors.blue_dark};
  font-weight: 700;
  margin-bottom: 1rem;
`

Container.Bio = styled.div`
  margin-top: 1rem;
`
