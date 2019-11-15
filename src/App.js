import React, { Component } from 'react'
import './App.css'
import { getUser, getBranches } from './api/github'

const renderLine = (user, key) => <li key={key}><b>{key}</b>: {user[key]}</li>
const renderBranches = (branch, key) => <li key={key}><b>{key}</b>: {branch.name}</li>

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { user: {}, branches: {} }
  }

  componentDidMount () {
    getUser('jordiponsllaurado').then(data => {
      this.setState({ user: data.entity })
    })
    getBranches('jordiponsllaurado', 'github_api_test').then(data => {
      this.setState({ branches: data.entity })
    })
  }

  render () {
    const { user, branches } = this.state
    return (
      <div className='App'>
        <div className='User Info'>
          <h1>USER Info</h1>
          <ul style={{ listStyle: 'none' }}>
            {
              Object.keys(user).map(key => renderLine(user, key))
            }
          </ul>
        </div>
        <div>
          <h1>Repo Branches</h1>
          <ul style={{ listStyle: 'none' }}>
            {
              Object.keys(branches).map(key => renderBranches(branches[key], key))
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default App
