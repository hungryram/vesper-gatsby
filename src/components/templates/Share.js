import * as React from 'react'

const Share = ({ url, title, summary, image }) => {

    return(
        <div id="social-share">
            <h2 className="uk-h5 hr-text-medium-bold">Share This</h2>
            <div>
                <a href={`https://www.facebook.com/sharer/sharer.php?url=${url}`} className="share-button facebook" target="_blank"><span data-uk-icon="icon: facebook"></span> Share on Facebook</a>
            </div>
            <div>
                <a href={`https://twitter.com/intent/tweet?url=${url}`} className="share-button twitter" target="_blank"><span data-uk-icon="icon: twitter"></span> Tweet this</a>
            </div>
            <div>
                <a href={`https://www.linkedin.com/shareArticle?url=${url}&title=${title}&mini=true`} className="share-button linkedin" target="_blank"><span data-uk-icon="icon: linkedin"></span> Share on Linkedin</a>
            </div>
            <div>
                <a href={`https://pinterest.com/pin/create/button/?url=${url}&description=${summary}&media=${image}`} className="share-button pinterest" target="_blank"><span data-uk-icon="icon: pinterest"></span> Pin on Pinterest</a>
            </div>
            <div>
                <a className="share-button email" href={`mailto:?subject=${title}`} target="_blank"><span data-uk-icon="icon: envelope"></span> Share via Email</a>
            </div>

        </div>
    )
}

export default Share