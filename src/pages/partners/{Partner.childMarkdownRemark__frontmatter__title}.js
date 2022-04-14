import * as React from 'react'
import { graphql } from 'gatsby'
import { useSiteData } from '../../hooks'

const PartnerTemplate = ({ data }) => {

    const site = useSiteData()

    console.log(site, data)

    return(
        <>
        </>
    )
}

export const pageQuery = graphql`
    query($id: String) {
        partner(id: { eq: $id}) {
            ...PartnerMarkdown
        }
    }
`

export default PartnerTemplate