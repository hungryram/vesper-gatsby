import * as React from 'react'
import { graphql } from 'gatsby'

const TeamTemplate = ({ data }) => {

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