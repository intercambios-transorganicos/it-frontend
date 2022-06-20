require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
console.log(process.env.NODE_ENV);
module.exports = {
  siteMetadata: {
    title: `Intercambios Transorganicos`,
    description: `Investigacion Transdisciplinaria`,
    author: ``,
    siteUrl: `https://intercambios-transorganicos.netlify.app`,
  },
  pathPrefix: "/IT-Gatsby",
  plugins: [
    `gatsby-plugin-netlify`,
     {
       resolve: `gatsby-source-strapi`,
       options: {
         apiURL: process.env.API_URL,
         queryLimit: 1000, // Defaults to 100
         collectionTypes: [`articulos`, `playlists`, `members`, `proyectos`, `actividades`, `preguntas`, `infos`],
       },
     },
     
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `B612\:400, 700`,
          `Rubik\:400, 700`,      
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
        icon: `src/images/icono_it.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
