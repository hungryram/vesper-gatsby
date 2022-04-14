import * as React from 'react'
import { graphql } from 'gatsby'
import { useSiteData } from '../../hooks'

const OfficeTemplate = ({ data }) => {

    const site = useSiteData()

    console.log(site, data)

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