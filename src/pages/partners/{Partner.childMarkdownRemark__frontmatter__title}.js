import * as React from 'react'
import { graphql } from 'gatsby'

const PartnerTemplate = ({ data }) => {

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