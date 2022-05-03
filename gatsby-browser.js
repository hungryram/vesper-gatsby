import * as React from "react"
import 'uikit/dist/css/uikit.min.css';
import uikitMin from "uikit/dist/js/uikit.min.js"
import uikitIcons from "uikit/dist/js/uikit-icons.js"
import './src/css/styles.css'
import profile from './data/profile.json'
import appearance from './data/appearance.json'
import developer from './data/developer.json'
import { Helmet } from "react-helmet";
import Layout from "./src/components/globals/Layout";


const UIKitWrapper = ({ children }) => {
    React.useEffect(() => {
        uikitMin.use(uikitIcons)
    })
    return(
        <>{children}</>
    )
}


const EmbedData = () => {

    const colors = appearance.colors
    const seo = profile.search_engine_optimization

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
            {developer.custom_css}

            {/* --- FONTS --- */}
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
        </Helmet>
    )
}

export const wrapPageElement = ({ element }) => {
    return(  
        <Layout>
            {element}
        </Layout>          
    )
}

export const wrapRootElement = ({ element }) => {
    return(
        <UIKitWrapper>
            <EmbedData/>
            {element}
        </UIKitWrapper>
    )
}
