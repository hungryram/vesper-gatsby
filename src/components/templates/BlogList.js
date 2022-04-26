import * as React from 'react'
import { Link } from 'gatsby'
import PageSidebar from './PageSidebar'

const BlogList = ({ posts, size, appearance }) => {

    return(

        <div className="uk-section">
            <div className="uk-container uk-container-large">
                <div className="uk-grid-small" data-uk-grid>
                    <div className={`uk-width-${size.column_size}`}>
                        { posts ?
                            <>
                                { posts.map((post, i) => {               
                                    return(

                                        <div key={i} className="uk-child-width-3-4@s">
                                            <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-3@s uk-margin" data-uk-grid>
                                                <div className="uk-card-media-left uk-cover-container">
                                                    { post.frontmatter.featured_image ?
                                                        <>
                                                            <img src={post.frontmatter.featured_image} alt={post.frontmatter.image_alt_tag} data-uk-cover />
                                                            <canvas height="300"></canvas>
                                                        </>
                                                    : 
                                                        <img src="https://res.cloudinary.com/hungryram19/image/upload/v1645813822/Resources/realestate-assets/no-house-photo.jpg" alt="no photo" data-uk-cover />
                                                    }
                                                </div>

                                                <div className="uk-width-expand@s">
                                                    <div className="uk-card-body">
                                                        <h2 className="uk-card-title">{post.frontmatter.title}</h2>
                                                        <time className="is-size-7"> {post.frontmatter.date}</time>
                                                        <div className="summary">
                                                            <p>{post.childMarkdownRemark.excerpt}</p>
                                                        </div>
                                                        <Link to={`/blog${post.slug}`} className="uk-text-bold uk-text-italic primary-accent">Read more...</Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })}
                            </>
                        :
                            <div>
                                <div className="inner-container">
                                    <h4>No blog added yet</h4>
                                    <p>Check back later for updated information.</p>
                                </div>
                            </div>
                        }

                        {/* add pagination */}
        
                    </div>

                    <PageSidebar/>

                </div>
            </div>
        </div>
    )
}

export default BlogList