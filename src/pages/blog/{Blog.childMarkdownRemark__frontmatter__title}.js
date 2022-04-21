import * as React from 'react'
import { graphql } from 'gatsby'
import { Site } from '../../context'

const BlogTemplate = ({ data }) => {

    const site = React.useContext(Site)

    return(
        <>
        </>
    )
}

export const pageQuery = graphql`
    query($id: String) {
        blog(id: { eq: $id}) {
            ...BlogMarkdown
        }
    }
`

export default BlogTemplate