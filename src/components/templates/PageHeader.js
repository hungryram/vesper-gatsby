import * as React from 'react'

const PageHeader = ({ data }) => {

    const page = data.page
    const appearance = data.appearance

    return(
        <>
            <a href="#" id="totop"/>

            { page.photos ?
                <div data-uk-slider>
                    <div className="uk-position-relative">
                        <div className="uk-slider-container">
                            <ul className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@s uk-child-width-1-4@m uk-grid-match uk-height-large baseof-listing">
                                {page.photos.gallery.map((gallery, i) => {
                                    if(i < 3){
                                        return(
                                            <li key={i}>
                                                <div className="uk-cover-container">
                                                    <img src={gallery.image} alt="" data-uk-cover/>
                                                    <div className="listing-detail-overlay uk-position-cover"/>
                                                </div>
                                            </li>
                                        )
                                    }
                                })}
                            </ul>
                            <div className="uk-overlay uk-position-bottom uk-visible@m">
                                <div className="uk-container uk-container-large">
                                    <div className="uk-flex-bottom" data-uk-grid>
                                        <div className="uk-width-1-2@s">
                                            <div className="uk-card">
                                                <ul className="uk-flex uk-list uk-flex-left uk-flex-bottom uk-light">
                                                    <li>
                                                        { page.status ?
                                                            <span 
                                                                className="status uk-badge" 
                                                                style={page.status === 'Sold' ? {background: '#d10000' } : {background: appearance.buttonColor.button_background_color, color: appearance.buttonColor.button_text_color}}
                                                            >
                                                                {page.status }
                                                            </span>
                                                        : null }
                                                        { page.featured ?
                                                            <span className="featured uk-badge">{page.featured}</span>
                                                        : null }
                                                        { page.short_title ?
                                                            <h2 className="uk-margin-small-top uk-h1 uk-text-bold">{page.short_title}</h2>
                                                        : null }
                                                        <h1 className="uk-margin-remove uk-h5">
                                                            { page.title ? page.title : null }, 
                                                            { page.cities ? page.cities : null }, 
                                                            { page.states ? page.states : null }, 
                                                            { page.zip_codes ? page.zip_codes : null }
                                                        </h1>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="uk-width-1-2@s">
                                            <div className="uk-card">
                                                <div className="uk-display-block">
                                                    <ul className="uk-flex uk-list uk-flex-right uk-flex-bottom">
                                                        <li className="uk-light">
                                                            <p className="uk-margin-remove">Price</p>
                                                            <h3 className="uk-margin-remove">{ page.price ? page.price : null }</h3>

                                                        </li>
                                                        <li>
                                                            { page.listing_agent ?
                                                                <>
                                                                    {page.contact.cell ?                                                           
                                                                        <a href={`tel:${page.contact.cell}`} className="uk-button uk-button-primary uk-margin-medium-left uk-text-bold uk-flex uk-flex-middle listing-detail-cta">
                                                                            <span data-uk-icon="icon: receiver" className="uk-margin-small-right"/> 
                                                                            More Info
                                                                        </a>
                                                                    :
                                                                        {/*
                                                                            <a href="tel:{{ $.Site.Data.profile.contact_information.cell }}" className="uk-button uk-button-primary uk-margin-medium-left uk-text-bold uk-flex uk-flex-middle listing-detail-cta"><span data-uk-icon="icon: receiver" className="uk-margin-small-right"></span> More Info</a>
                                                                        */}
                                                                    }
                                                                </>
                                                            : null }                                          
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="uk-hidden@s uk-light">
                            <a className="uk-position-center-left uk-position-small uk-visible@s" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                            <a className="uk-position-center-right uk-position-small uk-visible@s" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>
                        </div>

                    </div>
                </div>
            :
                <div className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle page-banner" style={{background: `url(${appearance.pages.image}) no-repeat center`, backgroundSize:'cover'}}>
                    <div className="hero-overlay uk-position-cover"/>
                    <div className="uk-padding uk-margin-large-top uk-text-center uk-container uk-container-small md-content uk-position-relative uk-white">
                        <h1 className="uk-white uk-text-center uk-position-relative uk-h2">{page.title}</h1>
                        { page.body ? <div className="md-content" dangerouslySetInnerHTML={{ __html: page.body }} /> : null }
                    </div>
                </div>
            }
        </>
    )
}

export default PageHeader