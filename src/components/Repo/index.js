import React from 'react'
import PropTypes from 'prop-types'
import {faUsers, faStar, faExclamation, faCodeBranch, faCode} from '@fortawesome/free-solid-svg-icons'

import IconText from '../../components/IconText'

import {Container, Count} from './styled'

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
        {repo.description &&        
          <Container.Body>
            <p>{repo.description}</p>
          </Container.Body>
        }
        <Container.Footer>
          <Container.Footer_item>
            <Count>
              <Count.Number>{repo.watchers_count}</Count.Number>
              <Count.Icon icon={faUsers} aria-label='Watchers' title='Watchers' />
              <Count.Repo_name>Watchers</Count.Repo_name>
            </Count>
          </Container.Footer_item>
          <Container.Footer_item>
            <Count>
              <Count.Number>{repo.open_issues}</Count.Number>
              <Count.Icon icon={faExclamation} aria-label='Open Issues' title='Open Issues' />
              <Count.Repo_name>Open Issues</Count.Repo_name>
            </Count>
          </Container.Footer_item>
          <Container.Footer_item>
            <Count>
              <Count.Number>{repo.stargazers_count}</Count.Number>
              <Count.Icon icon={faStar} aria-label='Stars' title='Stars' />
              <Count.Repo_name>Stars</Count.Repo_name>
            </Count>
          </Container.Footer_item>
          <Container.Footer_item>
            <Count>
              <Count.Number>{repo.forks_count}</Count.Number>
              <Count.Icon icon={faCodeBranch} aria-label='Forks' title='Forks' />
              <Count.Repo_name>Forks</Count.Repo_name>
            </Count>
          </Container.Footer_item>
        </Container.Footer>
      </Container>
    )
  }
}
