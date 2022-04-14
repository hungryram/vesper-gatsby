import * as React from 'react'
import { graphql } from 'gatsby'

const Home = ({ data }) => {

    return(
        <>
        
        </>
    )
}

export const pageQuery = graphql`
  {
    page: file(base: {eq: "_index.md"}, sourceInstanceName: {eq: "main"}){
        id
    }
  }
`

export default Home;