import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import appearance from '../../../data/appearance.json'

const PageSidebar = () => {

    const data = useStaticQuery(graphql`
      {
         blog: allBlog(sort: {fields: frontmatter___date, order: DESC}, limit: 4) {
             nodes {
                 slug
                 frontmatter {
                     title
                     date(formatString: "MMMM Do, YYYY")
                 }
             }
         },
         listings: allListing {
             nodes {
                 slug
                 frontmatter {
                     title
                     status
                     price
                     featured
                     short_title
                     cities
                     states
                     zip_codes
                     photos{
                         gallery{
                             image
                         }
                     }
                 }
             }
         },
      }
    `)

    const buttonColor = appearance.colors

    return(
        <div class="uk-width-expand">
            <div class="uk-card uk-card-body">
                {appearance.page_sidebar.sidebar ?
                    appearance.page_sidebar.sidebar.map((item) => {
                        if(item.template === 'side-blog-category') {
                            return(
                                <div>
                                    {/*<h2 className="uk-h4 uk-text-bold">Blog Categories</h2>
                                    <ul data-uk-accordion>
                                        {{ range $name, $taxonomy := $.Site.Taxonomies.categories }}
                                        <li className="uk-open">
                                            <a className="uk-accordion-title" href="#">View all categories</a>
                                            <div className="uk-accordion-content">
                                                <span data-uk-icon="triangle-right"></span><a href="/categories{{ $name | urlize | relURL }}" className="uk-margin-small-left primary-link">{{ $name | humanize }}</a>
                                            </div>
                                        </li>
                                        {{else}}
                                        <p>No blog categories just yet</p>
                                        {{ end }}
                                    </ul>*/}
                                </div>
                            )
                        }
                        if(item.template === 'latest-posts'){
                            return(
                                <div>
                                    <h2 className="uk-h4 uk-text-bold">Latest Posts</h2>
                                    {data.blog.nodes ?
                                        data.blog.nodes.map((post, i) => {
                                            return(
                                                <>                          
                                                    <div key={i} className="uk-card uk-margin-small-bottom">
                                                        <Link to={`/blog${post.slug}`}>
                                                            <h3 className="uk-h5" style={{margin: 0}}>{post.frontmatter.title}</h3>
                                                        </Link>
                                                        <time><small>{post.frontmatter.date}</small></time>
                                                        <Link to={`/blog${post.slug}`} className="uk-display-block primary-link">Read more</Link>
                                                    </div>        
                                                    <hr/>
                                                </>
                                            )
                                        })
                                    : null }                          
                                </div>
                            )
                        }
                        if(item.template === 'custom-text'){
                            return(
                                <div className="md-content">
                                    {item.body}
                                </div>
                            )
                        }
                        if(item.template === 'custom-code'){
                            return(
                                <div>
                                    {item.textarea}
                                </div>
                            )
                        }
                        if(item.template === 'sidebar-listings'){
                            return(
                                <>
                                <h2 className="uk-h4 uk-text-bold">{item.heading}</h2>
                                    <div className="uk-card uk-card-default uk-margin-small-top">
                                        <div className="uk-position-relative uk-visible-toggle uk-light property-card" tabIndex="-1" data-uk-slideshow="min-height: 300;animation: push">          
                                            <ul className="uk-slideshow-items">
                                                { data.listings.nodes ?
                                                    data.listings.nodes.map((listing, i) => {
                                                        return(
                                                            <li key={i}>
                                                                <Link to={`/listings${listing.slug}`}>
                                                                    <div className="uk-card uk-card-default property-card">
                                                                        <div className="uk-card-media-top">
                                                                            <div className="uk-cover-container">
                                                                                <canvas height="300"></canvas>
                                                                                {listing.frontmatter.photos ?
                                                                                    <img 
                                                                                        src={listing.frontmatter.photos.gallery[0].image}
                                                                                        alt={listing.frontmatter.title}
                                                                                        data-uk-cover
                                                                                    />
                                                                                :
                                                                                    <img 
                                                                                        src="https://res.cloudinary.com/hungryram19/image/upload/v1645813822/Resources/realestate-assets/no-house-photo.jpg" 
                                                                                        alt="no house" 
                                                                                        data-uk-cover
                                                                                    />
                                                                                }

                                                                                <div className="property-card-overlay uk-position-cover"/>
                                                                                <div className="uk-position-absolute property-card-details">
                                                                                    <div className="uk-text-center uk-light" data-uk-grid>
                                                                                        <div className="uk-width-1-2">
                                                                                            <div className="uk-card uk-text-left">
                                                                                                {listing.frontmatter.status ?
                                                                                                    <span 
                                                                                                        className="status uk-badge"
                                                                                                        style={listing.frontmatter.status === 'Sold' ? {background: '#d10000'} : {background: buttonColor.button_background_color, color: buttonColor.button_text_color}}
                                                                                                    >
                                                                                                        {listing.frontmatter.status}
                                                                                                    </span>
                                                                                                : null }
                                                                                                {listing.frontmatter.featured ?
                                                                                                    <span className="featured uk-badge">{listing.frontmatter.featured}</span>
                                                                                                : null }
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="uk-width-1-2">
                                                                                            <div className="uk-card uk-text-right">
                                                                                                <span className="price-badge">
                                                                                                    {listing.frontmatter.price}
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="uk-position-absolute property-card-address uk-text-left">
                                                                                    <div className="uk-white">
                                                                                        <h4 className="uk-white">{listing.frontmatter.short_title}</h4>
                                                                                        <span className="grid-address uk-display-block">{listing.frontmatter.title}</span>
                                                                                        <span className="grid-address uk-display-block">{listing.frontmatter.cities}, {listing.frontmatter.states} {listing.frontmatter.zip_codes}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                        )
                                                    })
                                                : null }
                                            </ul>                                    
                                            <a className="uk-position-center-left uk-position-small" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></a>
                                            <a className="uk-position-center-right uk-position-small" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"></a>            
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    })
                : null }
            </div>
        </div>
    )
}

export default PageSidebar