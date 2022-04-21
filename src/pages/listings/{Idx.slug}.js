import * as React from 'react'
import { graphql } from 'gatsby'

const IdxTemplate = ({ data }) => {

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