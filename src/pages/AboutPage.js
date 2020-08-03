import React from 'react'

import Page from '../components/Page'

const AboutPage = (props) => {
  const {
    locale
  } = props

  return (
    <Page
      locale={locale}
      title="About"
    >
      About
    </Page>
  )
}

export default AboutPage