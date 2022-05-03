import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import appearance from '../../../data/appearance.json'
import PageHeader from '../../components/templates/PageHeader'
import PropertyCard from '../../components/templates/PropertyCard'

const ListingIndex = () => {

    const data = useStaticQuery(graphql`
        {
          page: file(sourceInstanceName: {eq: "listings"}, base: {eq: "_index.md"}) {
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
          idxListings: allIdx {
              nodes {
                  ...IdxData
                  fields {
                      featuredImage {
                          childImageSharp {
                              gatsbyImageData
                          }
                      }
                  }
              }
          },
          userListings: allListing {
              nodes {
                ...ListingMarkdown
                slug
                featuredImage {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
              }
          }    
        }
    `)

    const listings = data.userListings.nodes.concat(data.idxListings.nodes)

    return(
        <>
            <PageHeader data={{page: data.page.childMarkdownRemark.frontmatter, appearance: appearance }} />
            <div className="uk-section uk-section-small" style={{paddingBottom: '0'}}>
                <div className="uk-container">
                    <div className="editable md-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat tempore ullam? Eveniet tempora ad rem. Accusantium odio soluta consectetur vero, fuga nulla deleniti obcaecati neque qui, nesciunt aut omnis.</p>
                    </div>
                </div>
            </div>
            <div className="uk-section">
                <div 
                    className="uk-container uk-container-xlarge"
                    data-uk-scrollspy="cls: uk-animation-slide-bottom-small; target: .uk-card;"
                >
                    <div data-uk-filter={`target: .js-filter;animation: ${appearance.search_field?.filter_animation}`}>
                        <ul className="js-filter uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center" data-uk-grid>
                            {listings ?
                                <>
                                    { listings.map((listing, i) => {
                                        if(listing._type === 'IDX'){
                                            return(
                                                <li 
                                                    key={i}
                                                    className="listing-result" 
                                                    data-city={listing.cities}
                                                    data-states={listing.states}
                                                    data-properties={listing.properties}
                                                    data-price={`${listing.price}`}
                                                    data-featured={listing.featured}
                                                >
                                                <Link to={`/listings/${listing.slug}`}>
                                                    <PropertyCard
                                                        listing={listing}
                                                        appearance={appearance}
                                                        image={listing.fields.featuredImage.childImageSharp.gatsbyImageData}
                                                    />
                                                </Link>
                                            </li>
                                            )
                                        }
                                        else{
                                            return(
                                            <li 
                                                key={i}
                                                className="listing-result" 
                                                data-city={listing.markdown.frontmatter.cities}
                                                data-states={listing.markdown.frontmatter.states}
                                                data-properties={listing.markdown.frontmatter.properties}
                                                data-price={listing.markdown.frontmatter.price}
                                                data-featured={listing.markdown.frontmatter.featured}
                                            >
                                            <Link to={`/listings${listing.slug}`}>
                                                <PropertyCard
                                                    image={listing.featuredImage.childImageSharp.gatsbyImageData}
                                                    listing={listing.markdown.frontmatter}
                                                    appearance={appearance}
                                                />
                                            </Link>
                                        </li>
                                            )
                                        }

                                    })}                   
                                </>
                            :
                                <div className="inner-container">
                                    <h2>No listing has been added</h2>
                                </div>
                            }

                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ListingIndex;