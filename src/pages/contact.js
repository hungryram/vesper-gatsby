import * as React from 'react'
import { graphql } from 'gatsby'

const Contact = ({ data }) => {
    return(
        <></>
    )
}

export const pageQuery = graphql`
  {
    page: file(base: {eq: "contact.md"}, sourceInstanceName: {eq: "main"}){
        id
      }
  }
`

export default Contact;