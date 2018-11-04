import styled from 'styled-components'
import IconText from 'components/IconText'

export const Container = styled.div`
  display: flex;
  flex-flow: column;

  height: 100%;
`

Container.Link = styled.a`
  color: ${props => props.theme.colors.blue_dark};
`
/**
 * Header
 */
Container.Header = styled.div``

Container.Title = styled.h3`
  font-size: ${props => props.theme.fonts.h2.desktop};
  margin: 0;
`

Container.Language = styled.div`
  position : absolute;
  top: 0.25rem;
  right: 1rem;

  font-size: 1.2rem;
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

  flex-grow: 1;
`

Container.Footer_item = styled.div`
  text-align: center;
  flex-basis: 6rem;

  align-self: flex-end;

  display: flex;
  flex-flow: column;

  margin: 0 -1rem;
`
export const Count = styled.div`
  font-size: 2rem;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  margin: 0.5rem 0;
`

Count.Icon = styled(IconText)`
  margin: 0.2rem 0;

  font-size: 1.5rem;
  text-align: center;
`

Count.Number = styled.span`
  font-size: 1.6rem;
`
Count.Repo_name = styled.div`
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
`
