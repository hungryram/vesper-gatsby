import * as React from 'react'
import { graphql } from 'gatsby'

const HomeValuation = ({ data }) => {
    return(
        <></>
    )
}

export const pageQuery = graphql`
  {
    page: file(base: {eq: "home-valuation.md"}, sourceInstanceName: {eq: "main"}){
        id
    }
  }
`

export default HomeValuation;