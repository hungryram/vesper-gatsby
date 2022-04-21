import * as React from 'react'

const PropertyCard = ({ appearance, listing: listingData }) => {
    
    const listing = listingData.markdown.frontmatter
    const cardImage = listing.photos.gallery[0].image

    return(

        <div className="uk-card uk-card-default property-card">
            <div className="uk-card-media-top">
                <div className="uk-cover-container">
                    <canvas height="300"></canvas>
                    {cardImage ?
                        
                        <img src={cardImage} alt={listing.title} data-uk-cover/>
                    :
                        <img src="https://res.cloudinary.com/hungryram19/image/upload/v1645813822/Resources/realestate-assets/no-house-photo.jpg" alt="no house icon" data-uk-cover/>
                    }
                    <div className="property-card-overlay uk-position-cover"/>
                    <div className="uk-position-absolute property-card-details">
                        <div className="uk-text-center uk-light" data-uk-grid>
                            <div className="uk-width-1-2">
                                <div className="uk-card uk-text-left">
                                    {listing.status ?
                                        <span 
                                            className="status uk-badge" 
                                            style={listing.status === 'Sold' ? {background: `#d10000`} : { background: `${appearance.colors.button_background_color}`, color: `${appearance.colors.button_text_color}`}}
                                        >
                                            {listing.status}
                                        </span> 
                                    : null }
                                    {listing.featured ?
                                        <span className="featured uk-badge">
                                            {listing.featured}
                                        </span>
                                    : null }

                                </div>
                            </div>
                            <div className="uk-width-1-2">
                                <div className="uk-card uk-text-right">
                                    <span className="price-badge">
                                        {listing.price}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="uk-position-absolute property-card-address uk-text-left">
                        <div className="uk-white">
                            <h3 className="uk-white uk-h4 uk-text-normal">{listing.short_title}</h3>
                            <span className="grid-address uk-display-block">{listing.title}</span>
                            <span className="grid-address uk-display-block">{listing.cities}, {listing.states}, {listing.zip_codes}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <footer className="card-footer">
                    {listing.details.bedrooms ?
                        <span className="card-footer-item">
                            <img src="https://res.cloudinary.com/hungryram19/image/upload/v1645813824/Resources/realestate-assets/bed_black_24dp.svg" alt="bed icon" width="20"/>
                            <span className="uk-margin-small-left">{listing.details.bedrooms} Beds</span>
                        </span>
                    : null }
                    {listing.details.bathrooms ?
                        <span className="card-footer-item">
                            <img src="https://res.cloudinary.com/hungryram19/image/upload/v1645813822/Resources/realestate-assets/shower_black_24dp.svg" alt="shower icon" width="20"/>
                            <span className="uk-margin-small-left">{listing.details.bathrooms} Baths</span>
                        </span>
                    : null }
                    {listing.details.square_footage ?
                        <span className="card-footer-item">
                            <img src="https://res.cloudinary.com/hungryram19/image/upload/v1645813822/Resources/realestate-assets/square_foot_black_24dp.svg" alt="square footage" width="20"/>
                            <span className="uk-margin-small-left">{listing.details.square_footage} Beds</span>
                        </span>
                    : null }
                    {listing.details.garage ?
                        <span className="card-footer-item">
                            <img src="https://res.cloudinary.com/hungryram19/image/upload/v1645813822/Resources/realestate-assets/garage_black_24dp.svg" alt="garage icon" width="20"/>
                            <span className="uk-margin-small-left">{listing.details.garage} Garage</span>
                        </span>
                    : null }
                </footer>
                {listing.properties ?
                    <footer className="card-footer">
                        <span className="card-footer-item">{listing.properties}</span>
                    </footer>
                : null }
            </div>
        </div>
        
    )
}

export default PropertyCard