import React from 'react'
import PropTypes from 'prop-types'

import setTitle from '../../decorators/setTitle'
import transitionRoute from '../../decorators/transitionRoute'
import catchErrors from '../../decorators/catchErrors'

import SlidingCards from '../../components/SlidingCards'
import Repo from '../../components/Repo'

import { Container } from './styled'

@setTitle('John-David Dalton | Repositories')
@transitionRoute()
@catchErrors('Failed to load repositories...')
export default class ReposView extends React.Component {
  static propTypes = {
    repos: PropTypes.array.isRequired
  }

  static defaultProps = {
    repos: []
  }

  getRepos () {
    return this.props.repos
  }

  render () {
    const repos = this.getRepos()

    return (
      <Container>
        <Container.Body>
          {repos.length === 0 &&
            <Container.No_results>This user has no repos...</Container.No_results>
          }
          {repos.length > 0 &&
            <SlidingCards items={repos} contentComponent={Repo} propKey='repo' />
          }
        </Container.Body>
      </Container>
    )
  }
}
