import styled from 'styled-components'

export const Table = styled.table`
  border-collapse: collapse;
  width: ${props => props.width ? props.width : '100%'};
  max-width: 100%;
  margin-bottom: 1rem;
  border-radius: 3px;
  overflow-x: scroll;
`

Table.Header = styled.th`
  padding: 0.5rem;
  font-weight: bold;
  text-align: left;
`

Table.Data = styled.td`
  padding: 0.5rem;

  text-align: left;
  vertical-align: middle;
`

Table.Head = styled.thead`
  border: 1px solid ${props => props.theme.colors.gray};

  td {
  }
`

Table.Body = styled.tbody`
  border: 1px solid ${props => props.theme.colors.gray}
`

Table.Row = styled.tr`
  &:nth-of-type(even) {
    border-bottom: 0;
    background-color: ${props => props.theme.colors.gray};
  }
`
