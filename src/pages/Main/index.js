import React, { Component } from 'react'

import logo from '../../assets/logo.png'
import { Container, Form } from './styles'
import CompareList from '../../components/CompareList'
import api from '../../services/api'

export default class Home extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
  }

  handleAddRepository = async (e) => {
    e.preventDefault()

    try {
      const response = await api.get(`/repos/${this.state.repositoryInput}`)
      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, response.data],
      })
    } catch (err) {
      global.console.log(err)
    }
  }

  render() {
    const { repositoryInput, repositories } = this.state
    return (
      <Container>
        <img src={logo} alt="GitHub Compare" />

        <Form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="user/repository"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">OK</button>
        </Form>

        <CompareList repositories={repositories} />
      </Container>
    )
  }
}
