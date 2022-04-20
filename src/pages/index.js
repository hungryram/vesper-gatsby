import * as React from 'react'
import { graphql } from 'gatsby'
import { Site } from '../context'

const Home = ({ data }) => {

  const site = React.useContext(Site)

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