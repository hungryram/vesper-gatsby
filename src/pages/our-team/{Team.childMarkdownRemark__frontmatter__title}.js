import * as React from 'react'
import { graphql } from 'gatsby'
import { Site } from '../../context'

const TeamTemplate = ({ data }) => {

    const site = React.useContext(Site)

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