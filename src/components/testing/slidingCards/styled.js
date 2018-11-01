import styled from 'styled-components'

export const CardsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    border: 1px solid green;

`

export const Card = styled.div`
    border: 1px solid red;

    flex-basis: 20rem;
    height: 200px;
    width: 200px;

    opacity: 0;
    visibility: hidden;
`
export const DummyCard = styled.div`
    height: 200px;
    width: 200px;
    
`