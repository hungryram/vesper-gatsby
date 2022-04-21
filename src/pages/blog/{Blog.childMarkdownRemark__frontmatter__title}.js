import * as React from 'react'
import { graphql } from 'gatsby'

const BlogTemplate = ({ data }) => {

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