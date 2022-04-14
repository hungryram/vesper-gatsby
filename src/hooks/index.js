import { graphql, useStaticQuery } from 'gatsby'

    export const useSiteData = () => {
        const data = useStaticQuery(graphql`
          {
            appearance: file(base: {eq: "appearance.yml"}, sourceInstanceName: {eq: "data"}) {
              ...AppearanceData
            },
            developer: file(base: {eq: "developer.yml"}, sourceInstanceName: {eq: "data"}) {
                ...DeveloperData
            },
            footer: file(base: {eq: "footer.yml"}, sourceInstanceName: {eq: "data"}) {
                ...FooterData
            },
            menu: file(base: {eq: "menu.yml"}, sourceInstanceName: {eq: "data"}) {
                ...MenuData
            },
            profile: file(base: {eq: "profile.yml"}, sourceInstanceName: {eq: "data"}) {
                ...ProfileData
            }
          }
        `) 
        return data
    }

