import * as React from 'react'
import { graphql } from 'gatsby'
import { Site } from '../../context'

const LegalTemplate = ({ data }) => {

    const site = React.useContext(Site)

    return(
        <>
        </>
    )
}

export const pageQuery = graphql`
    query($id: String) {
        legal(id: { eq: $id}) {
            ...LegalMarkdown
        }
    }
`

export default LegalTemplate