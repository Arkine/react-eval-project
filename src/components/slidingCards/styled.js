import styled from 'styled-components'

export const CardsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding-top: 1.5rem;
`

export const Card = styled.div`
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.gray_light};
  padding: 1rem;

  flex-basis: 20rem;
  flex-grow: 1;
  margin: 1rem;
  height: 200px;
  width: 200px;

  opacity: 0;
  visibility: hidden;

  transition: box-shadow 0.3s cubic-bezier(.25,.8,.25,1);

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`

export const DummyCard = styled(Card)`
  height: 0;
`
