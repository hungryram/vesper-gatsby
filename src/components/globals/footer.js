import * as React from 'react'
import { Site } from '../../context'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Social from '../templates/social'
import Contact from '../templates/contact'

const Footer = () => {

    const site = React.useContext(Site)

    const profile = site.profile
    const companyName = profile.company_name
    const footer = site.footer 
    const footerContact = profile.contact_information 
    const date = new Date 

    const legalPages = useStaticQuery(graphql`
      {
        allSitePage(filter: {path: {glob: "/legal/*"}}) {
          nodes {
            path
            pageContext
          }
        }
      }
    `)

    return(
        
            <footer 
                className="footer" 
                style={footer.background_image ? 
                {background:`url(${footer.background_image}) no-repeat center`,
                backgroundSize:'cover',
                backgroundBlendMode:'overlay',
                backgroundColor: 'rgba(0,0,0,0.9)'}
                : {background: footer.footer_background_color}}
            >

                <div className="uk-section">
                    <div className="uk-container uk-container-large">
                        <a href="cloudcannon:collections/data/footer.yml" className="editor-link editor-content"><span data-uk-icon="icon: file-edit"></span> Edit Footer</a>
                        <div className={`uk-grid-large uk-child-width-1-4@m uk-child-width-1-2@s ${footer.enable_black_text ? 'uk-dark' : 'uk-light'}`} data-uk-grid>
                            <div>
                                {footer.logo ?
                                    <img src={footer.logo} alt={companyName} width={footer.logo_width} />
                                :
                                    <h2 className="uk-h5 uk-text-bold editable">
                                        Real Estate Team
                                    </h2>
                                }
                                <ul className="uk-list">
                                    {footerContact.name ?
                                        <li><p>{footerContact.name}</p></li>
                                    : null}
                                    {footerContact.license ?
                                        <li><p>{footerContact.license}</p></li>
                                    : null}
                                </ul>
                                <div className="accent">
                                    <Social/>
                                </div>
                            </div>
                            <div>
                                <h2 className="uk-h5 uk-text-bold editable">
                                    Contact
                                </h2>
                                <ul className="uk-list">
                                    <Contact/>
                                </ul>
                            </div>
                            <div>
                                <h2 className="uk-h5 uk-text-bold editable">
                                    Quick Links
                                </h2>
                                <ul className="uk-list">
                                    {footer.additional_links ?
                                        <>
                                            {footer.additional_links.map((link, i) => {
                                                return(
                                                    <li key={i}><a href={link.link}>{link.name}</a></li>
                                                )
                                            })}
                                        </>
                                    : null}           
                                </ul>           
                            </div> 
                            <div>
                                <div className="footer-text">
                                    <h2 className="uk-h5 uk-text-bold editable">
                                        About
                                    </h2>
                                    <p className="editable">
                                        Customizable footer allows you to visually edit the footer content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>

                <div className={`uk-container ${footer.enable_black_text ? 'uk-dark' : 'uk-light'}`}>
                    <div className="uk-grid">
                        <div className="uk-width-1-1 uk-text-center">                
                            <ul className="uk-list">
                                {footer.important_documents ?
                                    <>
                                        {footer.important_documents.map((item, i) => {
                                            return(
                                                <li key={i}><a href={item.document} target="_blank" className="uk-text-bold">{item.name}</a></li>
                                            )
                                        })}
                                    </>
                                : null}
                                <li>
                                    <small data-cms-options='{"image": false}' class="editable">
                                        The data and information contained within this website are for informational purposes. We try our best to keep all information up-to-date but encourage visitors to do their own research to determine the accuracy of material available on this website. While we strive to keep the information accurate, we do not warrant the accuracy or completeness of the information, text, graphics, links, or other items contained within these materials. Please visit our full disclaimer for more information.
                                    </small>
                                </li>
                                <li>
                                    <small className="uk-white">&copy; Copyright {date.getFullYear()}, {profile.company_name}  {footer.remove_Credit ? null : <>&middot; <a href="https://www.hungryram.com/services/agent-idx-websites/" target="_blank" className="uk-text-bold" rel="nofollow">Real Estate Website</a> Powered by <a href="https://www.hungryram.com">Hungry Ram Web Design</a></>}</small></li>
                                    {footer.equal_housing_logo ?
                                        <li className="uk-display-inline-block uk-margin-small-right">
                                            <img src="https://res.cloudinary.com/hungryram19/image/upload/v1628532562/Resources/equal-housing-opportunity-transparent_jdomdn.png" alt="equal housing opportunity logo" width="30" />
                                        </li>
                                    : null }
                                    {footer.mls_logo ?
                                        <li className="uk-display-inline-block uk-margin-small-right">
                                            <img src="https://res.cloudinary.com/hungryram19/image/upload/v1628532562/Resources/mls-logo_bpy61v.png" alt="mls logo" width="80" />
                                        </li>
                                    : null }
                                    {footer.realtor_logo ?
                                        <li className="uk-display-inline-block uk-margin-small-right">
                                            <img src="https://res.cloudinary.com/hungryram19/image/upload/v1628532562/Resources/REALTOR-mark_qhm0id.png" alt="REALTOR® logo" width="40" />
                                        </li>
                                    : null }
                            </ul>
                        </div>
                    </div>
                    <div className="uk-grid uk-padding-small">
                        <div className="uk-width-1-1">
                            <ul className="hr-legals uk-padding-remove uk-text-center">
                                {legalPages ?
                                    <>
                                        {legalPages.allSitePage.nodes.map((page, i) => {
                                            return(
                                                <li key={i} className="uk-display-inline uk-margin-medium-right">
                                                    <small>
                                                        <Link to={page.path}>{page.pageContext.childMarkdownRemark__frontmatter__title}</Link>
                                                    </small>
                                                </li>
                                            )
                                        })}
                                    </>
                                : null }
                                <li className="uk-display-inline uk-margin-medium-right">
                                    <small>
                                        <a href="/sitemap">Sitemap</a>
                                    </small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            
    )
}

export default Footer