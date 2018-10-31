import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import UnorderedList from '../../../components/common/UnorderedList'
import ImageBlock from '../../../components/common/ImageBlock'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
Container.Username = styled.h1`
  font-size: ${props => props.theme.fonts.h1.desktop};
`
Container.Bio = styled.div`
  margin-top: 1rem;
`

export default class UserView extends React.PureComponent {
  createListItems () {
    const {public_repos, followers} = this.props.user.data

    return {
      public_repos,
      followers
    }
  }

  render () {
    const listItems = this.createListItems()
    const {bio, name} = this.props.user.data

    return (
      <Container>
        <Container.Username>{name}</Container.Username>
        <ImageBlock image={this.props.user.data.avatar_url} height={230} width={230} />
        <Container.Bio>
          {bio}
        </Container.Bio>
        <UnorderedList items={listItems} />
      </Container>
    )
  }
}

UserView.propTypes = {
  user: PropTypes.object
}
