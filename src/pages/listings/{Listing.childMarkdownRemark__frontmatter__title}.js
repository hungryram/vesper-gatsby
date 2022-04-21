import * as React from 'react'
import { graphql } from 'gatsby'
import { Site } from '../../context'

const ListingTemplate = ({ data }) => {

    const site = React.useContext(Site)

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