import * as React from 'react'
import { graphql } from 'gatsby'
import { useSiteData } from '../../hooks'

const ListingTemplate = ({ data }) => {

    const site = useSiteData()

    console.log(site, data)

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