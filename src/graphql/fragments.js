import { graphql } from "gatsby"

export const idxFragment = graphql`
  fragment IdxData on Idx {
    _id
    _type
    title
    slug
    cities
    states
    zip_codes
    listing_agent
    status
    price
    details {
      description
      squareFeet
      bedrooms
      fullBathrooms
      partialBathrooms
      latitude
      longitude
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

