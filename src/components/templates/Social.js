import * as React from 'react'

const Social = ({ site }) => {

    const companySocial = site.profile.data.social_media
    
    return(

        <div className="social_icons">
            {companySocial.facebook ?
                <a href={companySocial.facebook} className="uk-icon-button uk-margin-small-right" data-uk-icon="icon: facebook; ratio: .8" target="_blank" rel="noreferrer"/>
            : null}
            {companySocial.instagram ?
                <a href={companySocial.instagram} className="uk-icon-button uk-margin-small-right" data-uk-icon="icon: instagram; ratio: .8" target="_blank" rel="noreferrer"/>
            : null}
            {companySocial.linkedin ?
                <a href={companySocial.linkedin} className="uk-icon-button uk-margin-small-right" data-uk-icon="icon: linkedin; ratio: .8" target="_blank" rel="noreferrer"/>
            : null}
            {companySocial.pinterest ?
                <a href={companySocial.pinterest} className="uk-icon-button uk-margin-small-right" data-uk-icon="icon: pinterest; ratio: .8" target="_blank" rel="noreferrer"/>
            : null}
            {companySocial.twitter ?
                <a href={companySocial.twitter} className="uk-icon-button uk-margin-small-right" data-uk-icon="icon: twitter; ratio: .8" target="_blank" rel="noreferrer"/>
            : null}
            {companySocial.youtube ?
                <a href={companySocial.youtube} className="uk-icon-button uk-margin-small-right" data-uk-icon="icon: youtube; ratio: .8" target="_blank" rel="noreferrer"/>
            : null}
            {companySocial.tiktok ?
                <a href={companySocial.tiktok} className="uk-icon-button uk-margin-small-right" data-uk-icon="icon: tiktok; ratio: .8" target="_blank" rel="noreferrer"/>
            : null}
            {companySocial.yelp ?
                <a href={companySocial.yelp} className="uk-icon-button uk-margin-small-right" data-uk-icon="icon: yelp; ratio: .8" target="_blank" rel="noreferrer"/>
            : null}
        </div>

    )
}

export default Social
