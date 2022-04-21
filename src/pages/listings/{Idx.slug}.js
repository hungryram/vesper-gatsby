import * as React from 'react'
import { graphql } from 'gatsby'
import { Site } from '../../context'

const IdxTemplate = ({ data }) => {

    const site = React.useContext(Site)

    return(
        <>
        </>
    )
}

export const pageQuery = graphql`
    query($id: String) {
        idx(id: { eq: $id}) {
            id
        }
    }
`

export default IdxTemplate