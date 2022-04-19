import * as React from "react"
import 'uikit/dist/js/uikit.min'
import uikitMin from "uikit/dist/js/uikit.min.js"
import uikitIcons from "uikit/dist/js/uikit-icons.js"
import './src/css/styles.css'
import Navbar from "./src/components/globals/navbar";
import Helmet from "react-helmet";
import { useSiteData } from "./src/hooks";
import Footer from "./src/components/globals/footer";

const UIKitWrapper = ({ children }) => {
    React.useEffect(() => {
        uikitMin.use(uikitIcons)
    })
    return(
        <>{children}</>
    )
}


const EmbedData = () => {

    const { appearance, developer, profile } = useSiteData()
    const colors = appearance.data.colors
    const seo = profile.data.search_engine_optimization

    return (        
        <Helmet>
            <style>
                {`:root {
                    --primary-button-background: ${colors.button_background_color};
                    --primary-button-text-color: ${colors.button_text_color};
                    --primary-link-color: ${colors.links};
                    --primary-accent-color: ${colors.accent};
                    --idx-title-color: ${colors.idx_title_background_color};
                    --idx-title-text-color: ${colors.idx_title_text_color};
                `}
            </style>

            {/* --- START SEO --- */}
            <meta name="twitter:site" content={seo.twitter_card.twitter_username} />
            <meta name="twitter:creator" content={seo.twitter_card.twitter_username} />

            {/* --- CUSTOM CSS --- */}
            {developer.data.custom_css}

            {/* --- FONTS --- */}
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
            
        </Helmet>
    )
}

export const wrapPageElement = ({ element }) => {

    return(
        <UIKitWrapper>
            <EmbedData/>
            <Navbar/>
            {element}
            <Footer/>
        </UIKitWrapper>
    )
}
