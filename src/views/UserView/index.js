import React from 'react'
import PropTypes from 'prop-types'
import {faArchive, faUsers} from '@fortawesome/free-solid-svg-icons'

import transitionRoute from '../../decorators/transitionRoute'

import ImageBlock from '../../components/common/ImageBlock'
import IconText from '../../components/IconText'

import {fadeFromLeft} from '../../services/animations/transition'

import {Container} from './styled'

@transitionRoute(fadeFromLeft, {timeout: 5000})
export default class UserView extends React.PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render () {
    const {bio, name, avatar_url: avatarUrl, public_repos: publicRepos, followers} = this.props.user

    return (
      <Container>
        <Container.Content>
          <Container.Username to={'/repositories'}>{name}</Container.Username>
          <ImageBlock image={avatarUrl} height={230} width={230} />
          <Container.Bio>
            <p>{bio}</p>
          </Container.Bio>
          <IconText text={`Repositories ${publicRepos}`} icon={faArchive} />
          <IconText text={`Followers ${followers}`} icon={faUsers} />
        </Container.Content>
      </Container>
    )
  }
}
