const typeDefs =`

    type Branding {
        site_title: String
        logo: String
        dark_logo: String
        favicon: String
        logo_width: Int
    }

    type Icons {
        onefivetwo: String
        onefourfour: String
        onetwotwo: String
        oneonefour: String
        oneeightzero: String
        seventwo : String
    }

    type MobileMenu {
        background_color: String
        enable_white_text: Boolean
    }

    type Header {
        top_header_color: String
        header_background_color: String
        enable_white_text: Boolean
        enable_white_text_top: Boolean
        transparent_background: Boolean
        call_to_action_link: String
        call_to_action_label: String
        remove_call_to_action: Boolean
        mobile_menu: MobileMenu
    }

    type Pages {
        image: String
    }

    type Sidebar {
        type: String
        template: String
    }

    type PageSidebar {
        sidebar: [Sidebar]
    }

    type Colors {
        button_background_color: String
        button_text_color: String
        links: String
        accent: String
        idx_title_background_color: String
        idx_title_text_color: String
    }

    type SearchField {
        disable_search: Boolean
        search_by_state: Boolean
        search_by_cities: Boolean
        search_by_properties: Boolean
        filter_animation: String
    }

    type Form {
        form_disclaimer: String
    }

    type AdditionalLink {
        link: String
        name: String
    }

    type TertiaryMenu {
        name: String
        link: String
    }

    type SecondaryMenu {
        name: String
        link: String
        menu: [TertiaryMenu]
    }

    type BaseMenu {
        name: String
        link: String
        menu: [SecondaryMenu]
    }

    type SocialMedia {
        facebook: String
        instagram: String
        linkedin: String
        pinterest: String
        tiktok: String
        twitter: String
        yelp: String
        youtube: String
    }

    type ProfileContact {
        name: String
        cell: String
        phone: String
        email: String
        license: String
        address: String
        city: String
        state: String
        zip_code: String
        google_page_link: String
    }

    type TwitterCard {
        twitter_username: String
    }

    type ProfileSEO {
        title_tag: String
        meta_description: String
        twitter_card: TwitterCard
    }

    type Block {
        heading: String
        image: String
        link: String
    }

    type Slideshow {
        body: String
        enable_white_text: Boolean
        heading: String
        image: String
        link: String
        link_label: String
        subtitle: String
    }

    type SlideshowSettings {
        display_button: Boolean
        enable_autoplay: Boolean
        enable_black_text: Boolean
        enable_default_search: Boolean
        enable_idx_search: Boolean
        enable_ken_burns_effect: Boolean
        slide_animation: String
    }

    type VideoBackground {
        body: String
        button_label: String
        button_link: String
        enable_black_text: Boolean
        heading: String
        video_link: String
    }
   
    type HomeSection {
        _type: String
        blocks: [Block]
        body: String
        button: String
        button_link: String
        heading: String
        image: String
        image_alt_tag: String
        image_width: Int
        template: String
    }

    type Testimonial {
        date: Date
        name: String
        source: String
        source_label: String
        testimonial: String
    }

    type Main {
        name: String
        weight: Int
    }

    type Menu {
        main: Main
    }

    type Gallery {
        image: String
    }

    type Photos {
        gallery: [Gallery]
        main_photo: String
    }

    type Press {
        description: String
        heading: String
        image: String
        link: String
    }

    type SEO {
        meta_description: String
        title_tag: String
        no_index: Boolean
    }

    type Tools {
        open_house_date: Date
        open_house_details: String
        youtube_link: String
    }

    type CommunityFeatures{
        additional_community_details: [String]
        community_features_choice: [String]
        show_community_details: Boolean
    }

    type Exterior{
        additional_exterior_details: [String]
        exterior_details: [String] 
        exterior_roof: [String] 
        show_exterior_details: Boolean
    }

    type InteriorDetails {
        additional_interior_details: [String] 
        interior_appliances: [String] 
        interior_flooring: [String] 
        interior_rooms: [String] 
        show_interior_details: Boolean
    }

    type Utilities {
        community_features: CommunityFeatures
        exterior: Exterior
        interior_details: InteriorDetails
    }

    type Details{
        bathrooms: String
        bedrooms: String
        garage: String
        hoa: String
        latitude: String
        longitude: String
        lot_size: String
        mls_number: String
        square_footage: String
        year_built: String
        languages: [String]
        license_number: String
        office_location: String
        position: String
        specialty: [String] 
        website: String
    }

    type Address {
        address: String
        city: String
        state: String
        zip_code: String
    }

    type Contact {
        address: Address
        cell: String
        email: String
        fax_number: String
        license_number: String
        phone: String
        website: String
        category: String
    }

    type MarkdownRemarkFrontmatter {
        author: String
        body: String
        categories: [String]
        cities: String
        contact: Contact
        details: Details
        date: Date
        draft: Boolean
        featured: String
        featured_image: String
        heading: String
        home_sections: [HomeSection]
        image_alt_tag: String
        is_post: Boolean
        last_update: Date
        layout: String
        listing_agent: String
        menu: Menu
        meta_description: String
        photo: String
        photos: Photos
        press: [Press]
        properties: String
        search_engine_optimization: SEO
        short_title: String
        slideshow: [Slideshow]
        slideshow_settings: SlideshowSettings
        social_media: SocialMedia
        states: String
        status: String
        tags: [String]
        testimonials: [Testimonial]
        title: String
        tools: Tools
        utilities_and_features: Utilities
        video_background: VideoBackground
        weight: Int
        zip_codes: String
    }

    type ChildMarkdownRemark implements Node {
        frontmatter: MarkdownRemarkFrontmatter
        html: String
    }

    type IdxDetails {
        description: String
        squareFeet: String
        bedrooms: String
        fullBathrooms: String
        partialBathrooms: String
        latitude: String
        longitude: String
    }

    type IdxImage {
        _id: String
        image: String
        order: String
    }

    type IdxPhotos {
        gallery: [IdxImage]
    }

    type Idx implements Node {
        _id: String
        _type: String
        title: String
        slug: String
        cities: String
        states: String
        zip_codes: String
        listing_agent: String
        status: String
        price: String
        details: IdxDetails
        photos: IdxPhotos
    }

`

module.exports = typeDefs