import * as React from 'react'

const Hero = ({ slideshow, slideshowSettings, videoBackground }) => {

    return(

        <>
            {videoBackground.video_link ?
                <div className="uk-cover-container uk-flex uk-flex-middle uk-flex-center" data-uk-height-viewport>
                    <video src={videoBackground.video_link} defaultMuted autoplay loop muted playsinline data-uk-cover/>
                    <div className="black-overlay"/>
                    <div className="uk-position-center">
                        <div className="uk-section-small">
                            <div className="uk-container uk-container-small uk-text-center uk-transition-slide-bottom-small">
                                <div className={videoBackground.enable_black_text ? 'uk-dark' : 'uk-light'}>
                                    <h1 className="uk-h1">{videoBackground.heading}</h1>
                                    <div className="md-content" dangerouslySetInnerHTML={{ __html: videoBackground.body }}/>
                                </div>
                                <a href={videoBackground.button_link} className="uk-button uk-button-primary">{videoBackground.button_label}</a>
                            </div>
                        </div>
                    </div>
                </div>
            :
                <div 
                    className="uk-position-relative uk-visible-toggle main-hero" 
                    data-uk-slideshow={`animation: ${slideshowSettings.slide_animation};autoplay: ${slideshowSettings.enable_autoplay}`}
                    tabIndex="-1" 
                >
                    <ul className="uk-slideshow-items" data-uk-height-viewport>
                        {slideshow ?
                            <>
                                {slideshow.map((slide, i) => {
                                    return(
                                        <li key={i}>
                                            <div className={`uk-position-cover uk-transform-origin-center-left ${slideshowSettings.enable_ken_burns_effect ?  'uk-animation-kenburns' : ''}`}>
                                                <img src={slide.image} alt="" data-uk-cover />
                                                <div className="hero-overlay uk-position-cover"/>
                                            </div>
                                            <div className="uk-position-center uk-position-small uk-text-center">
                                                <div className="uk-width-2xlarge uk-transition-slide-bottom-small">
                                                    <div className={slideshowSettings.enable_black_text ? 'uk-dark' : 'uk-light'}>
                                                        { slide.subtitle ? <h4>{slide.subtitle}</h4> : null }
                                                        { slide.heading ? <h1 className="uk-margin-remove">{slide.heading}</h1> : null }
                                                        { slide.body ?
                                                            <div className="md-content uk-white uk-text-default" dangerouslySetInnerHTML={{ __html: slide.body }}/>
                                                        : null }
                                                    </div>
                                                    {slideshowSettings.display_button ?
                                                        <div className="uk-margin-medium-top">
                                                            <a href={slide.link} className="uk-button uk-button-primary">{slide.link_label}</a>
                                                        </div>
                                                    : null }
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </>
                        : null }

                    </ul>
                </div>
            }

        </>

    )
}

export default Hero
