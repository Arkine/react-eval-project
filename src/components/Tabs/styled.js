import styled from 'styled-components'

// Tabs Container
export const TabsContainer = styled.div``
TabsContainer.Nav = styled.ul`
  display: flex;
  flex-flow: row wrap;
  padding: 0;
`
TabsContainer.Content = styled.div``

// Singe tab
export const TabContainer = styled.li`
  padding: 0.5rem;

  border: 1px solid #333;
  list-style: none;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.blue_dark};

    a {
      color: #fff;
    }
  }
`
TabContainer.Link = styled.a``
