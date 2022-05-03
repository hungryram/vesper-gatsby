import * as React from 'react'
import { graphql } from 'gatsby';
import appearance from '../../../data/appearance.json'
import developer from '../../../data/developer.json'
import PageHeader from '../../components/templates/PageHeader';
import BlogList from '../../components/templates/BlogList';

const BlogIndex = ({ data }) => {

    return(
        <>
            <PageHeader data={{page: data.page.childMarkdownRemark.frontmatter, appearance: appearance }} />
            <BlogList posts={data.blog.nodes} size={developer} appearance={appearance} />

        </>
    )
}

export const pageQuery = graphql`
{
    page: file(sourceInstanceName: {eq: "blog"}, base: {eq: "_index.md"}) {
        childMarkdownRemark {
          frontmatter {
            title
            photos {
                gallery {
                    image
                }
            }
            search_engine_optimization {
              title_tag
              meta_description
            }
          }
        }
      },
    blog: allBlog(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
            slug
            frontmatter {
                title
                date(formatString: "MMMM Do, YYYY")
                featured_image
            }
            childMarkdownRemark{
                excerpt
            }
        }
    }
}
`

export default BlogIndex;