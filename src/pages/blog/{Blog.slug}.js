import * as React from 'react'
import { Link, graphql } from 'gatsby'
import appearance from '../../../data/appearance.json'
import developer from '../../../data/developer.json'
import PageHeader from '../../components/templates/PageHeader'
import Share from '../../components/templates/Share'
import PageSidebar from '../../components/templates/PageSidebar'

const BlogTemplate = ({ data }) => {

    const isBrowser = typeof window !== "undefined"

    let url;
    if(isBrowser){
        url = window.location.href
    }

    return(
        <>
            <PageHeader data={{page: data.blog.markdown.frontmatter, appearance: appearance}} />     
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <div className="uk-grid-small" data-uk-grid>
                        <div className={`uk-width-${developer.column_size}`}>
                            {data.blog.markdown.frontmatter.featured_image ?
                                <div className="uk-margin-medium">
                                    <img src={data.blog.markdown.frontmatter.featured_image} alt={data.blog.markdown.frontmatter.image_alt_tag} />
                                </div>       
                            : null }
                            <div className="md-content" dangerouslySetInnerHTML={{ __html: data.blog.markdown.html}}/>
                            <hr/>
                            { data.categories.nodes ?
                                <ul className="uk-list md-content">
                                    <h2 className="uk-h5 hr-text-medium-bold">Categories</h2>
                                    {data.categories.nodes.map((category, i) => {
                                        return(
                                            <li key={i}>
                                                <Link to={`/categories/${category.slug}/`} className="uk-text-link">{category.category}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            : null }
                            { data.tags ?
                                <ul className="uk-list md-content">
                                    <h2 className="uk-h5 hr-text-medium-bold">Tags</h2>
                                    {data.tags.nodes.map((tag, i) => {
                                        return(
                                            <li key={i}>
                                                <Link to={`/tags/${tag.slug}/`} className="uk-text-link">{tag.tag}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            : null }
                            <div className="uk-margin-medium-top">
                                <Share
                                    url={url}
                                    title={data.blog.markdown.frontmatter.title}
                                    summary={data.blog.childMarkdownRemark.excerpt}
                                    image={data.blog.markdown.frontmatter.featured_image}
                                />
                            </div>
                        </div> 
                        <PageSidebar/>
                    </div>
                </div>
            </div>
        </>
    )
}

export const pageQuery = graphql`
    query($id: String) {
        blog(id: { eq: $id}) {
            ...BlogMarkdown
            childMarkdownRemark{
                excerpt
            }
        },
        categories: allCategory {
            nodes{
                category
                slug
            }
        },
        tags: allTag {
            nodes {
                tag
                slug
            }
        }
    }
`

export default BlogTemplate