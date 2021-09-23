module.exports = {
  siteMetadata: {
    title: `Intercambios Transorganicos`,
    description: `Investigacion Transdisciplinaria`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL ? "https://intercambios-transorganicos.herokuapp.com" : "http://localhost:1337",
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`articulos`],
        singleTypes: [`homepage`],
      },
    },
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Pridi\:200, 400, 600`,
          `Jura\:200, 400, 600`,
          `Gaegu\:200, 400, 600`,
          `Gugi\:200, 400, 600`,       
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
