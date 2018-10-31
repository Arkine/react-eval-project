import React from 'react'
import PropTypes from 'prop-types'

import UnorderedList from '../../components/common/UnorderedList'
import ImageBlock from '../../components/common/ImageBlock'

import {Container} from './styled'

export default class UserView extends React.PureComponent {
  createListItems () {
    const {public_repos, followers} = this.props.user

    return {
      public_repos,
      followers
    }
  }

  render () {
    const listItems = this.createListItems()
    const {bio, name, avatar_url} = this.props.user

    return (
      <Container>
        <Container.Username>{name}</Container.Username>
        <ImageBlock image={avatar_url} height={230} width={230} />
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
