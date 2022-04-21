import * as React from 'react'
import { useSiteData } from '../hooks'

const Site = React.createContext()

const SiteProvider = ({ children }) => {

    const siteData = useSiteData()

    const appearance = siteData.appearance.data
    const profile = siteData.profile.data
    const developer = siteData.developer.data 
    const footer = siteData.footer.data 
    const menu = siteData.menu.data

    return(
        <Site.Provider value={{ appearance, profile, developer, footer, menu }}>
            {children}
        </Site.Provider>
    )
}

export { Site, SiteProvider }