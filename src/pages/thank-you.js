import * as React from 'react'
import { graphql } from 'gatsby'

const ThankYou = ({ data }) => {
    return(
        <></>
    )
}

export const pageQuery = graphql`
  {
    page: file(base: {eq: "thank-you.md"}, sourceInstanceName: {eq: "main"}){
        id
    }
  }
`

export default ThankYou;