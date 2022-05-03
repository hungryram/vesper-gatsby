module.exports = {
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `main`,
        path: `${__dirname}/content/main`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/uploads`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `legal`,
        path: `${__dirname}/content/legal`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `listings`,
        path: `${__dirname}/content/listings`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `offices`,
        path: `${__dirname}/content/offices`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `our-team`,
        path: `${__dirname}/content/our-team`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `partners`,
        path: `${__dirname}/content/partners`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `press`,
        path: `${__dirname}/content/press`
      }
    },
  ],
}
