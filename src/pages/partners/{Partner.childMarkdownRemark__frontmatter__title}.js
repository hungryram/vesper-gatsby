import * as React from 'react'
import { graphql } from 'gatsby'
import { Site } from '../../context'

const PartnerTemplate = ({ data }) => {

    const site = React.useContext(Site)

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