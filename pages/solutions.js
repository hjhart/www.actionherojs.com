import React from 'react'
import Page from './../components/layouts/page.js'
import SolutionsGrid from './../components/solutionsGrid.js'

export default class SolutionsPage extends React.Component {
  render () {
    return (
      <Page>
        <SolutionsGrid />
      </Page>
    )
  }
}
