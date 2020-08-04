import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './components/Header'
import Content from './components/Content'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      locale: 'zh-TW'
    }
    this.handleChangeLocale = this.handleChangeLocale.bind(this)
  }

  handleChangeLocale(locale) {
    this.setState({ locale: locale })
  }

  render() {
    return (
      <div>
        <Header
          locale={this.state.locale}
          onChangeLocale={this.handleChangeLocale}
        />
        <Content locale={this.state.locale} />
      </div>
    )
  }
}

export default connect()(App)
