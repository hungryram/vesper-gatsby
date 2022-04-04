import React from "react"
import { graphql } from "gatsby"

const OfficesTemplate = ({ data }) => {

  const { frontmatter, html } = data.markdownRemark;

  return(
    <>
      {/* Offices Template */}
    </>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        author
        categories
        date
        draft
        featured_image
        image_alt_tag
        is_post
        meta_description
        slug
        tags
        title
        title_tag
      }
      html
    }
  }
`;

export default OfficesTemplate