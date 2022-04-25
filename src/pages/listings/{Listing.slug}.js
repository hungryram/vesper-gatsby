import * as React from 'react'
import { graphql } from 'gatsby'

const ListingTemplate = ({ data }) => {

    return(
        <>
        </>
    )
}

export const pageQuery = graphql`
    query($id: String) {
        listing(id: { eq: $id}) {
            ...ListingMarkdown
        }
    }
`

export default ListingTemplate