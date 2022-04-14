import * as React from 'react'
import { graphql } from 'gatsby'
import { useSiteData } from '../../hooks'

const BlogTemplate = ({ data }) => {

    const site = useSiteData()

    console.log(site, data)

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