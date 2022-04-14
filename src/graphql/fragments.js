import { graphql } from "gatsby"

export const appearanceYamlFragment = graphql`
  fragment AppearanceYaml on DataYaml {
      branding {
        site_title
        dark_logo
        favicon
        logo_width
      }
      icons {
        onefivetwo
        onefourfour
        onetwotwo
        oneonefour
        oneeightzero
        seventwo
      }
      header {
        top_header_color
        header_background_color
        enable_white_text
        enable_white_text_top
        transparent_background
        call_to_action_link
        call_to_action_label
        remove_call_to_action
        mobile_menu {
          background_color
          enable_white_text
        }
      }
      pages {
        image
      }
      page_sidebar {
        sidebar {
          type
          template
        }
      }
      colors {
        button_background_color
        button_text_color
        links
        accent
        idx_title_background_color
        idx_title_text_color
      }
      search_field {
        disable_search
        search_by_state
        search_by_cities
        search_by_properties
        filter_animation
      }
      form {
        form_disclaimer
      }
    }
`
export const developerYamlFragment = graphql`
  fragment DeveloperYaml on DataYaml {
      column_size
      custom_css
      custom_script
      custom_closing_script
    }
`

export const footerYamlFragment = graphql`
  fragment FooterYaml on DataYaml {
      additional_links {
        link
        name
      }
      footer_background_color
      background_image
      logo
      logo_width
      equal_housing_logo
      mls_logo
      realtor_logo
      enable_black_text
      remove_credit
      important_documents
    }
`
export const menuYamlFragment = graphql`
  fragment MenuYaml on DataYaml {
      menu {
        name
        link
        menu {
          name
          link
          menu {
            name
            link
          }
        }
      }
    }
`
export const profileYamlFragment = graphql`
  fragment ProfileYaml on DataYaml {
      company_name
      social_media {
        instagram
        twitter
        facebook
        pinterest
        yelp
        linkedin
        tiktok
      }
      contact_information {
        name
        cell
        phone
        email
        license
        address
        city
        state
        zip_code
        google_page_link
      }
      search_engine_optimization {
        title_tag
        meta_description
        twitter_card {
          twitter_username
        }
      }
    }
`

export const appearanceDataFragment = graphql`
  fragment AppearanceData on File {
    data: childDataYaml {
      ...AppearanceYaml
    }
  }
`

export const developerDataFragment = graphql`
  fragment DeveloperData on File {
    data: childDataYaml {
      ...DeveloperYaml
    }
  }
`

export const footerDataFragment = graphql`
  fragment FooterData on File {
    data: childDataYaml {
      ...FooterYaml
    }
  }
`

export const menuDataFragment = graphql`
  fragment MenuData on File {
    data: childDataYaml {
      ...MenuYaml
    }
  }
`

export const profileDataFragment = graphql`
  fragment ProfileData on File {
    data: childDataYaml {
      ...ProfileYaml
    }
  }
`

export const blogFrontmatterFragment = graphql`
  fragment BlogFrontmatter on MarkdownRemark {
    frontmatter {
      author
      categories
      date
      draft
      featured_image
      image_alt_tag
      is_post
      search_engine_optimization {
        meta_description
        title_tag
      }
      tags
      title
    }
  }
`

export const legalFrontmatterFragment = graphql`
  fragment LegalFrontmatter on MarkdownRemark {
    frontmatter {
      last_update
      search_engine_optimization {
        meta_description
        title_tag
      }
      title
    }
  }
`

export const listingFrontmatterFragment = graphql`
  fragment ListingFrontmatter on MarkdownRemark {
    frontmatter {
      cities
      details {
        bathrooms
        bedrooms
        garage
        hoa
        latitude
        license_number
        longitude
        lot_size
        mls_number
        square_footage
        year_built
      }
      draft
      featured
      listing_agent
      photos {
        gallery {
          image
        }
        main_photo
      }
      price
      properties
      search_engine_optimization {
        meta_description
        title_tag
      }
      short_title
      states
      status
      title
      tools {
        open_house_date
        open_house_details
        youtube_link
      }
      utilities_and_features {
        exterior {
          additional_exterior_details
          exterior_details
          exterior_roof
          show_exterior_details
        }
        interior_details {
          additional_interior_details
          interior_appliances
          interior_flooring
          interior_rooms
          show_interior_details
        }
        community_features {
          additional_community_details
          community_features_choice
          show_community_details
        }
      }
      zip_codes
    }
  }
`

export const officeFrontmatterFragment = graphql`
  fragment OfficeFrontmatter on MarkdownRemark {
    frontmatter {
      contact {
        address {
          address
          city
          state
          zip_code
        }
        email
        fax_number
        license_number
        phone
        website
      }
      draft
      photo
      search_engine_optimization {
        meta_description
        title_tag
      }
      social_media {
        facebook
        instagram
        linkedin
        pinterest
        tiktok
        twitter
        yelp
        youtube
      }
      title
      weight
    }
  }
`

export const teamFrontmatterFragment = graphql`
  fragment TeamFrontmatter on MarkdownRemark {
    frontmatter {
      contact {
        cell
        email
      }
      details {
        languages
        license_number
        office_location
        position
        specialty
        website
      }
      draft
      photo
      search_engine_optimization {
        meta_description
        title_tag
      }
      social_media {
        facebook
        instagram
        linkedin
        pinterest
        tiktok
        twitter
        yelp
        youtube
      }
      title
      weight
    }
  }
`

export const partnerFrontmatterFragment = graphql`
  fragment PartnerFrontmatter on MarkdownRemark {
    frontmatter {
      contact {
        address {
          address
          city
          state
          zip_code
        }
        category
        email
        phone
        website
      }
      draft
      photo
      search_engine_optimization {
        meta_description
        title_tag
      }
      social_media {
        facebook
        instagram
        linkedin
        pinterest
        tiktok
        twitter
        yelp
        youtube
      }
      title
      weight
    }
  }
`

export const blogMarkdownFragment = graphql`
  fragment BlogMarkdown on Blog {
    markdown: childMarkdownRemark {
          ...BlogFrontmatter     
          html
      }
    }
`

export const legalMarkdownFragment = graphql`
  fragment LegalMarkdown on Legal {
    markdown: childMarkdownRemark {
          ...LegalFrontmatter     
          html
      }
    }
`

export const listingMarkdownFragment = graphql`
  fragment ListingMarkdown on Listing {
    markdown: childMarkdownRemark {
          ...ListingFrontmatter     
          html
      }
    }
`

export const officeMarkdownFragment = graphql`
  fragment OfficeMarkdown on Office {
    markdown: childMarkdownRemark {
          ...OfficeFrontmatter     
          html
      }
    }
`

export const teamMarkdownFragment = graphql`
  fragment TeamMarkdown on Team {
    markdown: childMarkdownRemark {
          ...TeamFrontmatter     
          html
      }
    }
`

export const partnerMarkdownFragment = graphql`
  fragment PartnerMarkdown on Partner {
    markdown: childMarkdownRemark {
          ...PartnerFrontmatter     
          html
      }
    }
`

