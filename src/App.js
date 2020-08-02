import React, { Component } from 'react'

import Header from './components/Header'
import Content from './components/Content'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      locale: 'zh-TW'
    }
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Header locale={this.state.locale} />
        <Content locale={this.state.locale} />
      </div>
    )
  }
}

export default App;
