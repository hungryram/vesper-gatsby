import * as React from 'react'
import { Link, graphql } from 'gatsby'
import appearance from '../../data/appearance.json'
import slugify from 'slugify'
import Hero from '../components/home/Hero'
import PropertyCard from '../components/templates/PropertyCard'

const Home = ({ data: { page: pageData, testimonials: testimonialData, agents: agentData, blog: blogData, activeListings: activeListingData } }) => {

  const page = pageData.childMarkdownRemark.frontmatter

  return(

      <>
        <Hero
          slideshow={page.slideshow} 
          slideshowSettings={page.slideshow_settings} 
          videoBackground={page.video_background}
        />
        <div id="home-section">
          { page.home_sections ?
            <>
              {page.home_sections.map((section, i) => {
                if(section.template === 'featured-idx-listings'){
                  return(
                    <div key={i} className="uk-section uk-section-small">
                      <div className="uk-container">
                        <div className="uk-text-center">
                          { section.heading ? <h2 className="uk-text-center">{section.heading}</h2> : null }
                          { section.body ? 
                            <div className="uk-text-center md-content" dangerouslySetInnerHTML={{ __html: section.body }}/>
                          : null }
                        </div>
                      </div>
                    </div>
                  )
                }
                
                if(section.template === 'home-testimonial'){
                  const testimonials = testimonialData.childMarkdownRemark.frontmatter.testimonials
                  return(
                    <div key={i} className="uk-section">
                      <div className="uk-container uk-container-large">           
                        { section.heading ? <h2 className="uk-text-center">{section.heading }</h2> : null }
                        { section.body ?
                            <div className="uk-text-center md-content" dangerouslySetInnerHTML={{ __html: section.body }}/>
                        : null}
                        <div data-uk-slider>
                          <div className="uk-position-relative uk-visible-toggle uk-dark" tabIndex="-1">
                            <ul className="uk-slider-items uk-child-width-1-3@m uk-grid" data-uk-height-match="target: .uk-card">
                              { testimonials ?
                                <>
                                  {testimonials.map((testimonial, i) => {
                                    if(i <= 7){
                                      const testimonialStr = `${testimonial.testimonial.slice(0, 170)}...`
                                      return(
                                        <li key={i}>
                                          <div className="uk-card">
                                            <div className="uk-card-body uk-text-center md-content">
                                              <p>{testimonialStr}<a href="/testimonials" className="uk-text-bold uk-text-italic"
                                                >Read more...</a></p>
                                              <em><strong>&#x2014; {testimonial.name}</strong></em>
                                            </div>
                                          </div>
                                        </li>
                                      )
                                    }
                                  })}
                                </>                      
                              : null }
                            </ul>
                            <a className="uk-position-center-left uk-position-small" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                            <a className="uk-position-center-right uk-position-small" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>
                          </div>
                          <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
                        </div>
                        <div className="uk-margin uk-text-center">
                          <Link to="/testimonials" className="uk-button uk-button-primary">View more</Link>
                        </div>
                      </div>
                    </div>
                  )
                }

                if(section.template === 'home-agent'){
                  const agents = agentData.nodes
                  return(
                    <div key={i} className="uk-section">
                      <div className="uk-container uk-container-large">
                        { section.heading ? <h2 className="uk-text-center">{section.heading}</h2> : null }
                        { section.body ?                    
                          <div className="uk-text-center md-content" dangerouslySetInnerHTML={{ __html: section.body }}/>
                        : null }
                        <div data-uk-slider>
                          <div className="uk-position-relative uk-visible-toggle uk-dark" tabIndex="-1">
                            <ul className="uk-slider-items uk-child-width-1-4@l uk-child-width-1-3@m uk-grid uk-margin-medium-top uk-margin-medium-bottom uk-flex-center" data-uk-height-match="target: .uk-card">
                              {agents ?
                                <>
                                  {agents.map((agentNode, i) => {
                                    const agent = agentNode.markdown.frontmatter
                                      return(
                                        <li key={i}>             
                                          <div className="uk-card uk-card-default" style={{boxShadow:'none'}}>
                                            <Link to={`/our-team/${slugify(agent.title, { lower: true })}`}>
                                              <div className="uk-card-media-top uk-cover-container">
                                                <canvas height="350"/>
                                                { agent.photo ?
                                                  <img src={agent.photo} alt={agent.title} data-uk-cover/>
                                                :
                                                  <img src="https://res.cloudinary.com/hungryram19/image/upload/v1645813823/Resources/realestate-assets/user.jpg" alt="" data-uk-cover/>
                                                }
                                              </div>
                                            </Link>
                                            <div className="uk-card-body uk-card-default uk-text-center">
                                            <Link to={`/our-team/${slugify(agent.title, { lower: true })}`}><h3 className="uk-h4">{agent.title}</h3></Link>
                                              {agent.contact.cell ?
                                                <a href={`tel:${agent.contact.cell}`} className="uk-display-block">{agent.contact.cell}</a>
                                              : null }
                                              {agent.contact.email ?
                                                <a href={`mailto:${agent.contact.email}`} className="uk-display-block">{agent.contact.email}</a>
                                              : null }
                                            </div>
                                          </div>
                                        
                                      </li>
                                      )
                                  })}
                                </>
                              : 
                                <h3>No Agents Found</h3>
                              }
                            </ul>
                            <a className="uk-position-center-left uk-position-small" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                            <a className="uk-position-center-right uk-position-small" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>
                          </div>
                          <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
                        </div>
                        <div className="uk-margin uk-text-center">
                          <Link to="/our-team" className="uk-button uk-button-primary">View more</Link>
                        </div>
                      </div>
                    </div>
                  )
                }

                if(section.template === 'home-blog'){
                  const blogPosts = blogData.nodes
                  return(
                    <div key={i} className="uk-section">
                      <div className="uk-container uk-container-large">
                        { section.heading ? 
                          <h2 className="uk-text-center">{section.heading}</h2> 
                        : null }
                        { section.body ?                    
                          <div className="uk-text-center md-content" dangerouslySetInnerHTML={{ __html: section.body }}/>
                        : null }
                        <div data-uk-grid data-uk-height-match="target: .uk-card">
                          { blogPosts ?
                            <>
                              { blogPosts.map((post, i) => {
                                const summaryStr = `${post.summary.slice(0, 100)}...`
                                return(
                                  <div key={i} className="uk-width-1-2@s">
                                    <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@m uk-margin" data-uk-grid>
                                      <div className="uk-card-media-left uk-cover-container">
                                        {post.featured_image ?
                                          <img src={post.featured_image} alt={post.image_alt_tag} data-uk-cover/>
                                        :
                                          <img src="https://res.cloudinary.com/hungryram19/image/upload/v1645813822/Resources/realestate-assets/no-house-photo.jpg" alt="no photo" data-uk-cover/>
                                        }
                                      </div>
                                      <div>
                                        <div className="uk-card-body">
                                          <h3 className="uk-text-bold uk-h5">{post.title}</h3>
                                          {summaryStr}
                                          <p><Link to={`/blog/${slugify(post.title, { lower: true })}`} className="uk-text-bold uk-text-italic primary-accent">Read more...</Link></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )
                              })}
                            </>
                          : null }
                        </div>
                      </div>
                    </div>
                  )
                }

                if(section.template === 'text-and-image'){
                  return(
                    <div key={i} className="uk-section">
                      <div className="uk-container uk-container-large">
                        <div className={`uk-text-${section.image ? 'left' : 'center'} uk-flex-middle`} data-uk-grid>
                          {section.image ?
                            <div className="uk-width-1-2@s">
                              <div className="uk-card uk-text-center">
                                <img src={section.image} alt={section.image_alt_tag} width={section.image_width}/>
                              </div>
                            </div>
                          : null }

                          <div className="uk-width-expand@s">
                            <div className={`uk-card ${section.image ? '' : 'uk-flex uk-flex-center'}`}>
                              <div className={section.image ? '' : 'uk-width-2xlarge'}>
                                <h2>{section.heading}</h2>
                                <div className="md-content" dangerouslySetInnerHTML={{ __html: section.body }}/>
                                {section.button_link && section.button ?
                                  <a href={section.button_link} className="uk-button uk-button-primary">{section.button}</a>
                                : null }
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }

                if(section.template === 'featured-boxes'){
                  return(
                    <div className="uk-section">
                      <div className="uk-container uk-container-large">
                        { section.heading ?
                        <h2 className="uk-text-center">{section.heading}</h2>
                        : null }
                        {section.body ?
                          <div className="md-content uk-text-center" dangerouslySetInnerHTML={{ __html: section.body}}/>
                        : null }
                        <div className="uk-grid-column-small uk-child-width-1-3@s uk-text-center uk-margin-medium-top" data-uk-grid data-uk-height-match="target: .uk-card">
                          { section.blocks ?
                            <>
                              { section.blocks.map((block) => {
                                return(
                                  <div>
                                    <a href={block.link}>
                                      <div className="uk-inline uk-cover-container" style={{borderRadius:'4px;'}}>
                                        <img src={block.image} alt={block.heading} data-uk-cover/>
                                        <canvas height="400" width="800"/>
                                        <div className="feature-box-overlay uk-position-cover"/>
                                        <div className="uk-overlay uk-position-center uk-light">
                                          <h3>{block.heading}</h3>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                )
                              })}
                            </>
                          : null }
                        </div>
                      </div>
                    </div>
                  )
                }

                if(section.template === 'text-and-contact-form'){
                  return(
                    <div style={{background: `url(${section.background_image}) no-repeat center;padding-top:100px;padding-bottom:100px;background-size:cover;background-blend-mode:overlay;background-color: rgba(0,0,0,.30)`}}>
                      <div className="uk-container uk-container-large">
                        <div className="uk-flex uk-flex-middle" data-uk-grid>
                          <div clasNames="uk-width-1-2@m">
                            <div className="uk-white">
                              {section.heading ?
                                <h2 className="uk-white">{section.heading}</h2>
                              : null }
                              {section.body ?
                                <div className="md-content" dangerouslySetInnerHTML={{ __html: section.body }}/>
                              : null }
                            </div>
                          </div>
                          <div className="uk-width-1-2@m">
                            <div className="text-form">
                              {section.form.heading ?
                                <h2>{section.form.heading }</h2>
                              : null }
                              {section.form.body ?
                                <div className="md-content" dangerouslySetInnerHTML={{ __html: section.form.body }}/>                         
                              : null }
                              <form name="Website Contact Form Widget" method="POST" netlify-honeypot="bot-field" data-netlify="true"
                                className="uk-grid-small" data-uk-grid action="/thank-you">
                                <input name="bot-field" type="hidden" />
                                <input type="hidden" name="Subject" value="Website Contact Form Widget"/>
                                <input name="Source" type="hidden" value="/" />
                                <div className="uk-width-1-2@s">
                                  <input className="uk-input" type="text" placeholder="Name" name="Name"/>
                                </div>
                                <div className="uk-width-1-2@s">
                                  <input className="uk-input" type="text" placeholder="Phone" name="Phone"/>
                                </div>
                                <div className="uk-width-1-1">
                                  <input className="uk-input" type="text" placeholder="Email" name="Email"/>
                                </div>
                                <div className="uk-width-1-1">
                                  <textarea className="uk-textarea" rows="5" placeholder="Your Message" name="Message"/>
                                </div>
                                <div className="uk-width-1-1">
                                  <button className="uk-button uk-button-primary">Send Email</button>
                                </div>
                                { appearance.form.form_disclaimer ?
                                  <div className="uk-width-1-1 md-content" dangerouslySetInnerHTML={{ __html: appearance.form.form_disclaimer }}/>
                                : null } 
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }

                if(section.template === 'active-listings'){
                  const listings = activeListingData.nodes
                  return(
                    <div className="uk-section">
                      <div className="uk-container uk-container-large">
                        <div className="uk-text-center uk-margin-large">
                          { section.heading ? 
                            <h2 className="uk-dark">{section.heading}</h2> 
                          : null }
                          { section.body ?                    
                            <div className="md-content uk-text-center" dangerouslySetInnerHTML={{ __html: section.body }}/>
                          : null }
                        </div>
                        <div className="uk-slider-container-offset" data-uk-slider>
                          <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">
                            <ul className="uk-slider-items uk-child-width-1-3@l uk-child-width-1-2@m uk-grid uk-grid-medium">
                              {listings ?
                                <>
                                  {listings.map((listing, i) => {
                                    return(
                                      <li key={i}>
                                        <Link to={`/listings/${slugify(listing.markdown.frontmatter.title, { lower: true })}`}>
                                          <PropertyCard appearance={appearance} listing={listing} />
                                        </Link>
                                      </li>
                                    )
                                  })}
                                </>
                              : null }
                            </ul>
                            <a className="uk-position-center-left uk-position-small" href="#" data-uk-slidenav-previous
                              data-uk-slider-item="previous"></a>
                            <a className="uk-position-center-right uk-position-small" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>
                          </div>
                          <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
                        </div>
                      </div>
                    </div>
                  )
                }

              })}
            </>
          : null }
        </div>     
      </>
      
    )
}

export const pageQuery = graphql`
  {
    page: file(base: {eq: "_index.md"}, sourceInstanceName: {eq: "main"}){
        id
        childMarkdownRemark {
          frontmatter {
            home_sections {
              _type
              blocks {
                heading
                image
                link
              }
              body
              button
              button_link
              heading
              image
              image_alt_tag
              image_width
              template
            }
            slideshow {
              body
              enable_white_text
              heading
              image
              link
              link_label
              subtitle
            }
            slideshow_settings {
              display_button
              enable_autoplay
              enable_black_text
              enable_default_search
              enable_idx_search
              enable_ken_burns_effect
              slide_animation
            }
            video_background {
              body
              button_label
              button_link
              enable_black_text
              heading
              video_link
            }
          }
        }
    },
    testimonials: file(base: {eq: "testimonials.md"}, sourceInstanceName: {eq: "main"}){
      childMarkdownRemark{
        frontmatter{
          testimonials {
            date
            name
            source
            source_label
            testimonial
          }
        }
      }
    },
    agents: allTeam(limit: 8) {
      nodes{
        ...TeamMarkdown
      }
    },
    blog: allBlog(sort: {fields: frontmatter___date, order: DESC}, limit: 4) {
      nodes{
        ...BlogMarkdown
      }
    },
    activeListings: allListing(filter: {frontmatter: {status: {eq: "Active"}}}, limit: 6) {
      nodes {
        ...ListingMarkdown
      }
    },
  }
`

export default Home;