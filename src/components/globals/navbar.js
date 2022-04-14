import * as React from 'react'
import { Link } from 'gatsby'
import { useSiteData } from '../../hooks'

const Navbar = () => {

const { appearance, profile, menu: menuObj } = useSiteData()

const navbar = appearance.data.branding
const navColor = appearance.data.header 
const navContact = profile.data.contact_information 
const headerSocial = profile.data.social_media 
const menu = menuObj.data
const mainMenu = menu.main_menu

    return(

        <>

            <div 
                className="uk-visible@m"
                data-uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky uk-dark; cls-inactive: uk-navbar-transparent; top: 200"
                style={navColor.transparent_background ? {background: 'transparent'} : {background: navColor.header_background_color}}
            >
                <div 
                    className={`top-navbar ${navColor.enable_white_text_top ? 'uk-light' : 'uk-dark'}`} 
                    style={navColor.top_header_color ? {background: navColor.top_header_color} : {background: 'transparent'}}
                >
                    <nav className="uk-container uk-container-large" data-uk-navbar>
                        <div className="uk-navbar-right uk-flex-right">
                            <ul className="uk-navbar-nav top-bar">
                                {navContact.cell ?
                                    <li>
                                        <a href={`tel:${navContact.cell}`}>
                                            <span className="uk-text-bold uk-margin-small-right">Direct:</span> 
                                            {navContact.cell}
                                        </a>
                                    </li>
                                : null }
                                {navContact.phone ?
                                    <li>
                                        <a href={`tel:${navContact.cell}`}>
                                            <span className="uk-text-bold uk-margin-small-right">Office:</span> 
                                            {navContact.phone}
                                        </a>
                                    </li>
                                : null }
                                {navContact.email ?
                                    <li>
                                        <a href={`tel:${navContact.cell}`}>
                                            <span className="uk-text-bold uk-margin-small-right">Email:</span> 
                                            {navContact.email}
                                        </a>
                                    </li>
                                : null }
                            </ul>
                        </div>
                    </nav>        
                </div>
                <nav 
                    className={`main-nav uk-navbar-container uk-navbar-transparent uk-padding-small ${navColor.enable_white_text ? 'uk-light' : 'uk-dark'}`}
                >
                    <div className="uk-navbar-left">
                        <Link to="/">
                            {navbar.logo || navbar.dark_logo ?
                                <>      
                                    {navColor.transparent_background ?
                                        <img
                                            src={navbar.dark_logo} 
                                            alt={`${profile.company_name} logo`}
                                            style={{width: navbar.logo_width}}
                                            className="dark-logo"
                                        />
                                    :
                                        <img
                                            src={navbar.logo} 
                                            alt={`${profile.company_name} logo`}
                                            style={{width: navbar.logo_width}}
                                            className="white-logo"
                                        />
                                    }
                                </>
                                
                            :
                                <>      
                                    {navColor.transparent_background ?
                                        <h2 className="uk-h3 uk-margin-remove site-title dark-logo">
                                            {navbar.site_title}
                                        </h2>
                                    :
                                        <h2 className="uk-h3 uk-margin-remove site-title white-logo">
                                            {navbar.site_title}
                                        </h2>
                                    }
                                </>       
                            }
                        </Link>
                    </div>
                </nav>
            </div>

        </>

    )
}



export default Navbar