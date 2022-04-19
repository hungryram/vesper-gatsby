import React from "react"
import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/js/uikit-icons.js'
import './src/css/styles.css'
import Navbar from "./src/components/globals/navbar";
import Helmet from "react-helmet";
import { useSiteData } from "./src/hooks";

const EmbedData = () => {

    const { appearance, developer } = useSiteData()
    const colors = appearance.data.colors

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
            {developer.data.custom_css}
        </Helmet>
    )
}

export const wrapPageElement = ({ element }) => {

    return(
        <>
            <EmbedData/>
            <Navbar/>
            {element}
        </>
    )
}
