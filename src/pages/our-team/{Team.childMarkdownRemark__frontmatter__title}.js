import * as React from 'react'
import { graphql } from 'gatsby'
import { useSiteData } from '../../hooks'

const TeamTemplate = ({ data }) => {

    const site = useSiteData()

    console.log(site, data)

    return(
        <>
        </>
    )
}

export const pageQuery = graphql`
    query($id: String) {
        team(id: { eq: $id}) {
            ...TeamMarkdown
        }
    }
`

export default TeamTemplate