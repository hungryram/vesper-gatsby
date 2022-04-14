import * as React from 'react'
import { graphql } from 'gatsby'
import { useSiteData } from '../../hooks'

const IdxTemplate = ({ data }) => {

    const site = useSiteData()

    console.log(site, data)

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