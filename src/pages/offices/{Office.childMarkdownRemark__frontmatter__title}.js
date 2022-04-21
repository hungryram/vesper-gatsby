import * as React from 'react'
import { graphql } from 'gatsby'
import { Site } from '../../context'

const OfficeTemplate = ({ data }) => {

    const site = React.useContext(Site)

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