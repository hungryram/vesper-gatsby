import * as React from 'react'
import { graphql } from 'gatsby'
import { useSiteData } from '../../hooks'

const LegalTemplate = ({ data }) => {

    const site = useSiteData()

    console.log(site, data)

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