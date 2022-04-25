import * as React from 'react'
import { graphql } from 'gatsby'

const LegalTemplate = ({ data }) => {

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