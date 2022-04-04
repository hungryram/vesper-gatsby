import React from "react"
import { graphql } from "gatsby"
import BlogList from '../../templates/blog/blogList'
import BlogPost from '../../templates/blog/blogPost'

const Blog = ({ data }) => {

  const blogPostList = data.allMarkdownRemark.edges
  const { frontmatter, html } = data.markdownRemark;

  if(frontmatter.slug === 'index'){
    return(
      <BlogList posts={blogPostList} />
    )
  }
  else{
    return(
      <BlogPost 
        author={frontmatter.author}
        categories={frontmatter.categories}
        date={frontmatter.date}
        featuredImage={frontmatter.featured_image}
        imageAltTag={frontmatter.image_alt_tag}
        isPost={frontmatter.is_post}
        metaDescription={frontmatter.meta_description}
        slug={frontmatter.slug}
        tags={frontmatter.tags}
        title={frontmatter.title}
        titleTag={frontmatter.title_tag}
        postContent={html}
      />
    )
  }

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
    allMarkdownRemark {
      edges {
        node {
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
        }
      }
    }
  }
`;

export default Blog