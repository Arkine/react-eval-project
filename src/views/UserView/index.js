import React from 'react'
import PropTypes from 'prop-types'
import {faArchive, faUsers} from '@fortawesome/free-solid-svg-icons'

import Counter from '../../components/Counter'
import ImageBlock from '../../components/common/ImageBlock'
import IconText from '../../components/IconText'

import {Container} from './styled'

export default class UserView extends React.PureComponent {
  render () {
    const {bio, name, avatar_url, public_repos, followers} = this.props.user

    return (
      <Container>
        <Container.Content>
          <Container.Username>{name}</Container.Username>
          <ImageBlock image={avatar_url} height={230} width={230} />
          <Container.Bio>
            {bio}
          </Container.Bio>
          <Counter from={0} to={public_repos} />
          <IconText text={`Repositories ${public_repos}`} icon={faArchive} />
          <IconText text={`Followers ${followers}`} icon={faUsers} />
        </Container.Content>
      </Container>
    )
  }
}

UserView.propTypes = {
  user: PropTypes.object
}
