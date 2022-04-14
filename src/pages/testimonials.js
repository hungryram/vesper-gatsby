import * as React from 'react'
import { graphql } from 'gatsby'

const Testimonials = ({ data }) => {
    return(
        <></>
    )
}

export const pageQuery = graphql`
  {
    page: file(base: {eq: "testimonials.md"}, sourceInstanceName: {eq: "main"}){
        id
    }
  }
`

export default Testimonials;