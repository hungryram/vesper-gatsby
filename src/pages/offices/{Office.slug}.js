import * as React from 'react'
import { graphql } from 'gatsby'

const OfficeTemplate = ({ data }) => {

    return(
        <>
        </>
    )
}

export const pageQuery = graphql`
    query($id: String) {
        office(id: { eq: $id}) {
            ...OfficeMarkdown
        }
    }
`

export default OfficeTemplate