import React from 'react'
import PropTypes from 'prop-types'
import {faUsers, faStar, faExclamation, faCodeBranch, faCode} from '@fortawesome/free-solid-svg-icons'

import {Container} from './styled'
import IconText from '../../components/IconText'

export default class Repo extends React.PureComponent {
  static defaultProps = {
    repo: {}
  }

  static propTypes = {
    repo: PropTypes.object.isRequired
  }

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
          <Container.Footer_item><IconText icon={faUsers} text={repo.watchers_count} aria-label='Watchers' title='Watchers' /></Container.Footer_item>
          <Container.Footer_item><IconText icon={faExclamation} text={repo.open_issues} aria-label='Open Issues' title='Open Issues' /></Container.Footer_item>
          <Container.Footer_item><IconText icon={faStar} text={repo.stargazers_count} aria-label='Stars' title='Stars' /></Container.Footer_item>
          <Container.Footer_item><IconText icon={faCodeBranch} text={repo.forks_count} aria-label='Forks' title='Forks' /></Container.Footer_item>
        </Container.Footer>
      </Container>
    )
  }
}
