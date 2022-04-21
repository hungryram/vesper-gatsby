import * as React from 'react'

const Contact = ({ site }) => {

    const profile = site.profile.data
    const footerContact = profile.contact_information

    return(

        <>
            {footerContact.phone ?
                <li><span className="uk-margin-small-right" data-uk-icon="receiver"></span><a href={`tel:${footerContact.phone}`}>{footerContact.phone}</a></li>
            : null}
            {footerContact.cell ?
                <li><span className="uk-margin-small-right" data-uk-icon="phone"></span><a href={`tel:${footerContact.cell}`}>{footerContact.cell}</a></li>
            : null}
            {footerContact.email ?
                <li><span className="uk-margin-small-right" data-uk-icon="mail"></span><a href={`mailto:${footerContact.email }`}>{footerContact.email }</a></li>
            : null}
            {footerContact.address ?
                <li>
                    <span className="uk-margin-small-right" data-uk-icon="location"></span>
                    <a target="_blank" href={footerContact.google_page_link ? footerContact.google_page_link : `https://www.google.com/maps/place/${footerContact.address},+${footerContact.city},+${footerContact.state}`}>
                        {footerContact.address}, {footerContact.city}, {footerContact.state} {footerContact.zip_code}
                    </a>
                </li>
            : null}
        </>

    )
}

export default Contact