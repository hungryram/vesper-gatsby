import * as React from 'react'
import { Link } from 'gatsby'
import { useSiteData } from '../../hooks'
import Social from '../templates/Social'

const Navbar = () => {

    const site = useSiteData()

    const profile = site.profile.data
    const navbar = site.appearance.data.branding
    const navColor = site.appearance.data.header 
    const navContact = profile.contact_information 
    const mainMenu = site.menu.data.menu

    return(

        <div className="uk-position-top full-nav-wrapper" style={{zIndex: 100}}>
            <div 
                className="uk-visible@m"
                uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky uk-dark; cls-inactive: uk-navbar-transparent; top: 200"
                style={navColor.transparent_background ? {background: 'transparent'} : {background: navColor.header_background_color}}
            >
                <div 
                    className={`top-navbar ${navColor.enable_white_text_top ? 'uk-light' : 'uk-dark'}`} 
                    style={navColor.top_header_color ? {background: navColor.top_header_color} : {background: 'transparent'}}
                >
                    <nav className="uk-container uk-container-large" data-uk-navbar>
                        <div className="uk-navbar-right">
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
                    
                    <div className="uk-container uk-container-large">
            
                        <div className="navbar-padding" data-uk-navbar>

                            <div className="uk-navbar-left">
                                <Link to="/">
                                    {navbar.logo ?
                                        <>      
                                            {navColor.transparent_background ?
                                                <>
                                                    <img
                                                        src={navbar.dark_logo} 
                                                        alt={`${profile.company_name} logo`}
                                                        style={{width: navbar.logo_width}}
                                                        className="dark-logo"
                                                    />
                                                    <img
                                                        src={navbar.logo} 
                                                        alt={`${profile.company_name} logo`}
                                                        style={{width: navbar.logo_width}}
                                                        className="white-logo"
                                                    />
                                                </>
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
                                            <h2 className="uk-h3 uk-margin-remove site-title dark-logo">
                                                {navbar.site_title}
                                            </h2>
                                            <h2 className="uk-h3 uk-margin-remove site-title white-logo">
                                                {navbar.site_title}
                                            </h2>
                                        </>       
                                    }
                                </Link>
                            </div>

                            <div className="uk-navbar-right">
                                <a href="cloudcannon:collections/data/menu.yml" className="editor-link editor-menu editor-content"><span data-uk-icon="icon: file-edit"></span> Edit Menu</a>
                                <ul className="uk-navbar-nav">
                                    {mainMenu.map((menuItem, i) => {
                                        return(
                                            <li key={i}>
                                                {menuItem.menu ?
                                                    <>
                                                        <a href="#">
                                                            {menuItem.name}
                                                            <span className="uk-margin-small-left" data-uk-icon="chevron-down"></span>
                                                        </a>
                                                        <div className="uk-navbar-dropdown">
                                                            <ul className="uk-nav uk-navbar-dropdown-nav">
                                                                {menuItem.menu.map((subMenu, i) => {
                                                                    return(
                                                                        <li key={i}className="uk-active">
                                                                            <Link to={subMenu.link}>{subMenu.name}</Link>
                                                                        </li>
                                                                    )
                                                                })}               
                                                            </ul>
                                                        </div>
                                                    </>
                                                :
                                                    <Link to={menuItem.link ? menuItem.link : '#'}>
                                                        {menuItem.name}
                                                    </Link>
                                                }
                                            </li>
                                        )
                                    })}
                                    { navColor.remove_call_to_action ?
                                        null
                                    : 
                                        <div className="uk-navbar-item cta-button">
                                            <li>
                                                <a href={navColor.call_to_action_link} className="uk-button uk-button-primary">
                                                    {navColor.call_to_action_label}
                                                </a>
                                            </li>
                                        </div>
                                    }
                                </ul>
                            </div>

                        </div>

                    </div>

                </nav>
            </div>

            {/* --- Mobile --- */}

            <div 
                data-uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky uk-dark; cls-inactive: uk-navbar-transparent; top: 200"
                style={{background: navColor.transparent_background ? 'transparent' : navColor.header_background_color}}
            >
                <nav className={`uk-navbar uk-navbar-container uk-hidden@m navbar-padding uk-box-shadow-small uk-padding-small ${navColor.enable_white_text ? 'uk-light' : 'uk-dark'}`}>
                    <div className="uk-navbar-left">
                        <Link to="/">
                            {navbar.logo ?
                                <>      
                                    {navColor.transparent_background ?
                                        <>
                                            <img
                                                src={navbar.dark_logo} 
                                                alt={`${profile.company_name} logo`}
                                                style={{width: navbar.logo_width}}
                                                className="dark-logo"
                                            />
                                            <img
                                                src={navbar.logo} 
                                                alt={`${profile.company_name} logo`}
                                                style={{width: navbar.logo_width}}
                                                className="white-logo"
                                            />
                                        </>
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
                                    <h2 className="uk-h3 uk-margin-remove site-title dark-logo">
                                        {navbar.site_title}
                                    </h2>
                                    <h2 className="uk-h3 uk-margin-remove site-title white-logo">
                                        {navbar.site_title}
                                    </h2>
                                </>       
                            }
                        </Link>
                    </div>
                    <div className="uk-navbar-right">
                        <a href="cloudcannon:collections/data/menu.yml" className="editor-link editor-menu editor-content"><span data-uk-icon="icon: file-edit"></span> Edit Menu</a>
                        <a className="uk-navbar-toggle" data-uk-navbar-toggle-icon href="#mobile-menu-slide" data-uk-toggle></a>
                    </div>
                </nav>
            </div>
            <div id="mobile-menu-slide" data-uk-offcanvas>
                <div className="uk-offcanvas-bar uk-flex uk-flex-column" style={{ background: navColor.mobile_menu.background_color }}>
                    <ul className={`uk-nav-default uk-nav-parent-icon uk-margin-auto-vertical ${navColor.mobile_menu.enable_white_text ? 'uk-light' : 'uk-dark'}`} data-uk-nav>
                        {mainMenu.map((menuItem, i) => {
                            return(
                                <li key={i} className="uk-parent">
                                    {menuItem.menu ?
                                        <>
                                            <a href="#">
                                                {menuItem.name}
                                            </a>
                                            <ul className="uk-nav-sub">
                                                {menuItem.menu.map((subMenu, i) => {
                                                    return(
                                                        <li key={i} className="uk-active">
                                                            <Link to={subMenu.link ? subMenu.link : '#'}>{subMenu.name}</Link>
                                                        </li>
                                                    )
                                                })}               
                                            </ul>
                                        </>
                                    :
                                        <Link key={i} to={menuItem.link ? menuItem.link : '#'}>
                                            {menuItem.name}
                                        </Link>
                                    }
                                </li>
                            )
                        })}
                        {navColor.remove_call_to_action ?
                            null
                        :
                            <div className="uk-navbar-item cta-button">
                                <li><a href={navColor.call_to_action_link} className="uk-button uk-button-primary uk-width-1-1">{navColor.call_to_action_label}</a></li>
                            </div>
                        }
                        <li className="uk-nav-header"></li>
                        <li className="uk-nav-divider"></li>
                        <li className="uk-nav-header"></li>
                            {navContact.email ?
                                <li>
                                    <a 
                                        href={`mailto: ${navContact.email}`}
                                        className="uk-link-text uk-display-block hr-wordbreak"
                                    >
                                        <strong>Email:</strong>
                                        <br/>
                                        {navContact.email}
                                    </a>
                                </li>
                            : null }
                            {navContact.phone ?
                                <li>
                                    <a 
                                        href={`tel: ${navContact.phone}`}
                                        className="uk-link-text uk-display-block hr-wordbreak"
                                    >
                                        <strong>Office:</strong>
                                        <br/>
                                        {navContact.phone}
                                    </a>
                                </li>
                            : null }
                            {navContact.cell ?
                                <li>
                                    <a 
                                        href={`tel: ${navContact.cell}`}
                                        className="uk-link-text uk-display-block hr-wordbreak"
                                    >
                                        <strong>Direct:</strong>
                                        <br/>
                                        {navContact.cell}
                                    </a>
                                </li>
                            : null }
                            {navContact.address ?
                                <li>
                                    <a 
                                        href={navContact.google_page_link? navContact.google_page_link : `https://www.google.com/maps/place/${navContact.address.address},+${navContact.address.city},+${navContact.address.state}+${navContact.address.zip_code}`}
                                        className="uk-link-text uk-display-block hr-wordbreak"
                                    >
                                        <strong>Address:</strong>
                                        <br/>
                                        {navContact.address.address}, {navContact.address.city}, {navContact.address.state} {navContact.address.zip_code}
                                    </a>
                                </li>
                            : null }

                        <li className="uk-nav-header"></li>

                        <Social site={site}/>

                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Navbar