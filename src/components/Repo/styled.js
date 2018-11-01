import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-flow: column;

  height: 100%;
`

Container.Link = styled.a``
/**
 * Header
 */
Container.Header = styled.div``

Container.Title = styled.h3`
  font-size: ${props => props.theme.fonts.h3.desktop};
  margin: 0;
`

Container.Language = styled.div`
  position : absolute;
  top: 0.35rem;
  right: 1rem;
`

Container.Meta = styled.span`
  font-size: 0.85rem;
`

Container.Meta_Label = styled.span`
  font-weight: 700;
`
/**
 * Body
 */
Container.Body = styled.div`
  flex-grow: 1;
`


/**
 * Footer
 */
Container.Footer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

Container.Footer_item = styled.div`
  text-align: center;
  flex-grow: 1;
  flex-basis: 3rem;
`
