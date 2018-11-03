import styled from 'styled-components'

// Tabs Container
export const TabsContainer = styled.div``

TabsContainer.Nav = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: ${props => props.alignTabs === 'right' ? 'flex-end' : 'flex-start'};
  padding: 0;
`

TabsContainer.Content = styled.div`
  overflow: hidden;
`

// Singe tab
export const TabContainer = styled.li`
  padding: 0.25rem;
  margin: 0 0.25rem;

  border: 1px solid ${props => props.isActive ? props.theme.colors.blue_dark : '#fff'};

  border-radius: 4px;

  list-style: none;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.blue_dark};
    color: #fff;

    a {
      color: #fff;
    }
  }
`

TabContainer.Link = styled.div`

`
