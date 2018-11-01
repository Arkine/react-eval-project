import React from 'react'
import PropTypes from 'prop-types'
import {faUsers, faStar, faExclamation, faCodeBranch, faCode} from '@fortawesome/free-solid-svg-icons'

import {Container} from './styled'
import IconText from '../../components/IconText'

export default class Repo extends React.PureComponent {
  render () {
    const {repo} = this.props

    return (
      <Container>
        <Container.Header>
          <Container.Title>
            <Container.Link href={repo.html_url} target='__blank' rel='nofollow'>{repo.name}</Container.Link>
          </Container.Title>
          <Container.Meta>
            <Container.Meta_Label>Created: </Container.Meta_Label>
            {new Date(repo.created_at).toDateString()}
          </Container.Meta>
          {repo.language &&
            <Container.Language>
              <IconText icon={faCode} text={repo.language} />
            </Container.Language>
          }
        </Container.Header>
        <Container.Body>
          <p>{repo.description}</p>
        </Container.Body>
        <Container.Footer>
          <Container.Footer_item aria-label='Watchers'><IconText icon={faUsers} text={repo.watchers_count} /></Container.Footer_item>
          <Container.Footer_item aria-label='Issues'><IconText icon={faExclamation} text={repo.open_issues} /></Container.Footer_item>
          <Container.Footer_item aria-label='Stars'><IconText icon={faStar} text={repo.stargazers_count} /></Container.Footer_item>
          <Container.Footer_item aria-label='Forks'><IconText icon={faCodeBranch} text={repo.forks_count} /></Container.Footer_item>
        </Container.Footer>
      </Container>
    )
  }
}

Repo.defaultProps = {
  repo: {}
}

Repo.propTypes = {
  repo: PropTypes.object.isRequired
}
